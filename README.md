# Documentation

# Applicant API Routes Documentation

This documentation provides information about the API routes for managing applicants.

## Create a New Applicant

-   **Route:** POST /applicants
-   **Purpose:** Create a new applicant profile.
-   **Request Body:**
    -   Required fields:
        -   `email`: Applicant's email address (string, required, unique).
        -   `username`: Applicant's username (string, required).
        -   `lastName`: Applicant's last name (string, required).
        -   `firstName`: Applicant's first name (string, required).
        -   `password`: Applicant's password (string, required).
    -   Optional fields:
        -   `phoneNumber`: Applicant's phone number (string).
        -   `address`: Applicant's address (string).
        -   `resume`: Link to the applicant's resume (string).
        -   `coverLetter`: Link to the applicant's cover letter (string).
        -   `jobPreference`: Job preferences of the applicant (string).
-   **Response:**
    -   HTTP Status: 201 Created
    -   JSON: Newly created applicant object.

## Get All Applicants

-   **Route:** GET /applicants
-   **Purpose:** Retrieve a list of all applicants.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Array of applicant objects.

## Get an Applicant by ID

-   **Route:** GET /applicants/:id
-   **Purpose:** Retrieve an applicant's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the applicant.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Applicant object.
    -   HTTP Status: 404 Not Found (if applicant with the provided ID does not exist).

## Update an Applicant's Profile

-   **Route:** PUT /applicants/:id
-   **Purpose:** Update an applicant's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the applicant.
-   **Request Body:** JSON object containing the fields to be updated.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Updated applicant object.
    -   HTTP Status: 404 Not Found (if applicant with the provided ID does not exist).

## Delete an Applicant

-   **Route:** DELETE /applicants/:id
-   **Purpose:** Delete an applicant's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the applicant.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Deleted applicant object.
    -   HTTP Status: 404 Not Found (if applicant with the provided ID does not exist).
