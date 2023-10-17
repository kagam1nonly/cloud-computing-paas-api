# Cloud Computing PaaS REST API

Cloud Computing PaaS REST API: A Node.js-based API for managing user details. This RESTful service allows you to create a JSON library of users, get a list of users, insert a new user, retrieve a single user by ID, and delete a user by their ID. Built with Express.js, it's a flexible solution for user data management.

<center><h2><strong>Get List of Users</strong></h2></center>

![Get List of Users](https://user-images.githubusercontent.com/78834746/275799979-4567208e-ded2-44bf-acb1-61d3f28dbd48.jpg)
![Get List of Users By ID](https://user-images.githubusercontent.com/78834746/275803401-290e14eb-a333-4de3-87a7-17cc09425d56.jpg)
![Inserting User](https://user-images.githubusercontent.com/78834746/275804014-1ef258c6-292f-470c-8a1c-67c7dd797de2.jpg)
![Deleting User By ID](https://user-images.githubusercontent.com/78834746/275804512-9fce920b-9a5f-4bdb-b4f9-e99c58badf66.jpg)

## Dependencies
├── **express@4.18.2**: Express.js is a web application framework for Node.js. We use it for routing and handling HTTP requests. <br>
├── **body-parser@1.20.2**: Body-parser is middleware for handling JSON data in requests. It's used to parse request bodies. <br>
└── **fs@0.0.1-security**: The File System module for reading and writing files. It's used to update user data in a JSON file.

## Getting Started

To run this project, make sure you have Node.js installed. Then, install the required dependencies:

```bash
npm install
