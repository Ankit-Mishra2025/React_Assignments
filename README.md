# React CRUD User Management Application

A complete **CRUD (Create, Read, Update, Delete) User Management Application** built with **React**, **Axios**, **React Router**, and **Tailwind CSS**. This project demonstrates fetching, creating, editing, and deleting user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) while maintaining a smooth UI experience.

---

## 🔗 Live Demo
> Add your deployed link here (e.g., Vercel or Netlify)

---

## 🧰 Tech Stack

- **Frontend:** React.js (Functional Components + Hooks)  
- **Routing:** React Router Dom  
- **HTTP Requests:** Axios  
- **Styling:** Tailwind CSS  
- **API:** JSONPlaceholder (Fake REST API for testing)  
- **State Management:** React useState and useEffect hooks  

---

## ⚡ Features

1. **Fetch Users**  
   - Display all users fetched from the API.  
   - Show **Name**, **Email**, and **Phone Number**.  
   - Loading spinner while fetching data.  

2. **Create User**  
   - Add a new user via a form.  
   - Perform a `POST` request to simulate user creation.  
   - Display success message on submission.  

3. **Update User**  
   - Edit user details using a pre-filled form.  
   - Perform a `PUT` request to simulate updating user data.  
   - Navigate back to home or user list after update.  

4. **Delete User**  
   - Delete a user by clicking the **Delete** button.  
   - Perform a `DELETE` request to simulate removal.  
   - UI immediately updates by removing the deleted user.  

5. **Responsive UI**  
   - Mobile and desktop friendly using Tailwind CSS.  

6. **Error Handling**  
   - Display error messages if API requests fail.  

---

## 📁 Project Structure

react-crud-app/
│
├─ public/
├─ src/
│ ├─ Components/
│ │ ├─ FetchUserList.jsx
│ │ ├─ CreateUser.jsx
│ │ ├─ EditUser.jsx
│ │ ├─ DeleteUser.jsx
│ │ └─ Loading.jsx
│ │
│ ├─ App.jsx
│ └─ index.js
│
├─ package.json
└─ tailwind.config.js





## 🚀 Getting Started



### **1. Clone the Repository**



git clone https://github.com/yourusername/react-crud-user.git
cd react-crud-user




### 3. Install Dependencies
npm install


### 4 .🛠 How It Works

Fetching Users

axios.get retrieves all users from JSONPlaceholder.

Users are displayed in a responsive card list.

Creating Users

Form captures name, email, phone.

axios.post simulates creation and displays success.

Updating Users

Pre-filled form gets user data via useParams() and axios.get.

axios.put simulates update.

UI reflects updated information.

Deleting Users

Click Delete → axios.delete is called.

React state (useState) is updated → user removed from UI instantly.


 ## 5 .⚡ Notes

JSONPlaceholder is a fake API → POST, PUT, DELETE requests won't actually modify server data, but the app simulates it perfectly in the UI.

Loading spinner shows while data is fetching.

Error handling is in place for all API requests.

                                                             Author - Ankit Mishra
