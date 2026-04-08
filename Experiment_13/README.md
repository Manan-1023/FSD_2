# 🧪 Experiment 13

## Connecting Backend to Database and Implementing CRUD Operations with Validation

## 📌 Objective

The goal is to create a backend server with Flask, link it to a database, and add CRUD operations (Create, Read, Update, Delete) along with proper validation and testing via Postman.

## Theory

### Flask Backend

Flask is a simple Python web framework for building REST APIs. It lets you set up routes (endpoints) to manage HTTP requests like GET, POST, PUT, and DELETE.

### Database Integration

We use SQLAlchemy ORM to connect Flask to a database (PostgreSQL on Render or SQLite locally). It translates Python classes into database tables.

### Model (Student Table)

- id → Primary Key
- uid → Unique ID
- name → Student Name
- age → Student Age

### Validation

Using Marshmallow:

- Name ≥ 2 characters
- Age between 1–120
- UID must be unique

### CRUD Operations

| Operation | Method | Endpoint       |
| --------- | ------ | -------------- |
| Create    | POST   | /students      |
| Read All  | GET    | /students      |
| Read One  | GET    | /students/<id> |
| Update    | PUT    | /students/<id> |
| Delete    | DELETE | /students/<id> |

---

## 📂 Project Structure

│── app.py
│── requirements.txt
│── Procfile
│── README.md
│── screenshots/

---

## ⚙️ Features

✔ CRUD APIs  
✔ Database Integration  
✔ Validation using Marshmallow  
✔ Error Handling  
✔ Pagination  
✔ Deployment

---

## 🎯 Learning Outcomes

- Built REST APIs using Flask
- Connected backend with database
- Performed CRUD operations
- Implemented validations
- Tested APIs using Postman
- Deployed backend on Render
