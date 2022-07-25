import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "layout/dashboard";
import Authentication from "layout/authentication";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="authentication" element={<Authentication />} />
    </Routes>
  );
};

export default AdminRoutes;
