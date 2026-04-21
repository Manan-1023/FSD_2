# Experiment 11 – Microservices-Based Backend Module

## Objective

To develop a **microservices-based backend system** using Flask, where:

- One service handles **Customer data**
- Another service handles **Order data**
- Services communicate using **HTTP requests**

## Project Structure

```
micro-services-lab/
│
├── customer-service/
│   ├── customer_app.py
│   └── requirements.txt
│
├── order_service/
│   ├── order_app.py
│   └── requirements.txt
│
└── README.md
```

## ⚙️ Technologies Used

- Python (Flask)
- Requests Library
- Postman (API Testing)
- Render (Deployment)

## Microservices Overview

### 1. Customer Service

- Stores customer data (in-memory)
- Fetches customer details
- Calls Order Service to retrieve orders

**Endpoint:** GET /customers/<user_id>/orders

### 2. Order Service

- Stores order data (in-memory)
- Retrieves orders for a user
- Updates order status

**Endpoints:**

- GET /orders/user/<user_id>
- PUT /orders/<order_id>/status

## Working Flow

1. Client sends request:

   ```
   /customers/101/orders
   ```

2. Customer Service fetches customer data
3. Calls Order Service API
4. Combines response and returns JSON

## Learning Outcomes

- Understood Microservices Architecture
- Implemented Service-to-Service Communication
- Built REST APIs using Flask
- Learned GET and PUT methods
- Worked with in-memory data storage
- Deployed services using Render
- Tested APIs using Postman
- Learned error handling in APIs
