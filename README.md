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

## Running test and storybook

- npm run storybook

- nom run test

Usage
Open your browser and go to http://localhost:5173/ to access the Todo app.

### Api Documentation

## Endpoints

### 1. Get All Todos

- **Endpoint:** `GET /api/todos`
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
  
### 2. Get Todo by ID

- **Endpoint:** `GET /api/todos/:id`
- **Description:** Get details of a specific todo by ID.
- **Response:**
  ```json
  {
  "success": true,
  "message": "Todo retrieved successfully",
  "data": {
    "id": "1",
    "title": "Sample Todo",
    "description": "This is a sample task."
  }
}

### 3. Create Todo

- **Endpoint:** `POST /api/todos`
- **Description:** Create a new todo.
- **Request:**
  ```json
  {
  "title": "New Todo",
  "description": "This is a new task."
  }

- **Response:**
  ```json
  {
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "id": "2",
    "title": "New Todo",
    "description": "This is a new task."
  }
  }

### 3. Update Todo by ID

- **Endpoint:** `PUT /api/todos/:id`
- **Description:** Update details of a specific todo by ID.
- **Request:**
  ```json
  {
  "title": "Updated Todo",
  "description": "This task has been updated."
  }

- **Response:**
  ```json
  {
  "success": true,
  "message": "Todo updated successfully",
  "data": {
    "id": "2",
    "title": "Updated Todo",
    "description": "This task has been updated."
  }
  }



### 5. Delete Todo by ID

- **Endpoint:** `DELETE /api/todos/:id`
- **Description:**  Delete a specific todo by ID.
- **Response:**
  ```json
  {
  "success": true,
  "message": "Todo deleted successfully",
  "data": null
  }


