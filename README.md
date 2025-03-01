# Simple Chat Application

This is a basic chat application, similar in concept to WhatsApp, built using Node.js and Express.js.

## Prerequisites

* Node.js and npm (Node Package Manager) installed.

## Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your_repository_url>
    cd <your_project_directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will install all the necessary packages listed in the `package.json` file, creating the `node_modules` directory.

## Running the Application

1.  **Start the server:**
    ```bash
    nodemon server.js
    ```
    (Ensure you have nodemon installed globally or locally. If not, install with `npm install -g nodemon` or `npm install nodemon --save-dev`.)
    This will start the Node.js server and automatically restart it whenever you make changes to your code.
2.  **Open the application in your browser:**
    * Navigate to `http://localhost:3000` in your web browser.

## Functionality

* Users can send and receive messages in real-time.

## Technologies Used

* Node.js
* Express.js
* Socket.io

## What I Learned

This project was developed as a learning exercise to solidify my understanding of:

* Basic Node.js concepts.
* Building web applications with Express.js.
* Testing of Node.js applications.
* Socket.io for basic Realtime communication.

## Testing

* To run the tests, use the following command:
    ```bash
    npm test
    ```
    This will execute the tests defined in your test files.
