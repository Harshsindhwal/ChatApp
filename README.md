* * * * *

Real-Time Chat App (MERN Stack)
===============================

This is a real-time chat application built using the **MERN stack** (MongoDB, Express, React, Node.js) and **Socket.io** for real-time messaging. 🚀

Features 🎉
-----------

-   🌟 **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI.
-   🎃 **Authentication & Authorization**: Secure user management with **JWT** (JSON Web Tokens).
-   👾 **Real-Time Messaging**: Instant messaging powered by **Socket.io**.
-   🚀 **Online User Status**: Track and display active users in real-time.
-   👌 **Global State Management**: **Zustand** for seamless state management across the app.
-   🐞 **Error Handling**: Friendly error notifications for better UX.
-   ⭐ **Deployment**: Learn how to deploy your chat app for free!
-   ⏳ **And Much More!**

* * * * *

Project Setup 🛠️
-----------------

### Prerequisites

Before you begin, make sure you have the following installed:

-   **Node.js** (v16 or later) - [Install Node.js](https://nodejs.org/)
-   **MongoDB** (local or cloud instance like MongoDB Atlas) - [Setup MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
-   **NPM/Yarn** - (NPM comes with Node.js, so it's likely you have it already)

* * * * *

### 1\. Clone the Repository

Start by cloning the repository:

```
git clone https://github.com/yourusername/chat-app.git
cd chat-app

```

### 2\. Install Dependencies

Install the necessary dependencies for both the frontend and backend:

```
npm install

```

This will install all dependencies listed in the `package.json` file.

* * * * *

### 3\. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

```

-   `MONGO_DB_URI`: Your MongoDB connection string. If you're using **MongoDB Atlas**, you can get this from your dashboard.
-   `JWT_SECRET`: A secret key to sign your JWT tokens. You can generate one using online tools or create a random string.

* * * * *

### 4\. Backend Setup (Server)

Navigate to the backend directory and start the server:

```
npm run dev

```

This will start the server in **development mode**. By default, it will run on `http://localhost:5000`.

* * * * *

### 5\. Frontend Setup (Client)

In a new terminal window, navigate to the frontend directory:

```
cd client
npm install
npm run dev

```

This will start the React app in **development mode**, typically on `http://localhost:3000`.

* * * * *

App Features
------------

### 1\. **User Authentication**

-   **Sign Up**: Register users using their email and password.
-   **Login/Logout**: Secure login/logout functionality with JWT tokens.
-   **JWT-based Route Protection**: Protect sensitive routes and ensure only authenticated users can access them.

### 2\. **Real-Time Messaging**

-   **Socket.io** is used to enable real-time messaging between users.
-   Users can send and receive messages instantly without reloading the page.
-   Each conversation is stored in MongoDB for persistence.

### 3\. **User Online Status**

-   The app keeps track of users' online status using **Socket.io** and displays online/offline status on the UI.

### 4\. **Global State Management**

-   **Zustand** is used to manage global application state such as user authentication status, active conversations, etc.

* * * * *

How to Build and Deploy 🚀
--------------------------

### Build the App

To create a production build for both the backend and frontend, run the following:

```
npm run build

```

This will optimize the app for production and prepare it for deployment.


Tech Stack 💻
-------------

-   **Backend**: Node.js, Express, Socket.io, MongoDB
-   **Frontend**: React, TailwindCSS, Daisy UI
-   **State Management**: Zustand
-   **Authentication**: JWT (JSON Web Tokens)
-   **Real-Time Communication**: Socket.io

* * * * *
