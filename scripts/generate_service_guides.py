from __future__ import annotations

from datetime import date
from pathlib import Path
from shutil import copy2
from zipfile import ZIP_DEFLATED, ZipFile
from xml.sax.saxutils import escape


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "service-guides"
PUBLIC_OUTPUT = ROOT / "public" / "docs" / "service-guides"
TODAY = "17 October 2026"
W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"


def xml_escape(value: str) -> str:
    return escape(str(value), {'"': "&quot;", "'": "&apos;"})


def run(text: str, *, bold: bool = False, italic: bool = False, color: str | None = None, size: int | None = None) -> str:
    properties: list[str] = []
    if bold:
        properties.append("<w:b/>")
    if italic:
        properties.append("<w:i/>")
    if color:
        properties.append(f'<w:color w:val="{color}"/>')
    if size:
        properties.append(f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>')
    props = f"<w:rPr>{''.join(properties)}</w:rPr>" if properties else ""
    return f'<w:r>{props}<w:t xml:space="preserve">{xml_escape(text)}</w:t></w:r>'


def paragraph(
    text: str = "",
    *,
    style: str = "Normal",
    bold_prefix: str | None = None,
    italic: bool = False,
    color: str | None = None,
    align: str | None = None,
    page_break: bool = False,
    keep_next: bool = False,
    num_id: int | None = None,
) -> str:
    p_properties: list[str] = [f'<w:pStyle w:val="{style}"/>']
    if align:
        p_properties.append(f'<w:jc w:val="{align}"/>')
    if keep_next:
        p_properties.append("<w:keepNext/>")
    if num_id is not None:
        p_properties.append(f'<w:numPr><w:ilvl w:val="0"/><w:numId w:val="{num_id}"/></w:numPr>')
    content: list[str] = []
    if page_break:
        content.append('<w:r><w:br w:type="page"/></w:r>')
    elif bold_prefix and text.startswith(bold_prefix):
        content.append(run(bold_prefix, bold=True, color=color))
        content.append(run(text[len(bold_prefix):], italic=italic, color=color))
    elif text:
        content.append(run(text, italic=italic, color=color))
    return f'<w:p><w:pPr>{"".join(p_properties)}</w:pPr>{"".join(content)}</w:p>'


def heading(text: str, level: int = 1) -> str:
    return paragraph(text, style=f"Heading{level}", keep_next=True)


def bullet(text: str, *, numbered: bool = False) -> str:
    return paragraph(text, style="ListParagraph", num_id=2 if numbered else 1)


def table(rows: list[list[str]], *, widths: list[int] | None = None) -> str:
    widths = widths or [3000] * len(rows[0])
    borders = (
        '<w:tblBorders><w:top w:val="single" w:sz="6" w:color="D8D1C5"/>'
        '<w:left w:val="single" w:sz="6" w:color="D8D1C5"/>'
        '<w:bottom w:val="single" w:sz="6" w:color="D8D1C5"/>'
        '<w:right w:val="single" w:sz="6" w:color="D8D1C5"/>'
        '<w:insideH w:val="single" w:sz="4" w:color="E6E0D7"/>'
        '<w:insideV w:val="single" w:sz="4" w:color="E6E0D7"/></w:tblBorders>'
    )
    grid = "".join(f'<w:gridCol w:w="{width}"/>' for width in widths)
    output = [
        '<w:tbl><w:tblPr><w:tblStyle w:val="GuideTable"/><w:tblW w:w="0" w:type="auto"/>'
        f"{borders}</w:tblPr><w:tblGrid>{grid}</w:tblGrid>"
    ]
    for row_index, row in enumerate(rows):
        output.append("<w:tr>")
        for index, value in enumerate(row):
            shade = '<w:shd w:fill="193B4A"/>' if row_index == 0 else ""
            text_color = "FFFFFF" if row_index == 0 else "25323A"
            style = "TableHeader" if row_index == 0 else "TableText"
            output.append(
                f'<w:tc><w:tcPr><w:tcW w:w="{widths[index]}" w:type="dxa"/>{shade}</w:tcPr>'
                f'{paragraph(value, style=style, color=text_color)}</w:tc>'
            )
        output.append("</w:tr>")
    output.append("</w:tbl>")
    return "".join(output)


def note(text: str) -> str:
    return (
        '<w:p><w:pPr><w:pStyle w:val="Note"/></w:pPr>'
        '<w:r><w:rPr><w:b/><w:color w:val="8A5A2B"/></w:rPr><w:t>Important: </w:t></w:r>'
        f'{run(text, italic=True, color="5A4635")}</w:p>'
    )


def hyperlink(text: str, url: str) -> str:
    # External links are intentionally plain text in these guides. This helper keeps
    # the source register readable while avoiding a relationship per source URL.
    return paragraph(f"{text}: {url}", style="Small")


def header_xml() -> str:
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:hdr xmlns:w="{W_NS}"><w:p><w:pPr><w:pStyle w:val="Header"/></w:pPr>'
        f'{run("ACE  |  Anay Consultants & Engineers", bold=True, color="193B4A", size=18)}'
        f'{run("  •  Engineering Data You Can Build On.", color="8A5A2B", size=16)}'
        '</w:p></w:hdr>'
    )


def footer_xml() -> str:
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        f'<w:ftr xmlns:w="{W_NS}" xmlns:r="{R_NS}"><w:p><w:pPr><w:pStyle w:val="Footer"/></w:pPr>'
        f'{run("ACE  |  Detailed service guide  |  ", color="6B7478", size=16)}'
        '<w:fldSimple w:instr="PAGE"><w:r><w:rPr><w:color w:val="6B7478"/><w:sz w:val="16"/></w:rPr></w:r></w:fldSimple>'
        '</w:p></w:ftr>'
    )


def styles_xml() -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="{W_NS}">
  <w:docDefaults>
    <w:rPrDefault><w:rPr><w:rFonts w:ascii="Aptos" w:hAnsi="Aptos"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:color w:val="25323A"/></w:rPr></w:rPrDefault>
    <w:pPrDefault><w:pPr><w:spacing w:after="140" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:next w:val="Subtitle"/><w:qFormat/><w:pPr><w:jc w:val="left"/><w:spacing w:before="480" w:after="180"/></w:pPr><w:rPr><w:rFonts w:ascii="Aptos Display" w:hAnsi="Aptos Display"/><w:b/><w:sz w:val="48"/><w:szCs w:val="48"/><w:color w:val="193B4A"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Subtitle"><w:name w:val="Subtitle"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:spacing w:after="300"/></w:pPr><w:rPr><w:sz w:val="26"/><w:szCs w:val="26"/><w:color w:val="8A5A2B"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:outlineLvl w:val="0"/><w:spacing w:before="420" w:after="140"/></w:pPr><w:rPr><w:rFonts w:ascii="Aptos Display" w:hAnsi="Aptos Display"/><w:b/><w:sz w:val="31"/><w:szCs w:val="31"/><w:color w:val="193B4A"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="260" w:after="100"/></w:pPr><w:rPr><w:b/><w:sz w:val="25"/><w:szCs w:val="25"/><w:color w:val="8A5A2B"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="180" w:after="80"/></w:pPr><w:rPr><w:b/><w:sz w:val="22"/><w:szCs w:val="22"/><w:color w:val="193B4A"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="ListParagraph"><w:name w:val="List Paragraph"/><w:basedOn w:val="Normal"/><w:pPr><w:ind w:left="420" w:hanging="220"/><w:spacing w:after="80"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Note"><w:name w:val="ACE Note"/><w:basedOn w:val="Normal"/><w:pPr><w:shd w:fill="F4EBDD"/><w:ind w:left="180" w:right="180"/><w:spacing w:before="160" w:after="180"/></w:pPr><w:rPr><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Small"><w:name w:val="Small"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:after="70"/></w:pPr><w:rPr><w:sz w:val="18"/><w:szCs w:val="18"/><w:color w:val="5A6469"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="TableText"><w:name w:val="Table Text"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:after="50" w:line="240" w:lineRule="auto"/></w:pPr><w:rPr><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="TableHeader"><w:name w:val="Table Header"/><w:basedOn w:val="Normal"/><w:pPr><w:spacing w:after="50"/></w:pPr><w:rPr><w:b/><w:sz w:val="18"/><w:szCs w:val="18"/><w:color w:val="FFFFFF"/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Header"><w:name w:val="Header"/><w:basedOn w:val="Normal"/><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="6" w:color="D8D1C5"/></w:pBdr><w:spacing w:after="80"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Footer"><w:name w:val="Footer"/><w:basedOn w:val="Normal"/><w:pPr><w:pBdr><w:top w:val="single" w:sz="6" w:space="6" w:color="D8D1C5"/></w:pBdr><w:jc w:val="right"/></w:pPr></w:style>
  <w:style w:type="table" w:styleId="GuideTable"><w:name w:val="ACE Guide Table"/><w:basedOn w:val="TableNormal"/><w:tblPr><w:tblCellMar><w:top w:w="110" w:type="dxa"/><w:start w:w="110" w:type="dxa"/><w:bottom w:w="110" w:type="dxa"/><w:end w:w="110" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style>
