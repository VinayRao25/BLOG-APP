# MERN Stack Blog Application

This is a full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, view, and manage blog posts. It also includes user authentication for securing access to specific features.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Deployment](#deployment)

## Features

- **Create, Read, Update, and Delete (CRUD)** operations for blog posts.
- **Responsive Design**: Works on various screen sizes.
- **User Authentication**: Secure login and registration using JWT.
- **Frontend and Backend Integration**: Seamless communication between frontend and backend using RESTful APIs.

## Technologies Used

- **Frontend**: React, React Router, Axios, Material-UI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: (Optional) Deployed to a cloud platform such as Heroku or Vercel

## Project Structure
my-blog-app/ ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── .env │ ├── server.js │ └── package.json ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── App.js │ │ ├── index.js │ │ └── App.css │ ├── .env │ └── package.json └── README.md


## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed on your local machine.
- **MongoDB** installed locally or use a cloud service like MongoDB Atlas.

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
2. Install backend dependencies:
   npm install
3. Create a .env file in the backend directory and add the following:
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
5. Start the backend server:
   npm run server

### Frontend Setup

1. **Navigate to the `frontend` directory**:
   ```bash
   cd frontend
2. Install frontend dependencies:
   npm install
3. Start the frontend development server:
   npm start

# Usage

# After setting up the frontend and backend, open the application in your default web browser
open http://localhost:3000      # For macOS
start http://localhost:3000     # For Windows

# Deploy the backend to Heroku
cd backend
heroku create your-app-name
heroku config:set MONGO_URI=your_mongo_database_uri
heroku config:set JWT_SECRET=your_jwt_secret
git init
git add .
git commit -m "Deploy backend"
git push heroku main

# Deploy the frontend to Vercel (or any other cloud platform)
cd frontend
vercel deploy --prod
   
