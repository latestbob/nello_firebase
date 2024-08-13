# MERN STACK SHOPPING CART ASSESSMENT


## Overview

This project is a full-stack application that includes a frontend built with React, a backend with Node.js and Express, and a MongoDB database. It demonstrates how to build a complete web application with modern technologies and practices.


## Prerequisites

List any prerequisites or dependencies required to run the project.

Node.js (version 16 or higher)
Docker
Docker Compose
MongoDB


## Installation

### Clone the Repository

```bash
git clone http://techary-limit-akkrxd@git.codesubmit.io/techary-limited/tech-store-showdown-eexndh
cd tech-store-showdown-eexndh

```



## Envioronment Setup

### Backend

1. Navigate to backend directory

```bash
cd backend


```
2. Install Dependencies

```bash
npm install


```

3. Create a .env file in the root of backend directory and add the following variables:

```plaintext

    PORT=5000
    MONGO_URI=mongodb://mongo:27017/store
    TEST_PORT=5000

```

Note we are using mongo official image to deploy our mongodb instance, but
should you decide you you Atlas, kindly replace MONGO_URI to the url of your mongodb cluster


### Frontend

1. Navigate to frontend directory

```bash
cd frontend


```
2. Install Dependencies

```bash
npm install


```

3. Create a .env file in the root of backend directory and add the following variables:

```plaintext

    REACT_APP_API_URL=http://localhost:5000/api
    REACT_APP_PORT=3000


```


## Testing Backend Locally(Optional)

To run tests locally with a MongoDB connection,  follow these steps:

### **1. Setup MongoDB**

1. **Install MongoDB:**

   If you don’t have MongoDB installed, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

2. **Start MongoDB:**

   Make sure MongoDB is running on your local machine. You can start it with:

   ```bash
   mongod

3. **Replace MONGO_URI:**

    In the backend .env, change the MONGO_URI to the below

```plaintext


    MONGO_URI=mongodb://localhost:27017/store
  
```
4. **Importing Seed Data**

    Importing Product Seed to your mongodb database using Compass, Visit https://www.mongodb.com/try/download/compass to download Compass if not installed.




 Import **store.products.json**  file found in the project root into the store database using Compass


Run the test

   ```bash
   cd backend
   npm test

```
This should run the test case located in "backend/_test_/app.test.js"


## Deployment Guide: Deploying MERN Stack with Docker Compose

There are many options available for deploying a MERN stack application. Some popular methods include using cloud platforms like AWS, Heroku, DigitalOcean, or container orchestration tools like Kubernetes. However, in this guide, we will focus on deploying a MERN stack using Docker Compose. Docker Compose simplifies the deployment process by allowing you to manage and run multi-container Docker applications with ease.


## Deployment Steps

### Backend (Node.js/Express) Dockerfile:
    Create a 'Dockerfile' in your backend directory if not existing

```