</w:styles>'''


def numbering_xml() -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="{W_NS}">
  <w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="420" w:hanging="220"/></w:pPr><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/></w:rPr></w:lvl></w:abstractNum>
  <w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="singleLevel"/><w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="decimal"/><w:lvlText w:val="%1."/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="420" w:hanging="220"/></w:pPr></w:lvl></w:abstractNum>
  <w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
  <w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num>
</w:numbering>'''


def document_rels() -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>
</Relationships>'''


def package_rels() -> str:
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>'''


def content_types() -> str:
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxml-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
  <Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>
  <Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>'''


def core_props(title: str) -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>{xml_escape(title)}</dc:title><dc:creator>Anay Consultants &amp; Engineers</dc:creator><cp:lastModifiedBy>ACE Technical Desk</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">2026-10-17T00:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-10-17T00:00:00Z</dcterms:modified>
</cp:coreProperties>'''


def app_props() -> str:
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>ACE Service Guide Generator</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs/><TitlesOfParts/></Properties>'''


def settings_xml() -> str:
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="{W_NS}"><w:zoom w:percent="100"/><w:defaultTabStop w:val="720"/><w:themeFontLang w:val="en-IN"/><w:compat/><w:doNotTrackFormatting/></w:settings>'''


def sect_pr() -> str:
    return (
        f'<w:sectPr><w:headerReference w:type="default" r:id="rId4" xmlns:r="{R_NS}"/>'
        f'<w:footerReference w:type="default" r:id="rId5" xmlns:r="{R_NS}"/>'
        '<w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080" w:header="540" w:footer="540" w:gutter="0"/>'
        '<w:cols w:space="720"/><w:docGrid w:linePitch="360"/></w:sectPr>'
    )


