import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import App from "./App"; // Assuming App is your protected component
import Task from "./TaskManagement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app/*" element={<App />} /> {/* Protected route */}
      <Route path="/task" element={<Task />} />
    </Routes>
  );
};

export default AppRoutes;
