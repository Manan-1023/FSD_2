# Experiment 9: JWT Authentication Implementation

## Overview

This experiment demonstrates the implementation of authentication mechanisms in a Flask-based backend application. It covers multiple authentication methods, with a focus on JWT (JSON Web Tokens) as a secure, stateless authentication approach.

## Project Structure

```
Experiment_9/
├── venv/
│   ├── Include/
│   ├── Lib/
│   └── Scripts/
├── requirements.txt
├── app.py
└── README.md
```

## Authentication Methods Comparison

| Authentication Method | Header Used           | Stateless | Security Level |
| --------------------- | --------------------- | --------- | -------------- |
| Basic Auth            | Authorization         | Yes       | Weak           |
| Base64 Token          | x-auth-token          | Yes       | Very Weak      |
| JWT Bearer Token      | Authorization: Bearer | Yes       | Strong         |

## API Endpoints

| Method | Endpoint         | Description                                 |
| ------ | ---------------- | ------------------------------------------- |
| GET    | /                | API status and available routes             |
| GET    | /basic-protected | Protected route using Basic Authentication  |
| POST   | /token-login     | Generate a Base64-encoded token             |
| GET    | /token-protected | Protected route using `x-auth-token` header |
| POST   | /jwt-login       | Generate a JWT access token                 |
| GET    | /jwt-protected   | Protected route using JWT Bearer token      |

## Key Concepts

### JWT Token Verification

JWT tokens are verified through the Bearer token mechanism using the `Authorization: Bearer` header for secure, stateless authentication.

## Learning Outcomes

- Understood backend technologies and their implementation
- Learned to create Python virtual environments using venv
- Explored different authentication methods and their security levels
- Learned about JWT (JSON Web Tokens) and their advantages
- Gained hands-on experience coding with Flask
- Understood Flask framework fundamentals and routing mechanisms
