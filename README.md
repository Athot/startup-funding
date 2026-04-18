## Startup Funding Web Form

A web-based platform for startups to apply for funding and for investors to evaluate applications using structured data, filtering, and a scoring system.

### Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- File Upload: Multer

### Features

- Founder Side
- Multi-step application form (11 sections)
- Save and update application (draft system)
- Upload pitch deck (PDF) and additional documents
- Submit application with evaluation (score + status)

### Scoring System

### Applications are scored (0–100) based on:

### Market Opportunity

- Traction (Revenue)
- Team Strength
- Innovation (USP)
- Financial Runway

### Filtering Logic

- Sector validation (AI, Fintech, Blockchain, SaaS, CleanTech)
- Revenue check
- Startup stage screening
- Output

### Deal Score (0–100)

#### Status:

- Shortlisted
- Review Manually
- Rejected

### Investor Dashboard

- View all applications
- See startup name, sector, score, and status
- View full application details
- Document Handling
- Upload pitch deck (PDF only)
- Upload additional documents
- Files stored in /uploads and accessed via URL

### API Endpoints

- POST /create → Create application draft
- PUT /update/:applicationID → Update application (all sections + files)
- POST /submit/:applicationID → Submit and evaluate application
- GET / → Get all applications
- GET /:applicationID → Get single application

### System Flow

#### Founder:

- Fill Form → Save Draft → Upload Documents → Submit → Get Score & Status

#### Investor:

- Dashboard → View Applications → Open Details → Evaluate

### Note

Authentication is not implemented (out of scope). Can be extended with JWT and role-based access.
