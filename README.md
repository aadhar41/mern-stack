# MERN Stack Project

This is a full-stack web application built using the MERN stack:

- **MongoDB** – NoSQL database for storing application data
- **Express.js** – Backend web framework for Node.js
- **React.js** – Frontend library for building user interfaces
- **Node.js** – JavaScript runtime for the backend
## Screenshots

Below are example screens from the [`public/pages`](https://github.com/aadhar41/mern-stack/tree/master/public/pages) directory of the project:

### 1. Home Page (`home.html`)
![Home Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/home-page.png)

### 2. About Page (`about.html`)
![About Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/about-page.png)

### 3. Services Page (`services.html`)
![Services Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/services-page.png)

### 4. Portfolio Page (`portfolio.html`)
![Portfolio Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/portfolio-page.png)

### 5. Team Page (`team.html`)
![Team Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/team-page.png)

### 6. Contact Us Page (`contactus.html`)
![Contact Us Page](https://github.com/aadhar41/mern-stack/blob/master/public/pages/contactus-page.png)



> **Note:** The above screenshots are for illustration. For the latest UI and code, refer to the [`public/pages`](https://github.com/aadhar41/mern-stack/tree/master/public/pages) directory in the repository.

---
---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd my-project
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start MongoDB** (if running locally):
    ```bash
    mongod
    ```

2. **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```

3. **Start the frontend React app:**
    ```bash
    cd ../frontend
    npm start
    ```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:5000](http://localhost:5000).

---

## Project Structure

```
my-project/
  backend/      # Express.js API and server code
  frontend/     # React.js application
  README.md
```

---

## Scripts

### Backend

- `npm start` – Start the backend server
- `npm run dev` – Start backend with nodemon for development

### Frontend

- `npm start` – Start the React development server
- `npm run build` – Build the React app for production

---

## License

This project is licensed under the MIT License.

---

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)