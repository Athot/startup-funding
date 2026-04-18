import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicationForm from "./pages/ApplicationForm";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicationDetail from "./pages/ApplicationDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route
          path="/dashboard/:applicationID"
          element={<ApplicationDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
