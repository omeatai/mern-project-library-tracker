# Mern Project - Library Borrow Tracker App

## Introduction

This is a modern Library Borrow Tracker application built with React, Node, Express and MongoDB by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- Node [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- MongoDB [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
- Tailwindcss [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

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
<summary>6. Create API routes for CREATE AND GET ALL OF USERS AND BOOKS </summary>

# Create API routes for CREATE AND GET ALL OF USERS AND BOOKS

### [https://github.com/omeatai/mern-project-library-tracker/commit/8c1a951d99bddcc22a11e1fa1aa6027af676fa62](https://github.com/omeatai/mern-project-library-tracker/commit/8c1a951d99bddcc22a11e1fa1aa6027af676fa62)

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/979ada54-e519-48d7-97b8-0cd3aaf145dd">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/10661982-1ccb-4523-b682-6b977bc0d269">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/87c41391-e563-42df-9be2-daed098266fe">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/4354266e-c12c-479b-8de5-545e035644f5">
<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/a3f1c470-b518-47a0-883c-9c5de7324f81">

# #End</details>

<details>
<summary>7. Test API routes for CREATE AND GET ALL OF USERS AND BOOKS with POSTMAN</summary>

# Test API routes for CREATE AND GET ALL OF USERS AND BOOKS with POSTMAN

# POST/CREATE USER 

<img width="1360" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/e42d5e66-368c-4c70-be94-fc20ddaf5280">

# GET ALL USERS

<img width="1360" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/1715c083-dbe1-4dda-9150-4d9ded83a191">

# POST/CREATE BOOK

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/151175f6-a417-4547-ac91-bbeb18867af7">

# GET ALL BOOKS

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/3d6b9d0d-c627-487d-b336-6e75d32d10de">

# ATLAS MONGODB

<img width="1187" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/2b531e9f-9e2a-48db-872f-bb9cf357e5e5">

<img width="1186" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5ebe7293-9508-4ee8-bc50-dc2cbc96e4fa">

# #End</details>

<details>
<summary>8. Create API routes for GET BY ID, UPDATE AND DELETE OF USERS AND BOOKS</summary>

# Create API routes for GET BY ID, UPDATE AND DELETE OF USERS AND BOOKS

### [https://github.com/omeatai/mern-project-library-tracker/commit/a247c390a14276a719bf46eea43c177d12daa4f8](https://github.com/omeatai/mern-project-library-tracker/commit/a247c390a14276a719bf46eea43c177d12daa4f8)

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/17c5f437-b47b-4402-9da9-e1a398433d5a">

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/2472e9d0-50bc-4d6b-87a0-de92a86c18fb">

<img width="1024" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/648e90e3-4080-49e0-a3fa-87f16d6721c4">

# #End</details>

<details>
<summary>9. Test API routes for GET BY ID, UPDATE AND DELETE OF USERS AND BOOKS with POSTMAN</summary>

# Test API routes for GET BY ID, UPDATE AND DELETE OF USERS AND BOOKS with POSTMAN

# GET BY ID USER 

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/14e8fa5c-0741-4d2b-ab2f-495d2105501f">

# UPDATE USER 

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/025017bd-3111-4920-b728-b31985daee6f">

# DELETE USER 

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/933d9ebb-cac5-4c83-8651-cba92e7c92c4">

# GET BY ID BOOK

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/f89fb4c6-b1d3-4689-b340-36bd0dd47f82">

# UPDATE BOOK

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ac103251-6b68-4800-b389-83c03c01f1b3">

# DELETE BOOK

<img width="1302" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/baae7f10-cbf9-4bd1-83ec-01852903334a">

# ATLAS MONGODB

<img width="1185" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/188aa66a-e1a6-4026-89c8-eb4e1d51bed2">

# #End</details>

<details>
<summary>10. Setup React App </summary>

# Setup React App

### [https://github.com/omeatai/mern-project-library-tracker/commit/310176864c6713656cda468b99316b41fecf6ef9](https://github.com/omeatai/mern-project-library-tracker/commit/310176864c6713656cda468b99316b41fecf6ef9)

# Start React App

```x
npm run start
```

<img width="1019" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ed214662-6b58-4f43-8c98-7875bdf5e118">
<img width="1019" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/8325106c-c191-4263-b864-93837cd72196">
<img width="1019" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/3367703b-736b-4bb4-aef6-3f29ed5207f7">
<img width="1019" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d23c5ff7-68d5-4678-bb80-50c75b163988">
<img width="1270" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/7ccd46da-1790-4506-8d5c-072c41f5a98b">

# #End</details>

<details>
<summary>11. Setup TailwindCSS </summary>

# Setup TailwindCSS

### [https://github.com/omeatai/mern-project-library-tracker/commit/f380fa1b83a6a2dacdc1149e779a31c625a50129](https://github.com/omeatai/mern-project-library-tracker/commit/f380fa1b83a6a2dacdc1149e779a31c625a50129)

# To Install Bootstrap

```x
npm install bootstrap
```

```x
import "bootstrap/dist/css/bootstrap.min.css"
```

# To install TailwindCSS

```x
npm install -D tailwindcss
npx tailwindcss init
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Run React App

```x
npm run start
```

<img width="1271" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/7e115d66-38f5-48f8-94f3-62af846e1303">
<img width="1025" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5c44c611-ada7-4cd0-bc50-8994a653619c">
<img width="1025" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/dd352271-c8c4-4485-91a8-4feebe353930">
<img width="1025" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/aa7da5bd-0048-4778-8b20-fd0a9a056a88">
<img width="1025" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/23fa87d0-32ce-4c34-a644-b3498f22a9ff">
<img width="1272" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5b93f13d-fe2a-4de2-b44f-3cd8adb6965a">

# #End</details>

<details>
<summary>12. Setup Components and Navbar with React-Router-DOM </summary>

# Setup Components and Navbar with React-Router-DOM

### [https://github.com/omeatai/mern-project-library-tracker/commit/dfc1332121c455368d85edc05944de0fa90a8fb5](https://github.com/omeatai/mern-project-library-tracker/commit/dfc1332121c455368d85edc05944de0fa90a8fb5)

# Install React-Router-DOM

```x
npm install react-router-dom
```

# Install React Headless UI 

```x
npm install @headlessui/react
```

<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d17dd0e6-d416-4f91-8f14-b11d7f7cd9d5">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d80783e6-791b-466c-a6aa-d4664259951f">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/4fadf25d-5104-4503-bc4b-e65870a16611">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/bd1cff55-a1c2-4922-807a-53442430b3f1">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/f6d1e989-cd20-4a8c-9550-74530bbb657a">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/7e80d7ea-1ac5-414f-a6ee-08034cda8951">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/157b0fb4-abd2-4c9e-a482-49757ebcd77d">
<img width="1027" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/c168c7b1-a7c7-4ac8-9743-6901eced4548">
<img width="1168" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ea95bbcc-6ad2-442e-8244-4b0f00c8953b">
<img width="1168" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d269988e-ca32-4ca6-a3af-79b2c1b8b789">


# #End</details>















