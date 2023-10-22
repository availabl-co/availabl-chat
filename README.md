# Overview
This codebase is a scaffold for use in the availabl take-home coding test. It consists of an express server (Node.js) and a React client. 

The exercise is designed to evaluate your ability to work across the full stack.

# Task
Using the scaffold provided, write a multiplayer chat application similar to Slack. The app should have the features described below.

## Features

- A new client should be prompted for their name
  - This name should be displayed to all other clients
- All clients should be added to a single channel
- A message sent by one client must be visible to all other clients
- Each client should be assigned an avatar
  - you can find avatar images in the public dir of the chat-client
- Style the application in line with the screenshot below
  - Feel free to use a framework like Tailwind or similar
- Display typing indicators for other clients eg "Arran is typing..."

## Out of scope
- Auth
- Multiple channels
- DMs
- Persistence of state between server restarts

## Design
 ![Design Guide](/resources/Design.png)

# Getting Started

Check out the code
```
git clone https://github.com/availabl-co/availabl-chat.git
```

Start the server
```
cd availabl-chat
npm install
node index.js
```

Start Web App (In a new terminal)
```
cd chat-client
npm install
npm start
```

Open Multiple Browser Windows
```
http://localhost:3000/
```

# Submitting Your Code
Please submit your code as a zip file via email

Your code should be accompanied by a set of instructions for running the code locally (if different from above)