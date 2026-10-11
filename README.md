# Riyadvi Software Technologies

A modern, responsive corporate website for Riyadvi Software Technologies, showcasing digital services, technology capabilities, selected projects, company information, careers, and business consultation resources.

The application combines a React frontend with a Node.js and Express backend connected to MongoDB Atlas.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Backend API](#backend-api)
- [Database](#database)
- [Design and User Experience](#design-and-user-experience)
- [Deployment](#deployment)
- [AI Tools and Development Assistance](#ai-tools-and-development-assistance)
- [Testing Checklist](#testing-checklist)
- [Future Improvements](#future-improvements)

## Project Overview

Riyadvi Software Technologies is a corporate website designed to present software and digital transformation services through a premium user interface.

The project focuses on responsive layouts, interactive sections, service and portfolio navigation, lead generation, consultation requests, and job applications.

## Features

### Corporate Website
- Responsive homepage with hero, transformation, services, technology, and portfolio sections.
- Company About page.
- Dynamic service detail pages.
- Portfolio and case study pages.
- Blog listing and individual blog articles.
- Careers listing and job detail pages.
- Contact page.

### Business and Lead Generation
- Business Health Checkup form.
- Software Project Planning Guide page with a downloadable PDF.
- Consultation booking form.
- Job application form.
- Backend form processing and MongoDB persistence for supported submissions.

### User Experience
- Premium black-and-gold visual theme.
- Responsive navigation and mobile menu.
- Reusable React components.
- Interactive navigation and calls to action.
- Three-dimensional hero visual using the project's Three.js ecosystem.

## Technology Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Lucide React
- Three.js
- React Three Fiber
- React Three Drei
- GSAP and Lenis dependencies for animation and scrolling capabilities

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

### Development Tools
- Visual Studio Code
- npm
- Git and GitHub
- Postman or an equivalent API testing tool

> Note: Installed libraries are not necessarily used in every page. Confirm actual usage before describing a library as an implemented feature.

## Project Structure

The main project layout is organized as follows:

```text
Riyadhvi/
├── public/
│   └── software-project-planning-guide.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Transformation.jsx
│   │   ├── Services.jsx
│   │   ├── Technology.jsx
│   │   └── Portfolio.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── BusinessHealthCheckup.jsx
│   │   ├── SoftwareProjectGuide.jsx
│   │   ├── Consultation.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Careers.jsx
│   │   └── JobDetails.jsx
│   ├── data/
│   │   ├── jobs.js
│   │   └── blogPosts.js
│   ├── three/
│   ├── App.jsx
│   └── index.css
├── backend/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── package.json
├── index.html
└── README.md
```

Some files may be added or organized differently as development continues.

## Getting Started

### Prerequisites

Install the following:

- Node.js and npm
- Git
- A MongoDB Atlas account or another compatible MongoDB deployment

### 1. Clone the repository

After pushing the project to GitHub, clone it using:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Riyadhvi
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

### 2. Install frontend dependencies

From the project root:

```bash
npm install
```

### 3. Configure the backend

Open a terminal in the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` using the configuration described below.

### 4. Start the backend

From the `backend/` directory, run:

```bash
npm run dev
```

If the development script is not configured, check `backend/package.json` and use its available start script.

The backend should connect to MongoDB and listen on the configured port, normally `5000`.

### 5. Start the frontend

Open a second terminal in the project root:

```bash
npm run dev
```

Vite normally serves the frontend at:

```text
http://localhost:5173
```

Keep both terminals running during local development.

## Environment Configuration

### Backend Environment Variables

Create `backend/.env`:

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

Replace the placeholder with your MongoDB connection string.

**Security requirements:**
- Never commit `.env` files or database credentials to GitHub.
- Keep MongoDB credentials private.
- Configure MongoDB Atlas network access and database-user permissions appropriately.
- Use environment variables for production secrets.

### Frontend Environment Variables

Create a `.env` file in the project root if required:

```env
VITE_API_URL=http://localhost:5000
```

The frontend uses this variable to identify the backend API. If it is omitted, the current implementation can fall back to the local backend URL.

For production, set `VITE_API_URL` to the deployed backend's base URL. Do not put secrets in variables prefixed with `VITE_`, because frontend variables are exposed to the browser.

## Backend API

The following routes are implemented in the current application.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check that the backend is running |
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit a contact enquiry |
| POST | `/api/health-checkup` | Submit a business health checkup |
| POST | `/api/lead-magnet` | Process a Planning Guide lead submission |
| POST | `/api/applications` | Submit a job application |
| POST | `/api/consultation` | Submit a consultation request |

### Example: Consultation Request

Endpoint:

```http
POST /api/consultation
Content-Type: application/json
```

Example request body:

```json
{
  "fullName": "Example Applicant",
  "email": "applicant@example.com",
  "phone": "+971500000000",
  "company": "Example Company",
  "service": "Web Development",
  "budget": "AED 5,000-15,000",
  "projectDetails": "We need a responsive company website.",
  "preferredContact": "Email"
}
```

A successful request returns a success response and a consultation identifier. Validation errors return an appropriate error response.

Other endpoints should be tested with the payloads expected by their respective route implementations.

## Database

MongoDB Atlas stores submitted information for supported forms.

The backend uses Mongoose models to define document structures and validation rules.

Examples of data handled by the application include:
- Contact enquiries.
- Business health checkup submissions.
- Planning Guide lead submissions.
- Job applications.
- Consultation requests.

Mongoose creates collections when documents are first saved, using collection names derived from model names unless explicitly configured otherwise.

## Design and User Experience

The website uses a premium black-and-gold theme, responsive layouts, reusable components, and consistent navigation.

The project uses React Router for page navigation and Tailwind CSS for styling. Three.js, React Three Fiber, and Drei provide the foundation for three-dimensional visual experiences.

Responsive testing should cover desktop, tablet, and mobile viewports. Interactive elements should also be checked for keyboard accessibility, readable contrast, and appropriate reduced-motion behavior.

## Deployment

### Frontend — Vercel

1. Push the frontend project to GitHub.
2. Import the repository into Vercel.
3. Set the frontend build command to `npm run build`.
4. Set the output directory to `dist`.
5. Configure `VITE_API_URL` with the deployed backend URL.
6. Configure a rewrite for SPA routing if direct visits to nested routes return 404.
7. Deploy and test the website.

### Backend — Render or Railway

1. Create a web service using the same GitHub repository.
2. Set the service root directory to `backend` if supported by the selected platform.
3. Configure the install and start commands based on `backend/package.json`.
4. Add `MONGODB_URI` and `PORT` or the platform's assigned port configuration.
5. Allow requests from the deployed frontend using an appropriate CORS origin.
6. Deploy and verify the health endpoint.

### Production Checklist

- Set environment variables on the hosting platforms.
- Configure MongoDB Atlas access for the deployed backend.
- Replace wildcard CORS with the intended frontend origin.
- Test every form against the deployed API.
- Verify PDF downloads and direct navigation to nested pages.
- Never expose credentials in the repository or frontend bundle.

Deployment is complete only after the live frontend and backend have been tested.

## AI Tools and Development Assistance

AI assistance may be used during development for code drafting, troubleshooting, documentation, and implementation guidance.

For transparent documentation, maintain a record of the actual tools and prompts used during the project.

| Item | Details to document |
|---|---|
| AI tool | Record the actual tool used |
| Purpose | Explain the task for which it was used |
| Prompt | Include the actual prompt or a faithful excerpt |
| Generated output | Identify the code, explanation, or documentation produced |
| Manual modifications | Describe what was reviewed, adapted, tested, or corrected |
| Reason for modifications | Explain compatibility, validation, design, security, or project-specific requirements |

### Example Development Record

- **Purpose:** Create reusable navigation and footer components.
- **Prompt summary:** Request React components matching the existing black-and-gold visual theme and the application's routes.
- **Generated output:** Initial component implementation and navigation links.
- **Manual modifications:** Integrate components into the existing router, preserve working routes, and test links in the browser.
- **Reason:** Ensure consistency with the existing application and verify that navigation works across pages.

This is an example of how to document assistance. Replace or supplement it with the actual tools, prompts, generated outputs, and manual changes used during development. Do not claim testing or modifications that have not occurred.

## Testing Checklist

- [ ] Homepage sections render correctly.
- [ ] Navigation links open the correct pages.
- [ ] Service and portfolio detail routes work.
- [ ] Blog listing and article routes work.
- [ ] Careers and job detail routes work.
- [ ] Contact form submissions are saved.
- [ ] Business Health Checkup submissions are saved.
- [ ] Consultation submissions are saved.
- [ ] Job applications are saved.
- [ ] Planning Guide lead submissions are saved.
- [ ] Planning Guide PDF opens and downloads.
- [ ] MongoDB records contain the expected fields.
- [ ] Forms validate required fields and appropriate input formats.
- [ ] Desktop and mobile layouts are checked.
- [ ] Production build completes successfully.
- [ ] Deployed frontend and backend work together.

## Future Improvements

Potential improvements include:
- Add stronger server-side validation and rate limiting.
- Add secure administrative tools for reviewing enquiries and applications.
- Improve automated tests and error monitoring.
- Optimize 3D assets and animations for mobile performance.
- Add accessibility and performance audits.
- Complete production deployment and document the live URLs.

## License

Add the license or usage terms appropriate to the project before public distribution.
