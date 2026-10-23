# ACE detailed service guides

These Word documents use the supplied `Industries Requiring MPCB Consent.docx` as a reference for depth and section-by-section explanation, while using a more structured ACE format for readability.

The copies in `public/docs/service-guides/` are the web-served downloads. The service detail pages link to those public copies.

## Documents

- `engineering-dpr-turnkey-consultancy.docx`
- `inspection-certification.docx`
- `surveying-geospatial.docx`
- `civil-material-testing-lab.docx`
- `chemical-product-testing.docx`
- `environmental-services.docx`
- `residential-commercial-building-inspection.docx`

Each guide contains:

- Service overview and detailed scope
- Service components and potential tests/activities
- Indian standards, codes and government guidance
- Target clients and project types
- Delivery workflow and typical deliverables
- Benefits and decision value
- Responsibilities and claim boundaries
- FAQs
- Copyright-free image direction with search keywords
- Official source register

The content is written for project scoping and service communication. Before using it in a tender, statutory submission, accreditation claim or contract, confirm the current legal requirements, standard editions, actual ACE/partner capabilities, laboratory scope, permissions and responsible signatories.

The documents can be regenerated with:

```bash
python3 scripts/generate_service_guides.py
```

The generator refreshes both the source documents in this directory and the public copies used by the website.
