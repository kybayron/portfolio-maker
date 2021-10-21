# Introduction

***portfol.io*** is a project created by Team MayaMan as an output for their Core and Financial Services immersion. It is built to be a service capable of easily and quickly rendering website portfolios to showcase the professional achievements of a user. This is done by implementing APIs that collect data from a user through a form on the app, store such data in a database, and return such data on the rendered website portfolio.

## DEFINITION OF TERMS

**USER** - Registered user of the application.

**PORTFOLIO** - User-inputted data collected by the API and intended for rendering on the portfolio-maker service.

**WEBSITE** - Rendered website portfolio using user-inputted data.

**APPLICATION/SERVICE** - Both refer to the portfol.io

## RATIONALE

The application caters to job-hunters on the go, who may need a presentable online portfolio alongside their job applications. Though services such as Linkedin and Kalibrr present user credentials on a user's profile page, these do not add to the ability of catching an employer's attention. On another hand, existing customisable website/portfolio services such as Wordpress, Carrd, or Canva are far too complex and time-consuming for the average person. The ***portfol.io*** service packages a solution for this in three easy steps: Login -> Form -> Present.

---
---

# portfol.io

## WORKFLOW

### BUILD
The application implements a REST API using Node.js for the backend with Express as the application framework. The database utilizes MongoDB together with Mongoose to create the data schemas and models. Vue.js was utilized for the user interface, which facilitates redirection to Google Authentication, renders a form that collects user data to be passed through the API and database, and renders the service's user website portfolios.

### Distribution

Karl Bayron | Ninielle Pascual | Rog Gungon |
----------- | ---------------- | ---------- |
Backend | Frontend | Backend-Frontend integration
Database Handling & Routing | UI/UX | Dynamic Linking in Vue
API Design & Routing | Frontend Routing/Rendering | Implementation of HTTP Methods
Error Code Handling | Documentation | API Field Validation
Google Oauth2 | | Test Cases and Results

## FEATURES

### User Handling
Only logged-in users may create and display portfolios. Thus, the application's database stores users that can be created, deleted, and updated

### Login with Google Oauth 2.0
The login process utilizes Google's Oauth 2.0, which obtains client credentials through Google's API Console. The tokens from Google's Authorization Server is then passed to ***portfol.io*** as authentication.

### Portfolio Creation
A user may easily input their portfolio data on the application's UI. Such information is then rendered on a presentable portfolio website.

## PROJECT SETUP (Pre-Production)

### Install/update Node Packages
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Runs build on localhost
```
npm start
```

### Vue Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
---

# Portfolio-Maker API
REST API facilitated by Node.JS with Express. All request and response bodies use the JSON Format.

## AUTHENTICATION

### Google Oauth 2.0

Obtains Google account credentials through Google API Console, returning an access token granted by Google Authorization Server.

## ENDPOINT: `/api/user`

### userModel
JSON formatting of a user's `googleId`, which serves as the primary key, and their `fullName`

```
{
    fullName: String,
    googleId: {type: String,
               unique: true,
               immutable: tre
              }
}
```

### Response Codes
- 200 OK - request successful
- 404 - resource not found (ID does not exist)
- 422 - resource already exists

### `GET /api/users`
Returns all users

**RESPONSE CODES**
- 200 OK

### `POST /api/users`
Creates a new user

**SAMPLE REQUEST BODY**

```JSON
{
    "fullName": "Juan dela Cruz",
    "googleId": "12345"
}
```

### `GET /api/users/:googleId`
Get user by their googleId

**SAMPLE RESPONSE BODY**
```JSON
{
    "_id": "616f6df1cce3d5c8a209263d",
    "fullName": "Juan dela Cruz",
    "googleId": "12345",
}
```

### `DELETE /api/users/:googleId`
Delete user by their googleId

### `PATCH /api/users/:googleId`
Update user by their googleId

## ENDPOINT: `/login`

The application's login method passes a request to Google Oauth 2.0, and after authenticaton, redirects the user to the create portfolio page.

### `GET /login`
Passes user through Google Authorization Portal

## ENDPOINT: `/api/portfolio`

### portfolioModel

**FIELDS AND DEFINITIONS**

FIELD | REQUIRED | SPECIFICATIONS | DESCRIPTION
----- | ---- | -------- | -----------
googleId | Y | N/A | ID received from Google Oauth, used as the user portfolio's unique ID
fullName | Y | Must be 2-50 characters | User's full name
title | Y | Must be 2-50 characters | User's professional title (ex. Cadet Engineer)
contactNo | Y | Must be a valid email | User's mobile or phone number
email | Y | Must be a valid email | User's email
description | Y | Must be 2-280 characters | A quick Bio or summary of the user's credentials
achievements | N | N/A | Array of [Title, Year, Description] that describe a user's notable credentials
education | Y | Must be 2-50 characters | Educational achievement such as university and degree
jobExperience | N | N/A | Similar to achievements, this refers to multiple arrays of [Title, Year, Description] that showcase a user's previous job titles and experience
socials | N | N/A | Social media pages or links such as linkedin

**DATA MODEL**

```
{
    googleId: String,
    fullName: String,
    title: String,
    contactNo: String,
    email: String,
    description: String,
    achievements: Array,
    education: String,
    jobExperience: Array,
    socials: String
}
```
### Response Codes
- 200 OK - request successful
- 400 - field validation error; incomplete requirements
- 404 - resource not found (ID does not exist)
- 405 - method not supported (ex. GET /portfolio)
- 422 - resource already exists

### `POST /api/portfolio`
Creates a new portfolio

**SAMPLE REQUEST BODY**

```JSON
{
    "googleId": "12345",
    "fullName": "Juan dela Cruz",
    "title": "Fintech Enthusiast",
    "contactNo": "+639000000000",
    "email": "jdc@email.com",
    "description": "With love for financial inclusion",
    "achievements": [
        {
            "title": "Most financial inclusive",
            "year": "2020",
            "description": "Award given at a financial inclusivity convention"
        },
        {
            "title": "Valedictorian",
            "year": "1999",
            "description": "Valedictorian in school"
        },
    ],
    "education": "University of Universities",
    "jobExperience": [
        {
            "title": "Fintech enthusiast",
            "year": "2002 - present",
            "description": "With love for financial inclusion"
        },
        {
            "title": "Cadet Enginner",
            "year": "2000 - 2001",
            "description": ""
        }
    ],
    "socials": "linkedin.com/jdl",
    "__v": 0
}

```

**SAMPLE RESPONSE BODY**

```JSON
{
    "message": "Successful
}
```

### `GET /api/portfolio/:googleId`
Get a portfolio by its googleId. Response body returns portfolio details.

### `DELETE /api/portfolio/:googleId`
Delete a portfolio by its googleId. Idempotent.

### `PATCH /api/portfolio/:googleId`
Update a portfolio by its googleId.

---
---

# Appendix

## A. TEST CASES

You may find the complete test cases at: https://docs.google.com/spreadsheets/d/1XRrvBODVI9HFmS19k0YRjIgKUt-qkyYjYCFJ8YYRuj4/edit?usp=sharing

| Description | HTTP Method | HTTP Path | Request Body | Expected Status Code | Actual Status Code | Expected Response Body | Actual Response Body |
| ----------- | ----------- | --------- | ------------ | -------------------- | ------------------ | ---------------------- | -------------------- |
