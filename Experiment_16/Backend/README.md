### Experiment No. 16: Conducting Unit Tests for Frontend and Backend Components

## Objective

The goal is to apply unit testing to backend APIs utilizing Flask and Pytest, while exploring concepts of frontend unit testing through JavaScript testing libraries.

## Background

### Significance of Testing

- Boosts application trustworthiness
- Prevents issues following code modifications
- Confirms proper code operation

### Testing Categories

- Unit Testing
- Integration Testing
- System Testing
- Acceptance Testing

### Backend Testing (Flask)

Flask offers a test client for mimicking HTTP requests without launching the server.

## 🛠️ Technologies Employed

- Python
- Flask
- Pytest
- Pytest-Cov
- Virtual Environment (venv)

## 📂 Project Layout

````
Experiment_16/
├── routes/
│ └── student_routes.py
├── Screenshots/
├── venv/
├── app.py
├── run.py
├── test_app.py
├── requirements.txt
└── README.md
---

## How to Run the Project

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python run.py
````

Server runs at:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /students      | Create student    |
| GET    | /students      | Get all students  |
| GET    | /students/<id> | Get student by ID |
| PUT    | /students/<id> | Update student    |
| DELETE | /students/<id> | Delete student    |

---

## Learning Outcomes

- Understood unit testing for backend APIs using Flask
- Learned how to write and execute test cases using Pytest
- Gained knowledge of debugging techniques in Python
- Learned importance of code coverage and test automation
- Understood frontend testing concepts using Jest
- Improved understanding of software testing lifecycle
