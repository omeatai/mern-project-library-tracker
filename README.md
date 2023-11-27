# Mern Project - Library Borrow Tracker App

## Introduction

This is a modern Library Borrow Tracker application built with React, Node, Express and MongoDB by Ifeanyi Omeata.

## Development Tools/Stack

- React [https://react.dev/](https://react.dev/)
- Node [https://nodejs.org/en/](https://nodejs.org/en/)
- Express [https://expressjs.com/](https://expressjs.com/)
- MongoDB [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
- Tailwindcss [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
- React-Toastify [https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
- Date-fns [https://date-fns.org/docs/Getting-Started](https://date-fns.org/docs/Getting-Started)
- Lodash [https://lodash.com/](https://lodash.com/)
- Axios [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

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

<details>
<summary>13. Setup React Context API States and Components </summary>

# Setup React Context API States and Components

### [https://github.com/omeatai/mern-project-library-tracker/commit/ea7830b06d2d95e24926cefadd141e72ae68d5c2](https://github.com/omeatai/mern-project-library-tracker/commit/ea7830b06d2d95e24926cefadd141e72ae68d5c2)

# Install Material UI

```x
npm install @mui/material @emotion/react @emotion/styled
yarn add @mui/material @emotion/react @emotion/styled
```

# Install React MUI Date Picker

```x
npm install @mui/x-date-pickers
npm install dayjs

yarn add @mui/x-date-pickers
yarn add dayjs
```

# Install Date-FNS

```x
npm install date-fns
```

<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d87396f7-a3fd-4cae-b442-be8402d92f0a">
<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5d46bff8-259a-421b-ba35-09c858b8e399">
<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/fc574d18-8065-45d5-bcf4-bf39daa9ad1d">
<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/15bfbf22-869e-4090-af9c-6b2b76013feb">
<img width="1252" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/4d9fe7f5-7d2e-4897-ae89-ae0ba28c3725">
<img width="1217" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/14e3caee-7dba-45ca-9e8f-9cdc32ed6216">
<img width="1217" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/022c1186-5ba7-4335-a3e7-c20984b4687d">
<img width="1217" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ad24992f-3fc6-4cd3-a842-547014413ddf">

# #End</details>

<details>
<summary>14. Create Book Component - Adjust ReturnDate based on Duration </summary>

# Adjust ReturnDate based on Duration 

### [https://github.com/omeatai/mern-project-library-tracker/commit/faf671648f1d55940ffcab4b4c1fa330f66d4d9b](https://github.com/omeatai/mern-project-library-tracker/commit/faf671648f1d55940ffcab4b4c1fa330f66d4d9b)

<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/786bc2d7-6d68-4a43-9f92-5d42b7b7e8f7">
<img width="1215" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/756fd3de-cb79-4f73-9b59-26783b54d60e">

# #End</details>

<details>
<summary>15. Create User Component - Setup Create User Logic </summary>

# Create User Component - Setup Create User Logic

### [https://github.com/omeatai/mern-project-library-tracker/commit/ec471988fcbd407d1d7847b842e0c3581117cf14](https://github.com/omeatai/mern-project-library-tracker/commit/ec471988fcbd407d1d7847b842e0c3581117cf14)

# Install Lodash

```x
npm i --save lodash
```

# Install Axios

```x
npm i axios
```

# Install Toastify

```x
npm install --save react-toastify
yarn add react-toastify
```

<img width="1297" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/cf89c333-34df-4037-bf61-4102ee80c730">
<img width="1297" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/b30ba7ba-fd5a-4b53-ad86-b933c9f5e1b3">
<img width="1297" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/5c307b62-aa50-4944-958f-4b31b2148bb2">
<img width="1297" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/560f8b7a-9908-43a5-8546-5e0d39e53b14">
<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/705dfdbb-e1c7-418d-b5d4-cd329cefa7e9">
<img width="1011" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/92d5dd87-13d6-4703-894e-4c36f4a4fb0c">
<img width="1299" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/69a7e3a8-b7e2-4e85-97e5-28a556e1e74b">
<img width="1299" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/605db3a5-e43a-4805-9ccb-d264feaac3b8">
<img width="1299" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/559d620d-6d9f-42c2-bd06-03541773c1f2">
<img width="1250" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/3e308d91-1e7d-4f1c-b829-857ecea9b698">
<img width="1290" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/28aa53dd-7e81-43fe-a602-ea7c2727ff74">

# #End</details>

<details>
<summary>16. Create Book Component - Setup Create Book Logic </summary>

# Create Book Component - Setup Create Book Logic

### [https://github.com/omeatai/mern-project-library-tracker/commit/25f11b356a3f4faf96445a9e91f22e9757be4e56](https://github.com/omeatai/mern-project-library-tracker/commit/25f11b356a3f4faf96445a9e91f22e9757be4e56)

<img width="1010" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/dab881e0-e0f5-431c-be52-6043335b4c9c">
<img width="1010" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/0fab3573-12a7-4d21-972e-b766b093cfa7">
<img width="1298" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/d95472c8-c756-42c9-98ab-a52fbcacad8c">
<img width="1038" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/f36bda88-40d6-495e-b934-7fb8b4af6277">
<img width="1298" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/c06caec3-c377-4ba4-ac68-1e796a7bf2ce">
<img width="1298" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ab3d97ff-bf00-426c-bf27-e951f0d8f995">
<img width="1251" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/78d1a19d-cbbf-469b-81f2-9c90e976268e">
<img width="1297" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/0d3d2a71-0c8d-4b7d-a283-928811f5a4e4">

# #End</details>

<details>
<summary>17. List Book Component - Setup List Book Logic </summary>

# List Book Component - Setup List Book Logic

### [https://github.com/omeatai/mern-project-library-tracker/commit/f15def9c91248b8debb161eb8c43a4a30a4ca4db](https://github.com/omeatai/mern-project-library-tracker/commit/f15def9c91248b8debb161eb8c43a4a30a4ca4db)

### [https://github.com/omeatai/mern-project-library-tracker/commit/9d0ccf965dd65bc498a752e87bbae7cb6fe6d30e](https://github.com/omeatai/mern-project-library-tracker/commit/9d0ccf965dd65bc498a752e87bbae7cb6fe6d30e)

<img width="1008" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/416d8c49-ae7e-4c0f-ba49-a23614127232">
<img width="1371" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/3be27b09-58ce-479b-91b7-182a51edfbf1">
<img width="1371" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/846de0e7-b367-41ae-81c2-7a702857b8e6">
<img width="1371" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/2c57425d-e9b7-453e-87d5-65b484b66c69">

# #End</details>

<details>
<summary>18. List Book Component - Setup Delete Book Logic </summary>

# List Book Component - Setup Delete Book Logic

### [https://github.com/omeatai/mern-project-library-tracker/commit/a0bc82e6013fcc4ac631be52c8fa3ab6171f5bdf](https://github.com/omeatai/mern-project-library-tracker/commit/a0bc82e6013fcc4ac631be52c8fa3ab6171f5bdf)

<img width="1008" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/6453f657-c4a5-43ae-ac76-b193be97fcfd">
<img width="1008" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/b27eaaba-60bf-48c8-bfbd-79690fecc53b">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/ccdab27a-6614-4ead-968d-f6c0c4bba43e">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/c9b2165e-05cf-4d29-8219-db22f21b0c2f">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/0b88e886-afb2-40a8-b1de-1159c3759397">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/cb263df5-ef75-43da-a891-37f52bd04ae1">

# #End</details>

<details>
<summary>19. Edit Book Component - Setup Edit Book Logic </summary>

# Edit Book Component - Setup Edit Book Logic

### [https://github.com/omeatai/mern-project-library-tracker/commit/427d31476fecd7de54e21d5e0bf3e31455691dd5](https://github.com/omeatai/mern-project-library-tracker/commit/427d31476fecd7de54e21d5e0bf3e31455691dd5)

<img width="1008" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/74bf2d6e-6088-4697-8aa2-d3212bb6afba">
<img width="1008" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/2e0722fb-5961-4dcc-a7d6-81735387502f">
<img width="1243" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/9f5a2f6c-1c87-493b-ac97-1379922da2f2">
<img width="1247" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/1017020a-4dc9-4372-ae49-8d191e554f3e">
<img width="1245" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/e78a7eb7-5edd-47f2-aab0-74a725c5fbd4">

# #End</details>

<details>
<summary>20. List User Component - Setup List and Delete User Logic </summary>

# List User Component - Setup List and Delete User Logic 

### [https://github.com/omeatai/mern-project-library-tracker/commit/4c85ef05795fbd2a71f89cc8af4a0b44c611ae62](https://github.com/omeatai/mern-project-library-tracker/commit/4c85ef05795fbd2a71f89cc8af4a0b44c611ae62)

<img width="1010" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/e47faf9f-47e0-451a-89a3-b719338e7482">
<img width="1010" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/560d4414-22c3-425f-9227-3c1ac051e691">
<img width="1267" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/8f909896-fee4-4cd5-bbb0-a2b24a07d240">

# #End</details>

<details>
<summary>21. Edit User Component - Setup Edit User Logic </summary>

# Edit User Component - Setup Edit User Logic 

### [https://github.com/omeatai/mern-project-library-tracker/commit/01b0963d5107d8d4bc052a7b53f928b6f6c72cc2](https://github.com/omeatai/mern-project-library-tracker/commit/01b0963d5107d8d4bc052a7b53f928b6f6c72cc2)

<img width="1148" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/7ca61773-5c95-478d-aa1a-b7110cb84089">
<img width="1148" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/e898d6fb-5137-494b-a3cd-489ce696cc6c">
<img width="1306" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/888f0127-9246-4bb1-8303-54d56f31db2a">
<img width="1306" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/863c7f08-08ca-45c7-837e-08f98a16340a">
<img width="1306" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/70c6fa44-856a-4c18-a848-805ba258d4a7">
<img width="1251" alt="image" src="https://github.com/omeatai/mern-project-library-tracker/assets/32337103/63238774-ac79-47e5-9947-e34175fc6eea">

# #End</details>















