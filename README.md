# Mern Project - Library Borrow Tracker App

## Introduction

This is a modern Library Borrow Tracker application built with React, Node, Express and MongoDB by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- Node [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- MongoDB [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)

## Demo

## Project Steps (Tutorial)

<details>
<summary>1. Create React App</summary>

# Create React App

### [https://github.com/omeatai/mern-library-tracker/commit/b450864d806dd7394e99b0068e7fa13dc7801c6e](https://github.com/omeatai/mern-library-tracker/commit/b450864d806dd7394e99b0068e7fa13dc7801c6e)

```x
yarn create react-app .
```

<img width="1101" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/9d3685f6-d603-4151-8fb8-ab0bdf70dbb5">

# #End</details>

<details>
<summary>2. Install Dependencies for Backend </summary>

# Install Dependencies for Backend

### [https://github.com/omeatai/mern-project-library-tracker/commit/2d613a6a2ab200f6481cdc7af8e3a6532264557a](https://github.com/omeatai/mern-project-library-tracker/commit/2d613a6a2ab200f6481cdc7af8e3a6532264557a)

# Create Backend Folder

```x
mkdir backend
cd backend
```

# Intialise npm

```x
npm init -y
```

# Install Dependencies for backend (Express, Mongoose, Cross-Origin-Resource-Sharing and DotENV)

```x
npm install express mongoose cors dotenv
yarn add express mongoose cors dotenv
```

# Install Nodemon

```x
sudo npm install -g nodemon
```

<img width="1101" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/bc7e1c78-d24d-45fe-ac5c-129414028c6c">
<img width="1101" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/a5cf7b43-8f8a-41d6-8ec6-4b83224c6c6f">

# #End</details>

<details>
<summary>3. Create Backend Server </summary>

# Create Backend Server

### [https://github.com/omeatai/mern-project-library-tracker/commit/3a9652e5f33d3e4e129692bbadc9d50888a86b5c](https://github.com/omeatai/mern-project-library-tracker/commit/3a9652e5f33d3e4e129692bbadc9d50888a86b5c)

# Start Server

```x
cd backend
nodemon server.js
```

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/a5f3af93-3a79-444b-b957-c7e9ea337a88">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ed4c30ee-e6db-4550-9c3f-a0008a5d627f">

# #End</details>

<details>
<summary>4. Connect to MongoDB Database with Mongoose </summary>

# Connect to MongoDB Database with Mongoose

### [https://github.com/omeatai/mern-project-library-tracker/commit/d7a5b66d79d926cf26bffd72e2f62a55d78888a7](https://github.com/omeatai/mern-project-library-tracker/commit/d7a5b66d79d926cf26bffd72e2f62a55d78888a7)

<img width="1187" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d7b1562f-31a9-4d12-8565-f29e4e18a19f">
<img width="1187" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/de394043-4a5a-4b86-a701-f5b8d0194b05">
<img width="1187" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/b3e4a538-9a26-42f7-85ec-40989d82b29f">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/021a0f83-a529-43a1-ba7b-655e6cc72d7a">
<img width="1024" alt="Screenshot 2023-11-13 at 7 32 33 AM" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/c7dbddd8-4152-4d7a-859d-92fa7fe1364f">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/37a2052d-be9d-4589-8ce4-27408ab6cd5a">

# #End</details>

<details>
<summary>5. Create Mongoose Models and Schema </summary>

# Create Mongoose Models and Schema

### [https://github.com/omeatai/mern-project-library-tracker/commit/c30a97574a110c9936e635700fe85c322645bdd4](https://github.com/omeatai/mern-project-library-tracker/commit/c30a97574a110c9936e635700fe85c322645bdd4)

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5767d9f9-49bb-499a-9f69-64d654f265aa">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/01a994c2-dcee-43be-81bf-46ea28cb35d7">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/cb1729f1-9559-4011-9b49-826daefc4270">

# #End</details>

<details>
<summary>6. Create API routes for CREATE AND GET USERS </summary>

# Create API routes for CREATE AND GET USERS

### [https://github.com/omeatai/mern-project-library-tracker/commit/8c1a951d99bddcc22a11e1fa1aa6027af676fa62](https://github.com/omeatai/mern-project-library-tracker/commit/8c1a951d99bddcc22a11e1fa1aa6027af676fa62)

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/979ada54-e519-48d7-97b8-0cd3aaf145dd">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/10661982-1ccb-4523-b682-6b977bc0d269">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/87c41391-e563-42df-9be2-daed098266fe">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/4354266e-c12c-479b-8de5-545e035644f5">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/a3f1c470-b518-47a0-883c-9c5de7324f81">

# #End</details>

<details>
<summary>7. Test API routes for CREATE AND GET USERS with POSTMAN</summary>

# TEST API routes for CREATE AND GET USERS with POSTMAN


# #End</details>















