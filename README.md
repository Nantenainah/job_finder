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

# Recruiter API Routes Documentation

This documentation provides information about the API routes for managing recruiters and their associated job listings.

## Create a New Recruiter

-   **Route:** POST /recruiters
-   **Purpose:** Create a new recruiter profile.
-   **Request Body:**
    -   Required fields:
        -   `email`: Recruiter's email address (string, required, unique).
        -   `username`: Recruiter's username (string, required).
        -   `lastName`: Recruiter's last name (string, required).
        -   `firstName`: Recruiter's first name (string, required).
        -   `password`: Recruiter's password (string, required).
    -   Optional fields:
        -   `companyName`: Name of the recruiting company (string).
        -   `phoneNumber`: Recruiter's phone number (string).
        -   `companyDescription`: Description of the recruiting company (string).
        -   `websiteUrl`: Recruiting company's website URL (string).
        -   `logo`: Link to the company logo (string).
-   **Response:**
    -   HTTP Status: 201 Created
    -   JSON: Newly created recruiter object.

## Get All Recruiters

-   **Route:** GET /recruiters
-   **Purpose:** Retrieve a list of all recruiters.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Array of recruiter objects.

## Get a Recruiter by ID

-   **Route:** GET /recruiters/:id
-   **Purpose:** Retrieve a recruiter's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the recruiter.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Recruiter object.
    -   HTTP Status: 404 Not Found (if recruiter with the provided ID does not exist).

## Update a Recruiter's Profile

-   **Route:** PUT /recruiters/:id
-   **Purpose:** Update a recruiter's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the recruiter.
-   **Request Body:** JSON object containing the fields to be updated.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Updated recruiter object.
    -   HTTP Status: 404 Not Found (if recruiter with the provided ID does not exist).

## Delete a Recruiter

-   **Route:** DELETE /recruiters/:id
-   **Purpose:** Delete a recruiter's profile by their unique ID.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the recruiter.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Deleted recruiter object.
    -   HTTP Status: 404 Not Found (if recruiter with the provided ID does not exist).

## Get All Job Listings of a Recruiter

-   **Route:** GET /recruiters/:id/job-listings
-   **Purpose:** Retrieve a list of all job listings associated with a recruiter.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the recruiter.
-   **Response:**
    -   HTTP Status: 200 OK
    -   JSON: Array of job listing objects.
    -   HTTP Status: 404 Not Found (if recruiter with the provided ID does not exist).

## Create a New Job Listing for a Recruiter

-   **Route:** POST /recruiters/:id/job-listings
-   **Purpose:** Create a new job listing associated with a recruiter.
-   **Request URL Parameters:**
    -   `id`: Unique identifier of the recruiter.
-   **Request Body:**
    -   Required fields:
        -   `title`: Title of the job listing (string, required).
        -   `description`: Description of the job listing (string, required).
        -   `requirements`: Requirements for the job listing (string, required).
        -   `companyName`: Name of the company (string, required).
        -   `location`: Location of the job (string, required).
        -   `industry`: Industry of the job (string, required).
        -   `skills`: Required skills for the job (string, required).
        -   `responsibility`: Job responsibilities (string, required).
        -   `remoteWorkOption`: Remote work option (string, required, e.g., "Yes" or "No").
    -   Optional fields:
        -   `companyLogo`: Link to the company's logo (string).
        -   `salaryRange`: Salary range for the job (string).
        -   `applicationDeadline`: Application deadline (string).
        -   `employmentStartDate`: Employment start date (string).
-   **Response:**
    -   HTTP Status: 201 Created
    -   JSON: Newly created job listing object.
    -   HTTP Status: 404 Not Found (if recruiter with the provided ID does not exist).
