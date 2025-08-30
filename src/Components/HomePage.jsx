import React from "react";

const HomePage = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto bg-blue-100 rounded-2xl mt-5 mx-auto">
      <h1 className="text-3xl font-1rem mb-5 text-center text-amber-800">
        🎯CRUD Project - User Management App
      </h1>

      <p className="mb-3 text-lg font-semibold">
        This project demonstrates a full CRUD (Create, Read, Update, Delete)
        functionality using React, Axios, and JSONPlaceholder API. It allows
        users to:
      </p>

      <ul className="list-disc ml-5 mb-3">
        <li>✅ Fetch and display a list of users dynamically.</li>
        <li>✅ Create new users with live form validation and feedback.</li>
        <li>✅ Update/Edit existing users with pre-filled data.</li>
        <li>✅ Delete users with confirmation and simulated API calls.</li>
      </ul>

      <p className="mb-3 text-lg text-black-400 font-semibold">The project highlights:</p>

      <ul className="list-disc ml-5">
        <li>💡 React Hooks: useState, useEffect, useNavigate, useParams</li>
        <li>💡 Axios: Handling GET, POST, PUT, DELETE requests</li>
        <li>💡 Routing: React Router DOM for navigation</li>
        <li>
          💡 UX: Loading states, form validation, alerts for success/error
        </li>
      </ul>

      <p className="mt-5 text-lg font-semibold">
        This project showcases my ability to build interactive, real-world
        applications and handle dynamic data operations efficiently.
      </p>
    </div>
  );
};

export default HomePage;
