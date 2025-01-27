# Portfolio Website

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Folder Structure](#folder-structure)
8. [Future Features](#future-features)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Overview

This project is a personal portfolio website showcasing my skills, projects, and professional experience. It is fully responsive and serves as a central hub for potential employers, clients, and collaborators to learn about my work and get in touch.

## Features

### 1. Home (Hero) Section
- Introduces my expertise in building scalable and innovative web solutions.
- Displays technology stack (React, Laravel, MySQL, AWS, etc.).
- Includes a clear call-to-action to explore projects or contact me.

### 2. Projects Section
- Showcases professional and personal projects with detailed descriptions.
- Provides links to live demos or repositories.
- Features interactive modals with images and project details.

### 3. Contact Page
- Allows visitors to request a quote, make a job offer, or schedule an interview.
- Dynamic form fields based on user selection.
- Real-time validation with error handling for incomplete fields.
- Form submissions sent to my email (mhdhusamtakaji@gmail.com).
- Displays my email, phone number, location, and a link to my CV.

### 4. Responsive Design
- Optimized layout for desktops, tablets, and mobile devices.
- Fluid grid layouts and adaptive typography.

### 5. Dark/Light Mode
- Offers both light and dark themes for improved accessibility.

## Tech Stack

**Frontend**
- React.js
- Material-UI (MUI) for modern UI components
- Framer Motion for animations

**Backend**
- PHP (Email submission logic using `sendEmail.php`)
- Hosted on Bluehost

**Email Notifications**
- Utilizes PHP `mail()` function for sending emails dynamically

## Installation

1. **Clone the Repository**  
   `git clone https://github.com/<your-username>/<your-repo>.git`

2. **Navigate to the Project Directory**  
   `cd portfolio-website`

3. **Install Dependencies**  
   `npm install`

4. **Start the Development Server**  
   `npm start`

The site will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Explore the Home, Projects, and Contact sections.
3. For backend integration, place `sendEmail.php` on your Bluehost server in the `/api` folder.
4. Ensure email service is configured to send messages to `mhdhusamtakaji@gmail.com`.

## Deployment

1. Push your changes to the GitHub repository.
2. On your Bluehost server, pull the latest code via FTP or Git.
3. Make sure `sendEmail.php` is correctly placed under `/api/`.
4. Verify that email sending and form submissions work correctly.

## Folder Structure

portfolio-website/
├── public/                # Public assets (images, favicon, etc.)
├── src/                   # Source code
│   ├── components/        # Reusable components (HeroSection, ContactForm, etc.)
│   ├── pages/             # Page-specific components (HomePage, ProjectsPage)
│   ├── assets/            # Static assets (images, fonts, CV, etc.)
│   ├── utils/             # Utility functions and hooks
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
├── api/                   # Backend (PHP email script)
│   └── sendEmail.php      # Handles form submission logic
├── README.md              # Documentation
├── package.json           # Project configuration
└── .gitignore             # Ignored files

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Create a Pull Request on GitHub.


## Contact

- **Email**: mhdhusamtakaji@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/mhd-husam-takaji-a1a074289
- **GitHub**: https://github.com/mhdhusamtakaji

