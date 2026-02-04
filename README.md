# Smart Office – Offline Document Editor (POC)

## Overview
Smart Office is a proof-of-concept offline, browser-based document editor designed for secure, on-prem environments.  
The system allows users to create, edit, and save documents locally using a Node.js server and browser clients over a LAN.

This project focuses on system design, offline-first thinking, and practical trade-offs rather than building a full production product.

---

## Key Objectives
- Enable document creation and editing entirely offline
- Avoid any dependency on cloud or internet services
- Provide a simple Google Docs–like editing experience in the browser
- Standardize documents using predefined templates
- Support local deployment over LAN with multiple browser clients

---

## Tech Stack
- **Backend:** Node.js, Express  
- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Storage:** Local JSON files  
- **Deployment:** On-prem machine / LAN  

---

## Folder Structure
smart-office/
├── backend/
│ ├── server.js
│ ├── routes/
│ │ └── documents.js
│ ├── services/
│ │ └── storageService.js
│ └── data/
│ ├── documents/
│ └── templates/
│ └── official-letter.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── app.js
│
└── README.md


---

## How to Run

### 1. Start the Backend Server
Open a terminal and run:
cd backend
npm install
npm start


The backend server will start at:
http://localhost:3000


---

### 2. Start the Frontend
Open a new terminal and run:
cd frontend
http-server


Open the browser and visit:
http://localhost:8080


---

## Offline Verification
- Wi-Fi was turned OFF during testing
- The application continued to work normally
- Documents were successfully saved as local JSON files

This confirms that the system runs entirely on-prem and offline.

---

## Document Editing
- Users can create and edit documents directly in the browser
- Cursor-based typing, paragraph breaks, and basic formatting are supported
- The editor provides a simple Google Docs–like experience suitable for v1

---

## Templates & Standardization
- Templates are stored as JSON files containing HTML structure
- Clicking **Load Template** pre-fills the editor with a standard document format
- Users only fill in content, ensuring consistent structure across documents

---

## Voice Input (Speech-to-Text) – Design Explanation
Voice input is supported at the design level, as required by the assignment.

Proposed offline flow:
Browser Microphone
→ Local Node.js Server
→ Offline Speech-to-Text Engine (e.g., Vosk / Whisper.cpp)
→ Text inserted into the editor


Full speech recognition is intentionally not implemented in this version to avoid heavy dependencies and to respect offline constraints.

---

## Design Decisions
- Chose a browser-based editor to avoid client installations
- Used a local Node.js server to keep all data on-prem
- Stored documents as JSON files for simplicity and transparency
- Kept speech-to-text at design level to avoid partial or internet-dependent solutions
- Focused on clarity and maintainability over feature completeness

---

## What I Would Improve Next
- Integrate offline speech-to-text using a local engine
- Add document loading by ID from the UI
- Export documents as PDF or DOCX
- Add document locking and approval workflows
- Improve rich-text formatting while keeping the system offline-first

---

## Conclusion
This proof-of-concept demonstrates a clean, offline-first document editing system designed for secure environments.  
The implementation emphasizes system thinking, practical trade-offs, and clarity of design rather than feat