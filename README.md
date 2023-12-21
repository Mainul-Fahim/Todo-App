# Todo App

A simple Todo application with a frontend and backend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Introduction

This Todo app provides a user-friendly interface to manage your tasks. It consists of a frontend built with React and a backend server powered by Express.

## Features

- Add, edit, and delete todos
- View details of individual todos
- Responsive and user-friendly interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed

## Installation

### Backend

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   
2. Install all the dependencies
 - npm install

3. Create env file

 - Create a .env file and configure your environment variables (e.g., PORT=5000).
 - write PORT=5000 exactly 

5. Start the server
- npm run start:dev
- http://localhost:5000 this will be the server
- 
### Frontend
- Navigate to the frontend directory:

 cd frontend
- Install dependencies:

 npm install
 
- Start the development server:

npm run dev

- The frontend development server will be running at http://localhost:5173/.

Usage
Open your browser and go to http://localhost:5173/ to access the Todo app.

## Endpoints

### 1. Get All Todos

- **Endpoint:** `GET /todos`
- **Description:** Get a list of all todos.
- **Response:**
  ```json
  {
    "success": true,
    "message": "Todos retrieved successfully",
    "data": [
      {
        "id": "1",
        "title": "Sample Todo",
        "description": "This is a sample task."
      },
      // ...more todos
    ]
  }