def build_document(service: dict) -> str:
    body: list[str] = []
    body.append(paragraph("ANAY CONSULTANTS & ENGINEERS", style="Small", color="8A5A2B", bold_prefix="ANAY CONSULTANTS & ENGINEERS"))
    body.append(paragraph(f"{service['number']}  |  ACE SERVICE GUIDE", style="Small", color="5A6469"))
    body.append(paragraph(service["title"], style="Title"))
    body.append(paragraph(service["subtitle"], style="Subtitle"))
    body.append(paragraph("Prepared for service communication, technical briefing and project scoping", style="Small"))
    body.append(paragraph(f"Version 1.0  |  {TODAY}  |  Indore, Madhya Pradesh", style="Small"))
    body.append(note("This guide is a detailed service description, not a statutory approval, accreditation certificate, legal opinion or guarantee of project outcome. Applicable standards, permissions, accreditation scope and deliverables must be confirmed for the specific assignment."))
    body.append(paragraph("", page_break=True))

    body.append(heading("1. Service overview"))
    body.extend(paragraph(text) for text in service["overview"])

    body.append(heading("2. Scope of work"))
    body.extend(paragraph(text) for text in service["scope"])

    body.append(heading("3. Detailed service components"))
    body.append(table([["Service component", "What the assignment may include"]] + service["components"], widths=[3000, 6900]))

    body.append(heading("4. Standards, codes and government guidance"))
    body.append(paragraph("The following references are commonly relevant to this service. The controlling edition, amendment, method, authority requirement and contract specification must be checked before issue or execution."))
    body.append(table([["Reference area", "Applicable references and use"]] + service["standards"], widths=[2600, 7300]))

    body.append(heading("5. Target clients and project types"))
    body.append(paragraph("This service is suited to the following client groups and project situations, subject to the agreed scope and procurement route:"))
    body.extend(bullet(item) for item in service["clients"])

    body.append(heading("6. Delivery workflow"))
    body.append(paragraph("A clear brief and traceable records reduce rework. A typical engagement follows these steps:"))
    body.extend(bullet(item, numbered=True) for item in service["workflow"])

    body.append(heading("7. Typical deliverables"))
    body.extend(bullet(item) for item in service["deliverables"])

    body.append(heading("8. Benefits and decision value"))
    body.extend(bullet(item) for item in service["benefits"])

    body.append(heading("9. Responsibilities and claim boundaries"))
    body.extend(bullet(item) for item in service["boundaries"])

    body.append(heading("10. Frequently asked questions"))
    for question, answer in service["faqs"]:
        body.append(heading(question, level=3))
        body.append(paragraph(answer))

    body.append(heading("11. Suggested copyright-free image direction"))
    body.append(paragraph("Use original photography or verify the individual licence before publishing. Unsplash and Pexels are useful search sources, but the licence of the exact asset should still be checked."))
    body.append(table([["Image subject", "Description and search keywords"]] + [[item["subject"], f"{item['description']} Search keywords: {item['keywords']}"] for item in service["images"]], widths=[2900, 7000]))

    body.append(heading("12. Official source register"))
    body.append(paragraph("The source families below should be checked against the latest official publication, notification or portal before using this guide for a tender, regulatory submission or contractual commitment."))
    body.extend(hyperlink(label, url) for label, url in service["sources"])

    body.append(heading("13. Conclusion"))
    body.extend(paragraph(text) for text in service["conclusion"])

    body_xml = "".join(body) + sect_pr()
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="{W_NS}" xmlns:r="{R_NS}"><w:body>{body_xml}</w:body></w:document>'''


def write_docx(service: dict) -> Path:
    filename = OUTPUT / f"{service['slug']}.docx"
    with ZipFile(filename, "w", ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types())
        docx.writestr("_rels/.rels", package_rels())
        docx.writestr("word/document.xml", build_document(service))
        docx.writestr("word/styles.xml", styles_xml())
        docx.writestr("word/numbering.xml", numbering_xml())
        docx.writestr("word/settings.xml", settings_xml())
        docx.writestr("word/header1.xml", header_xml())
        docx.writestr("word/footer1.xml", footer_xml())
        docx.writestr("word/_rels/document.xml.rels", document_rels())
        docx.writestr("docProps/core.xml", core_props(service["title"]))
        docx.writestr("docProps/app.xml", app_props())
    return filename


SERVICES = [
    {
        "slug": "engineering-dpr-turnkey-consultancy",
        "number": "01",
        "title": "Engineering, DPR & Turnkey Consultancy",
        "subtitle": "From reconnaissance to DPR, design, procurement support and PMC — engineering that can be built, billed and audited.",
        "overview": [
            "Engineering consultancy is most useful when the survey, design, quantity, quality and construction records agree with one another. ACE coordinates these technical inputs through its specialist network so that owners, public agencies, EPC contractors and PMCs can work from one project basis.",
            "The service covers feasibility and reconnaissance, Detailed Project Reports, civil and structural design coordination, quantities and estimates, tender support, peer review, owner’s-engineer or PMC support, and construction-stage technical assistance. The exact assignment is set by the employer’s requirements, authority format, contract and available project information.",
            "The objective is not to create a larger report. It is to create a decision-ready technical file: clear assumptions, traceable measurements, coordinated drawings, usable quantities, and a defined path from concept to implementation.",
        ],
        "scope": [
            "Work may begin with a project brief, site reconnaissance or a review of an incomplete package. The team identifies the project objective, land and utility constraints, existing survey and geotechnical information, authority requirements, procurement route, programme and decision gates.",
            "The scope can then progress through option development, feasibility or pre-feasibility analysis, concept design, preliminary and detailed design, cost estimation, BOQ preparation, bid documentation, technical clarifications, construction-stage review, measurement and handover support.",
            "Survey and laboratory inputs are coordinated into the design basis where they are part of the assignment. A design, DPR or estimate should not be treated as final until the relevant assumptions, approvals, design checks, client decisions and project-specific specifications have been confirmed.",
        ],
        "components": [
            ["Feasibility and reconnaissance", "Review the brief, site, access, land, utilities, constraints, options, preliminary risks and information gaps. Field reconnaissance is not a substitute for a detailed survey or investigation unless specifically included."],
            ["DPR and feasibility reports", "Prepare a structured project basis covering need, site context, options, design criteria, implementation approach, quantities, cost basis, programme, risks and approval interfaces."],
            ["Civil and structural design coordination", "Coordinate drawings, calculations, design criteria, survey control, material assumptions and specialist inputs for roads, buildings, industrial civil works, water resources and related infrastructure where included."],
            ["Quantities, estimates and bid engineering", "Develop quantity take-offs, BOQs, cost estimates, rate analysis, technical specifications, schedules and clarification responses against the adopted procurement and authority format."],
            ["Design review and constructability", "Check interfaces, build sequence, access, drainage, material availability, measurement logic and maintainability; identify coordination issues before they become site variations."],
            ["PMC and owner’s-engineer support", "Support submittal review, RFIs, technical meetings, progress evidence, measurement discussions, variations, quality records and close-out within the role defined by the contract."],
            ["Handover and technical close-out", "Coordinate as-built information, test records, warranties, operation inputs, punch-list closure and the final technical file where these deliverables are included."],
        ],
        "standards": [
            ["Employer and authority requirements", "Employer’s requirements, contract conditions, approved design criteria, authority submission checklists, project QAP/ITP and lender or end-user requirements."],
            ["Roads and bridges", "Current MoRTH Specifications for Road and Bridge Works, applicable NHAI or state PWD requirements, and relevant IRC publications for geometric design, pavement, bridges and quality control."],
            ["Building and structural design", "Applicable NBC provisions and IS codes such as IS 456, IS 800, IS 875, IS 1893, IS 13920 and IS 10262, only where the project type and design brief require them."],
            ["Public-sector estimating", "CPWD specifications, Delhi Schedule of Rates or state schedule-of-rates documents where adopted by the client; the controlling contract method remains project-specific."],
            ["Survey and testing basis", "Approved survey-control requirements, geotechnical recommendations, material test methods, mix-design criteria and design verification records used by the project."],
            ["Current-edition control", "Codes, specifications, amendments and corrigenda must be checked from the issuing body before issue. A guide reference does not replace the contract’s adopted edition."],
        ],
        "clients": [
            "Government departments, public agencies, ULBs and infrastructure authorities.",
            "NHAI, state PWD, highway, bridge, irrigation and urban-infrastructure package teams.",
            "Project owners, developers and industrial operators planning new or expanded assets.",
            "EPC contractors, design-build teams and specialist civil contractors.",
            "PMCs, owner’s engineers, lender’s engineers and technical due-diligence teams.",
            "Manufacturing, logistics, energy, water and industrial-park developers.",
            "Clients with incomplete drawings, disconnected survey data or quantity disputes.",
        ],
        "workflow": [
            "Receive the brief, site information, available surveys, investigations, design criteria and required submission format.",
            "Identify information gaps, project constraints, approval interfaces, procurement route and decision deadlines.",
            "Plan or coordinate reconnaissance, survey, testing and specialist inputs needed for the agreed design basis.",
            "Develop options or the selected technical solution with documented assumptions and review points.",
            "Prepare the DPR, design package, quantities, estimates, specifications and bid or implementation documents.",
            "Review client comments, authority queries and design interfaces, then issue controlled revisions.",
            "Support construction, measurement, variation, as-built and handover requirements where included in the appointment.",
        ],
        "deliverables": [
            "Feasibility, reconnaissance and option reports.",
            "Detailed Project Reports with design basis, implementation plan, costs, programme and risk register.",
            "Civil, structural, infrastructure and site-development drawings or coordinated design inputs.",
            "BOQs, quantity take-offs, estimates, rate analysis and technical specifications.",
            "Tender, bid-engineering, clarification and technical-evaluation support documents.",
            "Design-review notes, PMC/owner’s-engineer records, RFI responses and variation support.",
            "As-built, close-out and handover technical-documentation packs where contracted.",
        ],
        "benefits": [
            "A clear link between measured site conditions, design assumptions, quantities and quality requirements.",
            "Earlier visibility of approval, constructability, programme and cost risks.",
            "Fewer inconsistencies between drawings, BOQs, specifications and site instructions.",
            "A practical basis for owner, EPC, PMC, authority and lender review.",
            "Better preparation for tender clarification, joint measurement and variation discussions.",
            "One technical conversation when the package combines survey, testing, design and construction support.",
        ],
        "boundaries": [
            "Turnkey consultancy does not automatically make ACE the principal contractor, statutory authority, construction employer or guarantor of project completion.",
            "Statutory approvals, land permissions, environmental clearances, utility permissions and licences remain with the responsible project proponent or authority unless a specific appointment states otherwise.",
            "Final designs and submissions depend on verified inputs, competent review, client decisions and the project’s adopted codes and specifications.",
            "Cost, programme and quantity figures are estimates or technical bases unless expressly made contractual by the client’s procurement documents.",
            "The exact design disciplines, field presence and construction-stage role must be agreed in the proposal and contract.",
        ],
        "faqs": [
            ("What information is needed to start a DPR?", "Share the site location, project objective, land and utility information, available surveys and investigations, capacity or performance requirements, target programme, procurement route and authority or client submission format."),
            ("Can survey and laboratory data be coordinated with the DPR?", "Yes, where included in the assignment. Control points, field measurements, material results and design assumptions can be reviewed as one technical basis rather than being translated between disconnected vendors."),
            ("Can ACE support an authority submission?", "ACE can prepare or coordinate the agreed technical documents and respond to technical comments. The responsible project proponent and the authority or qualified signatory retain the statutory submission and approval responsibilities."),
            ("Does turnkey consultancy mean ACE becomes the contractor?", "No. Turnkey advisory is limited to the engineering, coordination and delivery-support role defined in the appointment. Principal-contractor duties and construction liabilities remain with the parties named in the contract."),
        ],
        "images": [
            {"subject": "Indian infrastructure design review", "description": "Engineers reviewing a marked-up highway or public-works drawing beside a site plan, with an active Indian road project in the background.", "keywords": "Indian highway DPR engineers design review site plan construction"},
            {"subject": "DPR and BOQ coordination", "description": "A realistic project desk with printed drawings, a quantity sheet, calculator and laptop; avoid staged generic corporate imagery.", "keywords": "engineering DPR BOQ quantity surveyor India drawings desk"},
        ],
        "sources": [
            ("Ministry of Road Transport and Highways", "https://morth.nic.in/"),
            ("Indian Roads Congress", "https://irc.nic.in/"),
            ("National Highways Authority of India", "https://nhai.gov.in/"),
            ("Bureau of Indian Standards", "https://www.bis.gov.in/"),
            ("Central Public Works Department", "https://cpwd.gov.in/"),
            ("Madhya Pradesh Public Works Department", "https://mppwd.gov.in/"),
        ],
        "conclusion": [
            "A strong DPR or design package is a controlled chain from project need to implementation decision. ACE’s role is to make that chain easier to review, price, build and maintain.",
            "Before appointment, the client should confirm the project stage, design disciplines, authority format, adopted codes, required field presence, review responsibility and the documents that must be delivered at close-out.",
        ],
    },
    {
        "slug": "inspection-certification",
        "number": "02",
        "title": "Inspection & Certification",
        "subtitle": "Third-party eyes on vendors, materials, fabrication and works — inspection written for the next audit and the next invoice.",
        "overview": [
            "Inspection creates independent evidence between purchase order and acceptance. It helps owners, EPC teams, procurement departments, PMCs and lenders see whether the material, fabrication, documentation and site condition match the agreed requirement.",
            "The service may include vendor or mill assessment, document and certificate review, stage-wise inspection, dimensional and visual checks, welding and coating checks, test witnessing, factory acceptance, dispatch or erection inspection, NCR follow-up and dossier compilation.",
            "Certification support is used carefully in this guide. An inspection report records the agreed evidence; it does not become a BIS licence, statutory approval, product certificate or accreditation certificate unless the appropriately authorized body issues that separate document.",
        ],
        "scope": [
            "Inspection starts with the purchase order, approved drawings, material specification, inspection-and-test plan, quality plan, hold points, witness points, release criteria and required records. These documents define what must be observed and what can be released.",
            "The inspector may verify source documents, heat or batch traceability, dimensions, workmanship, fabrication stages, coating preparation, test records, packing, dispatch, erection and mechanical completion. Where a test or examination requires a qualified or recognized specialist, the scope can include witnessing or coordination rather than an unsupported sign-off.",
            "The final record should show what was inspected, against which requirement, on what date, with what evidence, what was accepted, what remained open, and who held the responsibility for the next action.",
        ],
        "components": [
            ["Vendor and source assessment", "Review the supplier’s capability, approved drawings, process controls, previous records, resources, subcontracting and ability to meet the purchase specification."],
            ["Material and certificate verification", "Check incoming materials, heat or batch identity, mill certificates, test reports, markings, quantity, preservation and traceability against the purchase order."],
            ["Fabrication and dimensional inspection", "Inspect cutting, forming, fit-up, dimensions, workmanship, surface condition, assembly, marking and completion at agreed hold or witness points."],
            ["Welding and coating checks", "Review applicable welding documentation and visual workmanship; witness or coordinate additional examination when required by the approved ITP and qualified personnel are available."],
            ["Testing and factory acceptance", "Witness functional, pressure, performance or other tests where specified; compare results with the approved procedure and acceptance criteria."],
            ["Dispatch, erection and completion", "Check packing, identification, preservation, dispatch records, site condition, installation evidence, punch points and mechanical completion records."],
            ["NCR and dossier close-out", "Track non-conformances, concessions, waivers, corrective action, release notes, photographs, certificates and the final inspection dossier."],
        ],
        "standards": [
            ["Controlling project documents", "Approved purchase order, drawings, specifications, ITP, QAP, method statements, acceptance criteria, approved deviations and client release requirements."],
            ["Structural steel and welding", "IS 2062, IS 800, IS 816, IS 9595 and related welding or structural-steel requirements where adopted by the project."],
            ["Reinforcement and civil products", "IS 1786, applicable concrete, reinforcement, coating, masonry, mechanical or civil-product specifications and project sampling requirements."],
            ["Management and fabrication systems", "ISO 9001, ISO 3834 or other management and fabrication references only when the contract or purchaser explicitly adopts them."],
            ["Coating and corrosion protection", "ISO 12944, SSPC or other coating references only where stated in the project specification; surface preparation and DFT criteria remain assignment-specific."],
            ["Qualified and recognized testing", "NDT, product certification, statutory release and accredited testing must be performed or signed by the qualified, recognized, notified or accredited party required for the assignment."],
        ],
        "clients": [
            "Asset owners and public-sector procurement teams.",
            "EPC contractors, package vendors, fabricators and equipment manufacturers.",
            "PMCs, owner’s engineers, lender’s engineers and commissioning teams.",
            "Manufacturing, energy, infrastructure, process-plant and industrial-fabrication projects.",
            "Procurement teams requiring source, mill, factory or pre-dispatch verification.",
            "Owners managing imported, long-lead, safety-critical or high-value equipment.",
        ],
        "workflow": [
            "Collect the purchase order, specification, approved drawings, ITP/QAP, schedule, release criteria and required reporting format.",
            "Agree the inspection plan, hold points, witness points, notice period, access, safety requirements and evidence checklist.",
            "Review supplier documents and material traceability before or during the agreed fabrication stage.",
            "Witness or perform the agreed checks, tests and inspections, recording objective evidence and open points.",
            "Issue the inspection report, NCR or release note with clear status and supporting photographs or records.",
            "Track corrective action, concessions, retests and client decisions until the package is closed or formally accepted with reservations.",
            "Compile the final dossier for dispatch, payment, commissioning, handover or audit review.",
        ],
        "deliverables": [
            "Inspection and release plans or inspection test plan review notes.",
            "Vendor, mill and source assessment reports.",
            "Material certificate, heat-number and document-traceability review records.",
            "Stage-wise fabrication, welding, coating, dimensional and test-witness reports.",
            "NCR, punch-list, corrective-action, concession and waiver trackers.",
            "Factory acceptance, dispatch, erection or mechanical-completion records.",
            "Final inspection, certification-support and handover dossier.",
        ],
        "benefits": [
            "Earlier visibility of supplier, fabrication and documentation gaps.",
            "A traceable basis for release, dispatch, payment, commissioning and handover decisions.",
            "Reduced risk of discovering material or workmanship problems after installation.",
            "Clear separation between the party executing the work and the party recording independent evidence.",
            "Better organization of certificates, photographs, waivers, NCRs and close-out records.",
            "A report format that can be understood by the owner, PMC, lender, auditor and next-stage contractor.",
        ],
        "boundaries": [
            "Inspection is performed against the agreed documents and sampling plan; it is not an unlimited guarantee that every hidden condition or future failure has been detected.",
            "A third-party inspection report is not automatically a statutory certificate, BIS licence, product certification or accreditation statement.",
            "NDT, pressure tests, statutory release and specialist certification require the qualified or recognized person or body specified by the project.",
            "The client remains responsible for approving specifications, accepting deviations and making contractual release decisions unless the appointment states otherwise.",
            "Inspection access, notice periods, safety controls, witness attendance and evidence requirements must be agreed before fabrication or dispatch.",
        ],
        "faqs": [
            ("When should third-party inspection be appointed?", "Appoint the inspection team before the purchase order or fabrication schedule is fixed so that hold points, witness points, documents and release criteria are agreed before work starts."),
            ("What does an inspection dossier normally contain?", "Depending on the assignment, it can include approved drawings, certificates, inspection reports, photographs, non-conformance records, test results, waivers and final release documentation."),
            ("Can an inspection report replace a statutory certificate?", "No. The report records the agreed inspection evidence. Any statutory, product or conformity certificate must come from the authority, notified body, accredited laboratory or qualified signatory required for that product and project."),
            ("Can ACE inspect work after it has already been completed?", "A retrospective review can be scoped, but it cannot recreate a missed hold point. The report should identify what was directly witnessed, what was document-reviewed and what remains unverified."),
        ],
        "images": [
            {"subject": "Fabrication inspection at an Indian workshop", "description": "An inspector checking a fabricated steel component against a drawing with a calibrated measuring tool, with traceable tags visible but no readable private documents.", "keywords": "third party inspection steel fabrication India engineer measuring"},
            {"subject": "Weld and coating quality check", "description": "Close-up of an inspector using a weld gauge or coating-thickness meter on industrial fabrication; show PPE and a real workshop setting.", "keywords": "weld inspection coating thickness gauge industrial quality control India"},
        ],
        "sources": [
            ("Bureau of Indian Standards", "https://www.bis.gov.in/"),
            ("Indian Roads Congress", "https://irc.nic.in/"),
            ("Ministry of Road Transport and Highways", "https://morth.nic.in/"),
            ("NABL", "https://nabl-india.org/"),
            ("International Organization for Standardization", "https://www.iso.org/standards.html"),
        ],
        "conclusion": [
            "Inspection is most valuable before a package becomes difficult to recover. A clear ITP, trained inspector, traceable evidence and disciplined close-out protect the owner’s next decision.",
            "Before appointment, the client should confirm the equipment or material, inspection stages, required qualifications, test methods, reporting format, release authority and the records needed for final handover.",
        ],
    },
    {
        "slug": "surveying-geospatial",
        "number": "03",
        "title": "Surveying & Geospatial",
        "subtitle": "Control, topography, alignments and mapping — the geometry everything else is built on.",
        "overview": [
            "Every DPR, earthwork quantity, alignment decision and as-built record starts with a survey that defines where the project is and how accurately it has been measured. ACE coordinates field and geospatial outputs around the client’s coordinate system, accuracy requirement and final design use.",
            "The service can include reconnaissance, GNSS or DGPS control, total-station and levelling surveys, topography, contours, corridor alignments, profiles, cross-sections, UAV photogrammetry, orthomosaics, terrain models, volumetric analysis, GIS layers and as-built verification.",
            "A drone image is not automatically a survey. Ground control, check points, an agreed coordinate reference, documented accuracy and the required permissions are what make a geospatial product suitable for measured design, quantity or compliance work.",
        ],
        "scope": [
            "The survey brief fixes the area, coordinate reference, datum, benchmarks, accuracy, feature list, deliverable formats, access limits, safety controls, flight restrictions and intended design or measurement use before fieldwork begins.",
            "Fieldwork may combine reconnaissance, GNSS or traverse control, total-station detail, levels, corridor chainage, cross-sections, UAV imagery and site or asset inventories. The method is selected for the terrain, obstruction, accuracy, access and project decision rather than for the instrument name alone.",
            "Processing includes quality checks against control and independent check points. The final package can be issued as CAD, GIS, DTM, surface, profile, orthomosaic, point-cloud, volume, as-built or tabular output in the format specified by the designer, owner or authority.",
        ],
        "components": [
            ["Reconnaissance and survey control", "Review the brief, establish or connect benchmarks and GNSS/traverse control, document the coordinate basis and plan independent checks."],
            ["Topographic and contour survey", "Capture terrain, structures, roads, drains, utilities visible at the surface, boundaries and other agreed features for site and design work."],
            ["Highway, railway and canal alignment", "Collect centreline, chainage, longitudinal levels, cross-sections, structures, crossings, right-of-way features and corridor constraints."],
            ["GNSS, total station and levelling", "Use the appropriate field method for control, detail, set-out, profiles, construction checks and as-built verification."],
            ["UAV photogrammetry", "Plan legal and safe flights, place or verify ground-control and check points, capture imagery and process orthomosaics, surfaces or models where suitable."],
            ["Quantity and volumetric analysis", "Calculate stockpile, borrow-area, quarry, earthwork or progress quantities from a documented surface and measurement date."],
            ["CAD, GIS and as-built delivery", "Prepare coordinate-controlled drawings, GIS layers, profiles, DTM or as-built files with metadata, accuracy notes and revision control."],
        ],
        "standards": [
            ["Coordinate and accuracy basis", "Client-specified coordinate reference, datum, benchmark, tolerance, ground-sample distance, control method, independent check-point and metadata requirements."],
            ["Road and corridor work", "Current MoRTH, NHAI, IRC and state PWD survey or DPR requirements where adopted by the road, bridge, rail, canal or utility contract."],
            ["Authority and land records", "Survey of India reference or control requirements, cadastral or land-record instructions and authority-specific formats where the project requires them."],
            ["UAV operations", "Drone Rules 2021, DGCA/Digital Sky airspace and operating requirements, permissions, site restrictions, safety controls and any client flight protocol."],
            ["Design and as-built inputs", "The project’s approved DPR, design brief, utility register, construction set-out requirements, joint-measurement method and handover format."],
            ["Quality assurance", "Documented control checks, independent check points, survey date, equipment or method records, processing settings and limitations of the final product."],
        ],
        "clients": [
            "Highway, railway, canal, pipeline and utility-corridor owners and consultants.",
            "NHAI, state PWD, irrigation departments, ULBs and infrastructure agencies.",
            "Industrial developers, logistics parks, mines, quarries and large site owners.",
            "Architects, civil designers, DPR consultants, PMCs and construction contractors.",
            "EPC teams requiring progress, quantity, set-out or as-built evidence.",
            "Owners needing GIS-backed asset, boundary, drainage or site inventories.",
        ],
        "workflow": [
            "Confirm the survey area, purpose, coordinate system, accuracy, features, deliverable format and access or flight restrictions.",
            "Carry out reconnaissance and establish or verify benchmarks, GNSS/traverse control and safety arrangements.",
            "Collect field detail with the selected method and record survey date, conditions, equipment and control observations.",
            "Plan and conduct UAV work only after the applicable permissions, airspace, site and safety checks are satisfied.",
            "Process observations and imagery into the required surfaces, drawings, profiles, GIS layers or quantities.",
            "Run control, independent check-point and completeness checks, then record limitations or exclusions.",
            "Issue the controlled deliverable with coordinate basis, accuracy statement, metadata, revision and handover notes.",
        ],
        "deliverables": [
            "Reconnaissance note, control diagram, benchmark and coordinate register.",
            "Topographic, contour, feature, alignment, profile and cross-section drawings.",
            "DTM, DSM, TIN, point-cloud, orthomosaic and GIS layers where included.",
            "UAV flight, ground-control, check-point and processing records where applicable.",
            "Stockpile, earthwork, borrow-area or quarry volume calculations.",
            "Construction set-out, deviation, progress and as-built survey reports.",
            "CAD, GIS, PDF, spreadsheet and metadata packages in the agreed formats.",
        ],
        "benefits": [
            "An explicit coordinate and accuracy basis for design, quantity and construction decisions.",
            "One agreed ground file for designers, field engineers, quantity teams and auditors.",
            "Fewer alignment, level, boundary and joint-measurement disputes.",
            "Reusable survey data across DPR, design, construction, billing and handover stages.",
            "Faster corridor or site capture when UAV mapping is appropriate and properly controlled.",
            "Clearer understanding of what was measured, when it was measured and where limitations remain.",
        ],
        "boundaries": [
            "UAV work is subject to applicable Drone Rules, DGCA/Digital Sky permissions, airspace restrictions, site access, weather, safety and accuracy requirements.",
            "A drone survey does not automatically replace ground control, total-station detail, boundary evidence or a legally recognized cadastral survey.",
            "The final accuracy depends on the approved method, control, equipment, site conditions, processing and independent checks.",
            "Underground utility location, legal boundary certification, land title opinions and statutory permissions require separate scope and responsible authorities where applicable.",
            "Quantity outputs depend on the survey date, surface definition, exclusions, agreed measurement rules and change between surveys.",
        ],
        "faqs": [
            ("Does a drone survey replace ground control?", "No. Ground control, check points and an agreed coordinate system are what make UAV photogrammetry suitable for measured design and quantity work."),
            ("What should a survey brief specify?", "Specify the area, control system, accuracy, required features, coordinate reference, deliverable formats, survey date and any access, safety or flight restrictions."),
            ("Can ACE fly a UAV anywhere a client requests?", "No. UAV work is subject to the applicable Drone Rules, DGCA/Digital Sky permissions, airspace restrictions, site access, safety controls and the project’s accuracy requirements. A ground survey remains the appropriate method where those conditions are not met."),
            ("Can survey data be used for billing?", "It can support quantity or progress measurement when the surface, control, date, exclusions and measurement method are agreed by the contract and accepted by the responsible parties."),
        ],
        "images": [
            {"subject": "GNSS survey on an Indian corridor", "description": "Surveyors in PPE using a GNSS rover beside a highway or irrigation corridor, with realistic Indian terrain and traffic controls.", "keywords": "GNSS RTK surveyor highway India topographic survey"},
            {"subject": "UAV mapping with ground control", "description": "A field team preparing a compact survey drone and visible ground-control targets on an industrial or highway site; avoid implying flight without permission.", "keywords": "drone photogrammetry ground control India construction survey"},
        ],
        "sources": [
            ("Survey of India", "https://surveyofindia.gov.in/"),
            ("Directorate General of Civil Aviation", "https://www.dgca.gov.in/"),
            ("Digital Sky", "https://digitalsky.dgca.gov.in/"),
            ("Indian Roads Congress", "https://irc.nic.in/"),
            ("Ministry of Road Transport and Highways", "https://morth.nic.in/"),
            ("National Highways Authority of India", "https://nhai.gov.in/"),
        ],
        "conclusion": [
            "Good geospatial work is controlled measurement, not only a map or image. When the coordinate basis, accuracy and checks are explicit, the output becomes useful to design, construction, billing and handover teams.",
            "Before fieldwork, the client should confirm the intended use, required accuracy, coordinate reference, survey features, legal permissions, deliverable formats and who will accept the final package.",
        ],
    },
    {
        "slug": "civil-material-testing-lab",
        "number": "04",
        "title": "Civil Material Testing Lab",
        "subtitle": "Concrete, soil, steel, aggregates, bricks, bitumen and pavement materials tested against the requirements that govern your works.",
        "overview": [
            "Material testing turns a sample into a construction decision: approve a source, adjust a mix, investigate an NCR, verify compaction, release a batch or support a payment and handover record. The value of the result depends on the sample identity, method, equipment, acceptance criterion and report traceability.",
            "ACE’s civil-material testing service is structured around the Indian standards and project QA systems commonly used in highways, buildings, industrial civil works, bridges, water infrastructure and urban projects. The exact test method and facility scope are confirmed before acceptance.",
            "The service can connect laboratory results with field verification, mix-design work, source approval and project documentation. An item listed in this guide is a potential service menu, not an unconditional accreditation or equipment claim.",
        ],
        "scope": [
            "The assignment begins with a sampling and reporting brief: material source, batch or lot identity, collection date, preservation, requested tests, applicable specification, acceptance criteria, sample quantity and report recipient.",
            "Laboratory and field-verification support may cover soil, aggregates, cement, concrete, steel, bricks, blocks, pavers, bituminous materials and related construction products. Mix-design and trial-mix work can connect results to the materials actually proposed for the project.",
            "Before dispatch or collection, ACE should confirm the method, sample condition, equipment, reporting status, turnaround expectation and whether the tender or authority requires an accredited laboratory with a specified scope.",
        ],
        "components": [
            ["Soil and subgrade testing", "Moisture, grain-size distribution, Atterberg limits, classification, Proctor compaction, CBR, field-density support and other geotechnical tests where included in the approved scope."],
            ["Aggregate testing", "Gradation, flakiness and elongation, impact, crushing, abrasion, soundness, density, water absorption, deleterious materials and source-approval checks where specified."],
            ["Cement and concrete", "Cement fineness, consistency, setting time, soundness and strength; concrete slump, cube or specimen strength, flexural strength, core testing, trial mixes and mix-design support."],
            ["Steel and reinforcement", "Dimensions, mass, tensile, bend and rebend tests, with chemical or additional examinations only where the method and facility are confirmed for the assignment."],
            ["Bituminous materials", "Penetration, softening point, ductility, viscosity, flash point, extraction, Marshall-related or other bituminous-material tests where required by the adopted specification."],
            ["Masonry and paving products", "Brick, block, paver and masonry-unit dimensions, absorption, compressive strength and related checks against the product or project specification."],
            ["In-situ and QA documentation", "Field-density, rebound-hammer, ultrasonic or other screening support; sample registers, method records, result review, NCR evidence and project QA/QC documentation."],
        ],
        "standards": [
            ["Soil", "IS 2720 series and IS 1498 for soil testing and classification, subject to the method and project acceptance criterion."],
            ["Aggregates", "IS 2386 series and IS 383 for aggregate testing and concrete aggregates."],
            ["Cement and concrete", "IS 4031, IS 456, IS 516 series, IS 10262, IS 1199 series and IS 4926 for cement, concrete, fresh-concrete and mix-related work."],
            ["Steel", "IS 1786, IS 2062 and IS 1608 for reinforcement and structural-steel requirements where applicable."],
            ["Bricks and paving", "IS 1077, IS 3495 series, IS 2185 and IS 15658 for bricks, blocks and paving units."],
            ["Bituminous materials", "IS 1201–1220 series, IS 73 and applicable bitumen or modified-bitumen standards adopted by the contract."],
            ["Road and bridge QA", "IRC:37, IRC:58, IRC:SP:11, IRC:78, IRC:112, current MoRTH Specifications, NHAI or state PWD QAP/ITP and authority formats where adopted."],
            ["Accreditation scope", "ISO/IEC 17025 and the exact accredited scope only where a client or tender requires accredited results. ACE accreditation is not implied by this guide."],
        ],
        "clients": [
            "Highway, bridge, airport, rail, water and urban-infrastructure contractors.",
            "NHAI, state PWD, municipal and public-works package teams.",
            "Builders, developers, industrial civil contractors and RMC producers.",
            "Cement, steel, aggregate, quarry, brick, block, paver and asphalt suppliers.",
            "PMCs, owner’s engineers, lender’s engineers and QA/QC departments.",
            "Clients investigating material non-conformance, source approval or construction disputes.",
        ],
        "workflow": [
            "Confirm the material, source, batch or lot, project, requested tests, method, acceptance criterion and report format.",
            "Receive or collect samples with identification, condition, quantity, date and chain-of-custody records appropriate to the assignment.",
            "Check sample suitability and confirm the facility, equipment, method and accreditation or recognition requirement before testing.",
            "Perform the agreed test or coordinate the required recognized or accredited pathway where the project requires it.",
            "Review results against the specification, QAP/ITP and project decision; flag incomplete, anomalous or non-conforming results.",
            "Issue the report or certificate pack with sample identity, method, result, units, acceptance basis, limitations and authorized review.",
            "Support source approval, mix revision, NCR closure, joint measurement or authority review as included in the assignment.",
        ],
        "deliverables": [
            "Sample receipt, identification and chain-of-custody records.",
            "Soil, aggregate, cement, concrete, steel, masonry, bitumen and pavement-material test reports.",
            "Concrete mix-design, trial-mix and material-source evaluation reports.",
            "Field-density, in-situ screening and construction QA/QC records where included.",
            "Non-conformance, retest, source-approval and corrective-action evidence.",
            "Project material registers, certificates and authority or lender review packs.",
        ],
        "benefits": [
            "Earlier rejection of non-conforming source materials or batches.",
            "Mix designs based on actual project materials rather than catalogue assumptions.",
            "A clearer link between field samples, laboratory results and the project QAP.",
            "Better evidence for supplier approval, NCR closure, billing, handover and technical due diligence.",
            "Reduced risk of retesting caused by incomplete briefs, lost identities or mismatched methods.",
            "More traceable records for authority, lender, PMC and audit review.",
        ],
        "boundaries": [
            "The listed tests describe a service menu. The exact in-house method, equipment, sample quantity, turnaround and reporting status must be confirmed before acceptance.",
            "A test report is not automatically an accreditation certificate, BIS licence, product certification or authority approval.",
            "Where an accredited or recognized laboratory is required, the legal entity and exact parameter/method scope must be verified for the project.",
            "Field screening tools such as rebound hammer or ultrasonic testing do not replace the acceptance method unless the project specification permits them.",
            "Sample quality, sampling practice, curing, transport, preservation and identification can materially affect the result and remain part of the agreed quality system.",
        ],
        "faqs": [
            ("What should a material-testing request include?", "Include the material or mix, sample identification, project and location, requested tests, applicable specification, sampling date, sample quantity and the report recipient or authority format."),
            ("What samples can the civil material testing lab handle?", "The service menu includes concrete, soil, steel, aggregates, bitumen, bricks, blocks, pavers and related construction materials. The exact test method and sample quantity should be confirmed before dispatch."),
            ("Are all listed tests performed in-house?", "The list describes the service menu, not an unconditional accreditation or equipment claim. ACE confirms the exact method, facility, sample quantity and reporting pathway against the project brief before accepting the work."),
            ("Can testing support a highway or bridge QAP?", "Yes, where the requested methods, frequency, sampling plan and reporting format are agreed against the current MoRTH, IRC, NHAI, state PWD or project-specific quality requirements."),
        ],
        "images": [
            {"subject": "Concrete cube compression testing", "description": "A technician placing a concrete cube in a compression-testing machine in a clean Indian civil laboratory, with sample IDs visible but no private data.", "keywords": "concrete cube compression testing laboratory India civil materials"},
            {"subject": "Soil and aggregate testing", "description": "Sieve-analysis trays, aggregate samples and a field-density kit arranged on a real project QA bench rather than a generic science lab.", "keywords": "soil sieve analysis aggregate testing laboratory India road quality control"},
        ],
        "sources": [
            ("Bureau of Indian Standards", "https://www.bis.gov.in/"),
            ("NABL", "https://nabl-india.org/"),
            ("Indian Roads Congress", "https://irc.nic.in/"),
            ("Ministry of Road Transport and Highways", "https://morth.nic.in/"),
            ("National Highways Authority of India", "https://nhai.gov.in/"),
            ("Central Public Works Department", "https://cpwd.gov.in/"),
        ],
        "conclusion": [
            "A useful material result is more than a number. It is a traceable connection between the sample, method, acceptance criterion, project decision and record that the next reviewer can understand.",
            "Before sending a sample, the client should confirm the requested method, sample quantity, collection and curing requirements, accreditation need, turnaround, acceptance criterion and report format.",
        ],
    },
    {
        "slug": "chemical-product-testing",
        "number": "05",
        "title": "Chemical & Product Testing",
        "subtitle": "Laboratory analytics for water, chemicals and manufactured products — results you can specify against.",
        "overview": [
            "Chemical and product testing helps a plant, procurement team, R&D group or project owner decide whether a water sample, raw material, process chemical or finished product meets the agreed requirement. The result is only useful when the sample represents the batch or process and the method matches the question being asked.",
            "The service can support drinking, process and wastewater analysis, chemical and raw-material characterisation, construction-chemical and coating checks, product-quality testing, sampling plans, chain of custody, method selection and technical certificate packs.",
            "A test report should not be confused with BIS certification, FSSAI approval, a notified-laboratory certificate, a statutory consent or an accreditation claim. Where a product or regulatory pathway requires a recognized, notified or accredited body, that requirement must be separately confirmed and coordinated.",
        ],
        "scope": [
            "The work starts by translating the decision into a sample plan: product or material identity, batch or lot, process step, intended use, preservation, sample quantity, method, specification, reporting limit and certificate format.",
            "The assignment may include water and wastewater parameters, raw-material and chemical properties, construction chemicals, paints and coatings, fuels or process materials, packaging or manufactured-product testing, and review of results against a client or product specification.",
            "Sampling, chain of custody, laboratory method, quality controls and result interpretation are coordinated with the regulatory or procurement decision. Statutory submissions and product-conformity steps remain with the responsible proponent, recognized laboratory, notified body or authority where required.",
        ],
        "components": [
            ["Water and wastewater analysis", "Drinking, process and wastewater sampling and testing against the agreed parameter list, such as pH, conductivity, turbidity, TDS, hardness, alkalinity, chloride, sulphate, nutrients, metals or organics where methods are confirmed."],
            ["Chemical and raw-material characterisation", "Support concentration, purity, identity, density, viscosity, flash point or other physical and chemical-property questions where the applicable method and facility are available."],
            ["Construction chemicals", "Test planning or coordination for cement, admixture, waterproofing compounds, paints, coatings, adhesives and sealants against the applicable product or project specification."],
            ["Manufactured products and packaging", "Product-quality, polymer, rubber, packaging or food-contact-material test planning where the sample, method, intended use and recognized pathway are confirmed."],
            ["Industrial and process materials", "Support fuel, lubricant, process-chemical, formulation or supplier-qualification questions using the agreed sampling and reporting basis."],
            ["Sampling and result review", "Prepare sample plans, chain-of-custody records, batch or lot registers, method-selection notes, specification comparison and technical response to anomalies or non-conformance."],
            ["Certificate and submission packs", "Compile technical records for procurement, customer review, internal quality release or submission to the responsible statutory consultant, recognized laboratory or authority."],
        ],
        "standards": [
            ["Water", "IS 3025 series for applicable water and wastewater parameters, IS 10500 for drinking water, and IS 14543 or IS 13428 where the packaged-water product and regulatory pathway apply."],
            ["Paints and materials", "IS 101 series for paints and varnishes, IS 1448 series for petroleum products, IS 228 or IS 1608 for relevant metal questions, and applicable construction-product methods."],
            ["Cement and construction chemicals", "IS 4031, IS 9103, IS 2645 and other product standards where applicable to cement, admixtures, waterproofing compounds or related materials."],
            ["Packaging and product conformity", "IS 9845 where relevant to overall migration, current BIS product standards, Quality Control Orders and Schemes of Testing and Inspection for the specific product."],
            ["Food, water and consumer products", "FSSAI regulations, Legal Metrology requirements, CDSCO or other product-specific rules only when the product, intended use and regulatory pathway trigger them."],
            ["Chemicals and environment", "MSIHC Rules, Chemical Accidents Rules, CPCB standards, MPPCB consent conditions and applicable waste or EPR requirements for regulated chemical work."],
            ["Accredited testing", "ISO/IEC 17025 and the exact accredited scope where an accredited result is specified. ACE accreditation is not implied by this guide."],
        ],
        "clients": [
            "Chemical, formulation, pharmaceutical and process-material manufacturers.",
            "Paint, coating, adhesive, sealant, polymer, rubber and packaging producers.",
            "Cement, concrete, admixture, waterproofing and construction-product suppliers.",
            "Fuel, lubricant, water-treatment and wastewater-treatment operators.",
            "Procurement, R&D, QA/QC, vendor-qualification and customer-complaint teams.",
            "Food, packaged-water and consumer-product businesses using the appropriate recognized laboratory pathway.",
            "Industrial projects needing connected civil, chemical and environmental sampling.",
        ],
        "workflow": [
            "Define the decision, product or material, intended use, batch or lot, sample quantity and required reporting or certificate format.",
            "Select the applicable method, specification, preservation, sampling point, chain-of-custody process and recognized-laboratory requirement.",
            "Collect or receive representative samples with condition, identity, date, location and custody records.",
            "Confirm facility and method suitability before testing, especially where an accredited, notified or regulatory result is required.",
            "Test or coordinate the agreed method, record quality controls and review the result against the specification or decision criterion.",
            "Issue the technical report or certificate pack with units, detection limits, deviations, limitations and authorized review.",
            "Support procurement, batch release, complaint, NCR, supplier-qualification or statutory-consultant follow-up as scoped.",
        ],
        "deliverables": [
            "Sampling plan, sample register and chain-of-custody records.",
            "Water, wastewater, chemical, raw-material and product test reports.",
            "Specification comparison, batch-release, supplier-qualification or complaint-investigation notes.",
            "Method-selection, laboratory-coordination and accredited-scope confirmation records.",
            "Technical certificate packs for procurement, customer review or statutory-consultant submission.",
            "Result interpretation, non-conformance and corrective-action support where included.",
        ],
        "benefits": [
            "Earlier detection of contamination, formulation drift, degradation or raw-material variation.",
            "Fewer retests caused by incomplete sampling briefs, wrong methods or missing batch identity.",
            "Specifications that purchasing, plant, QA and customer teams can interpret consistently.",
            "More useful evidence for complaints, NCRs, supplier qualification and batch release.",
            "A clear escalation path when a notified, recognized or accredited laboratory is required.",
            "Connected technical files when chemical, civil and environmental questions share the same project.",
        ],
        "boundaries": [
            "A test report documents the agreed sample and method; it does not itself provide a BIS licence, product certification, FSSAI approval, statutory consent or accreditation.",
            "The exact parameter, method, detection limit, sample quantity, facility and accreditation status must be confirmed before work begins.",
            "Results represent the sample received and may not represent a batch or process if sampling is not representative or traceable.",
            "Regulated product, food, drug, medical-device, packaged-water and chemical submissions may require separate recognized, notified or authority pathways.",
            "Interpretation against safety, release or statutory limits should be performed by the responsible technical or regulatory authority named for the assignment.",
        ],
        "faqs": [
            ("How should a product-testing request be prepared?", "Share the product description, batch or lot identity, specification, intended use, required method, sample quantity and certificate format before the sample is dispatched."),
            ("Can chemical testing be combined with civil or environmental work?", "Yes. A combined brief can coordinate water, process, product, civil and environmental testing so that sampling, locations and reporting assumptions remain connected."),
            ("Does a test report provide BIS certification?", "No. A test report documents the agreed results. BIS licensing, registration, notified-laboratory testing or other product-conformity steps remain separate requirements for the specific product and scheme."),
            ("Can a laboratory test prove that a product is legally saleable?", "Not by itself. Saleability depends on the product, intended use, labelling, licensing, conformity and regulatory requirements applicable to that market and authority."),
        ],
        "images": [
            {"subject": "Analytical chemistry sample preparation", "description": "A technician preparing labelled water or process samples at an analytical bench, with Indian laboratory context and no visible confidential results.", "keywords": "analytical chemistry laboratory sample bottles India water testing"},
            {"subject": "Industrial product quality check", "description": "Paint, coating or construction-chemical samples being checked beside a calibrated instrument and batch labels in a practical QA setting.", "keywords": "paint coating product testing laboratory quality control India"},
        ],
        "sources": [
            ("Bureau of Indian Standards", "https://www.bis.gov.in/"),
            ("BIS published standards", "https://standards.bis.gov.in/website/published-standards/department-wise"),
            ("NABL", "https://nabl-india.org/"),
            ("FSSAI regulations", "https://www.fssai.gov.in/cms/food-safety-and-standards-regulations.php"),
            ("Legal Metrology, Department of Consumer Affairs", "https://consumeraffairs.nic.in/legal-metrology"),
            ("CDSCO Acts and Rules", "https://cdsco.gov.in/opencms/opencms/en/Acts-Rules/"),
            ("Central Pollution Control Board", "https://cpcb.nic.in/"),
        ],
        "conclusion": [
            "Chemical and product testing is strongest when the commercial or technical decision is defined before the sample is taken. The method, specification, representative sample and reporting pathway should all point to the same decision.",
            "Before dispatch, the client should confirm the product or material, batch identity, intended use, sample quantity, preservation, method, acceptance criterion, accreditation need and certificate format.",
        ],
    },
    {
        "slug": "environmental-services",
        "number": "06",
        "title": "Environmental Services",
        "subtitle": "Baseline studies, monitoring and compliance support for projects that need evidence from field to filing.",
        "overview": [
            "Environmental work is useful when field observations, laboratory results, project assumptions and approval conditions describe the same project. ACE supports clients with monitoring, baseline information, environmental data packs, EIA/EMP technical inputs and consent-condition organization through the project life cycle.",
            "The service can include ambient air, stack or source, water, wastewater, soil, noise and waste-related monitoring; laboratory coordination; baseline studies; compliance calendars; consent-to-establish or consent-to-operate support; and technical reporting for industry, mining, highways, urban works, energy and infrastructure.",
            "Environmental clearances, consents, authorizations and statutory certifications are not automatically issued by a consultant. The responsible project proponent, competent authority or appropriately qualified and recognized consultant retains the legal responsibility for the relevant submission and approval.",
        ],
        "scope": [
            "The scope is set against the project stage and approval pathway: site selection, baseline study, construction monitoring, operational compliance, expansion, renewal, lender due diligence or investigation of a complaint or non-conformance.",
            "Field and technical work may include monitoring plans, sampling locations and frequencies, air, water, noise, soil, stack, waste or emissions data, laboratory coordination, baseline interpretation, consent-condition registers, compliance calendars and follow-up action tracking.",
            "The final reporting format should distinguish measured data, calculated values, assumptions, limitations, laboratory status, applicable standard and the project condition or decision the result supports.",
        ],
        "components": [
            ["Ambient-air monitoring", "Plan and coordinate sampling for PM10, PM2.5 and applicable gaseous parameters against the required monitoring method, location, frequency and authority criterion."],
            ["Stack and source monitoring", "Support stack, process-emission, fugitive-emission or source monitoring where the equipment, method, access and qualified personnel are confirmed."],
            ["Water, effluent and soil", "Coordinate surface-water, groundwater, drinking-water, effluent, soil and waste sampling with representative locations, preservation and laboratory records."],
            ["Environmental-noise surveys", "Measure construction, industrial or boundary noise at agreed locations and periods using the applicable method and reporting basis."],
            ["Baseline and EIA/EMP technical inputs", "Support baseline design, data review, impact or mitigation inputs and environmental-management records for the appointed project and qualified consultant pathway."],
            ["Consent and compliance support", "Organize consent-to-establish or consent-to-operate information, condition registers, monitoring calendars, renewal evidence and technical responses."],
            ["Reporting and action tracking", "Prepare CPCB, MPPCB, lender or client data packs, identify gaps, assign follow-up actions and maintain a traceable record from field to review."],
        ],
        "standards": [
            ["Legal framework", "Environment (Protection) Act and Rules, Air Act, Water Act and applicable notifications or conditions for the project and activity."],
            ["EIA and approvals", "EIA Notification, 2006 as amended, applicable Terms of Reference, environmental-clearance conditions, PARIVESH requirements and authority formats."],
            ["CPCB references", "National Ambient Air Quality Standards, air-monitoring guidance, water-quality criteria, industry-specific emission or effluent standards and CPCB technical guidance."],
            ["Indian methods", "IS 3025 series for water and wastewater, IS 5182 series for air-pollution measurement and authority-prescribed sampling and analysis methods."],
            ["Noise and waste", "Noise Pollution (Regulation and Control) Rules, 2000 and current applicable Solid Waste, C&D Waste, Hazardous and Other Wastes, Plastic, E-Waste and Battery Waste rules and EPR requirements."],
            ["Madhya Pradesh requirements", "MPPCB consent-to-establish/operate, waste authorization, monitoring and reporting conditions; SEIAA-MP/SEAC-MP requirements where applicable."],
            ["Recognized laboratory scope", "Where a regulator, lender or tender requires an accredited or recognized laboratory, confirm the legal entity and exact parameter/method scope. ACE accreditation is not implied."],
        ],
        "clients": [
            "Industrial and manufacturing facilities, process plants and logistics operations.",
            "Mining, quarrying, mineral-processing and construction-material projects.",
            "Highway, railway, water, urban, energy and other linear or public-infrastructure projects.",
            "EPC contractors, PMCs, project developers and EHS or sustainability departments.",
            "Municipal bodies, wastewater-treatment operators and construction or demolition projects.",
            "Lender’s engineers and environmental due-diligence teams.",
            "Project proponents coordinating statutory submissions through an appointed qualified or recognized consultant.",
        ],
        "workflow": [
            "Confirm the project location, activity, capacity, process, fuel, approval stage, monitoring history and authority or consultant format.",
            "Map the applicable approval, consent, monitoring, laboratory, waste and reporting requirements and identify information gaps.",
            "Prepare the monitoring plan, locations, parameters, frequency, safety controls, chain of custody and field schedule.",
            "Collect representative field samples and observations, coordinating the appropriate laboratory and recognized pathway where required.",
            "Review data quality, compare results with the applicable condition or standard and record assumptions, limitations and deviations.",
            "Prepare the technical report, compliance register, EIA/EMP input or submission support pack within the agreed role.",
            "Track queries, corrective actions, renewals, monitoring periods and follow-up evidence with the project team.",
        ],
        "deliverables": [
            "Baseline, monitoring and sampling plans with location, parameter and frequency schedules.",
            "Ambient-air, stack, water, effluent, soil, waste and environmental-noise monitoring reports.",
            "Laboratory coordination, sample registers, chain-of-custody and data-quality records.",
            "Baseline study, EIA/EMP technical inputs and environmental data packs.",
            "Consent-condition registers, compliance calendars, renewal evidence and action trackers.",
            "CPCB, MPPCB, lender or client reporting and technical response packs where included.",
        ],
        "benefits": [
            "Earlier visibility of air, water, noise, waste and emissions risks.",
            "Better baseline and compliance data for project, EHS, lender and authority review.",
            "Fewer missed monitoring periods, incomplete records and avoidable re-submissions.",
            "A traceable bridge between field observations, laboratory results and consent conditions.",
            "Clearer assignment of follow-up actions, owners, dates and evidence.",
            "Better coordination between field teams, laboratories, EHS teams and statutory consultants.",
        ],
        "boundaries": [
            "ACE can support monitoring, baseline data, technical inputs, coordination and compliance records; it does not itself issue environmental clearance, consent, authorization or statutory certification unless legally authorized and specifically appointed to do so.",
            "EIA/EMP authorship, statutory sign-off and regulatory representation must follow the responsible proponent, authority and appropriately qualified or recognized consultant pathway.",
            "Environmental conclusions depend on representative sampling, monitoring duration, laboratory method, site conditions, project configuration and applicable authority requirements.",
            "Applicable rules, consent conditions, emission or effluent standards and waste/EPR requirements must be checked for the activity, location and current regulatory edition.",
            "The client remains responsible for providing accurate process, capacity, fuel, land, production and approval information and for implementing required controls.",
        ],
        "faqs": [
            ("When should environmental monitoring begin?", "Bring the environmental team in during siting and planning so that monitoring periods, project assumptions and consent requirements are aligned before filing or construction."),
            ("What information is needed for an environmental-services brief?", "Share the project location, activity, capacity, fuel or process details, current approval stage, monitoring history and the authority or consultant format required."),
            ("Can ACE issue an environmental clearance or consent?", "No. ACE can support monitoring, baseline data, technical inputs, coordination and compliance records. The responsible project proponent, competent authority and appointed qualified or recognized consultant handle statutory applications, approvals and certifications."),
            ("How long should baseline monitoring continue?", "The required period depends on the project category, authority Terms of Reference, seasonality, parameter, site and submission pathway. The monitoring plan should be agreed before fieldwork begins."),
        ],
        "images": [
            {"subject": "Ambient-air monitoring in Madhya Pradesh", "description": "An environmental technician in PPE operating a particulate sampler at an industrial or highway site, with realistic Indian surroundings and safe access controls.", "keywords": "ambient air quality monitoring India PM2.5 field technician"},
            {"subject": "Water and effluent sampling", "description": "A field sampler collecting a labelled water sample from an industrial drain or surface-water location with chain-of-custody materials visible.", "keywords": "environmental water sampling India effluent monitoring field"},
            {"subject": "Environmental noise survey", "description": "A technician using a sound-level meter near a construction or industrial boundary, with no staged unsafe access to machinery.", "keywords": "environmental noise monitoring sound level meter India construction"},
        ],
        "sources": [
            ("Ministry of Environment, Forest and Climate Change", "https://moef.gov.in/"),
            ("PARIVESH", "https://parivesh.nic.in/"),
            ("Central Pollution Control Board", "https://cpcb.nic.in/"),
            ("CPCB effluent and emission standards", "https://cpcb.nic.in/effluent-emission/"),
            ("Madhya Pradesh Pollution Control Board", "https://www.mppcb.mp.gov.in/"),
            ("NABL", "https://nabl-india.org/"),
        ],
        "conclusion": [
            "Environmental compliance is strongest when the project described in the baseline, consent file and monitoring report is the project that is actually built and operated. Good records make that comparison possible.",
            "Before appointment, the client should confirm the activity and capacity, site and approval stage, applicable authority, monitoring period, laboratory pathway, statutory consultant, report format and responsibility for implementing actions.",
        ],
    },
]


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    PUBLIC_OUTPUT.mkdir(parents=True, exist_ok=True)
    for service in SERVICES:
        source = write_docx(service)
        public_copy = PUBLIC_OUTPUT / source.name
        copy2(source, public_copy)
        print(f"{source} -> {public_copy}")


if __name__ == "__main__":
    main()
