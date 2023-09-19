# Social Media App

Welcome to our full-stack social media app! This application allows users to connect with friends, share updates, and engage with a social community. This README provides an overview of the app's features, installation instructions, and usage guidelines.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Authentication:** Users can create accounts and log in securely.

- **Profile Management:** Users can customize their profiles with profile pictures, bios, and other personal information.

- **Friendship System:** Users can send friend requests, accept or reject requests, and manage their friends list.

- **Post Creation and Interaction:** Users can create posts, like, comment on, and share posts created by others.

- **Privacy Controls:** Users can control the visibility of their posts and profile information.

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript
  - React.js
  - Redux for state management
  - Axios for API requests
  - [UI Framework/library - e.g., Material-UI, Bootstrap]

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database storage



## Installation

Follow these steps to set up and run the application locally:

1-Fork this repository so that you have your own copy of the repository linked to your own github account.

2-Clone your forked copy to your local machine by going to the folder where you want to setup the project and then typing in the terminal/cmd git clone https://github.com/<your-username>/SocialMedia-App.git or if confused, copy the link from the green CODE button on the Code tab of your repository.

3-Create a .env file in the backend folder and add the following environment variables:

PORT=
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret

4-Install the project dependencies for both the backend and the user-frontend:

Install backend dependencies
cd backend 
npm install

Install frontend dependencies
cd user-frontend 
npm install

5-Run the Application:

In the backend directory
npm start

In the user-frontend directory
npm start

6-In order to close the program press ctrl+c in the same terminal/cmd.













