# Employee Web Poll App

This project is a simple internal application where employees can create and vote on polls. The app includes user authentication, poll creation, voting, and a leaderboard that ranks users based on their activity.

Built with Node v18.3.1

## Features

- **Login/Logout**: Users can log in by selecting from a list of available users and log out when done.
- **Poll Creation**: Users can create new "Would You Rather" polls with two options.
- **Poll Voting**: Users can vote on polls they haven't answered yet.
- **Poll Results**: View the number of votes and percentage of votes each option has received.
- **Leaderboard**: Users are ranked by the number of polls they've created and answered.

## Setup

### 1. Clone the Repository

`git clone https://github.com/your-username/employee-polls-web-app.git`

`cd employee-polls-web-app`

`npm install`

`npm start`

This will open the app at `http://localhost:3000/` in your default browser.

### dependencies required:

- "react": "^18.3.1",
- "react-dom": "^18.3.1",
- "react-redux": "^9.1.2",
- "react-router-dom": "^6.26.2",
- "react-scripts": "5.0.1",
- "redux": "^5.0.1",
- "redux-thunk": "^3.1.0",
