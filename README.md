# Node.js Project with MongoDB

A brief guide to set up and run the Node.js project with MongoDB.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A MongoDB Atlas account or local MongoDB instance

---

## Setup Instructions

1. **Extract the Project**
   - Download and unzip the project files.

2. **Install Dependencies**
   - Open a terminal in the project folder and run:
     ```bash
     npm install
     ```

3. **Configure Environment Variables**
   - Create a `.env` file in the project root with the following content:
     ```env
     MONGO_CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
     PORT=5002
     ```
   - Replace placeholders with your MongoDB credentials.

---

## Run the Project

1. **Start the Server**
   ```bash
   npm start
   ```

2. **Access the Application**
   - Open your browser and go to:
     ```
     http://localhost:5002
     ```

---

## Notes

- Ensure the `.env` file is configured correctly.
- The `node_modules` folder is excluded; run `npm install` to restore dependencies.

---

Thank you for reviewing the project!
