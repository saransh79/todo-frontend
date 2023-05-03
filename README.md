# MERN Todo List App

This is a simple MERN stack todo list app with CRUD operations using MongoDB. The app is fully responsive with a beautiful user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create new todos
- Read existing todos
- Update existing todos
- Delete existing todos

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- HTML
- CSS
- Javascript
- Netlify (for frontend deployment)
- Render (for backend deployment)

## Installation and Setup

1. Clone the repository.

```
git clone https://github.com/saransh79/todo-frontend.git
```

2. Change the working directory to the repository directory.

```
cd todo-frontend
```

3. Install the dependencies.

```
npm install
```

4. Create a `.env` file in the root directory of the project and add the following lines to it:

```
PORT=5000
MONGO_URI=<your-mongodb-uri>
```

5. Start the server.

```
npm run server
```

6. Open a new terminal window, change the working directory to the repository directory and start the client.

```
cd todo-frontend
npm run client
```

7. The app should now be running on `http://localhost:3000`.

## Usage

You can use the app to add new todos, mark them as complete or incomplete, edit the existing todos, and delete them. The app also displays the total number of todos and the number of completed todos.

## Contributing

Contributions are always welcome! If you find any issues with the app or want to suggest an improvement, please create a new issue or a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
