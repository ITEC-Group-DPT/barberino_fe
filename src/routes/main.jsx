import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "layout/home";
import AdminRoutes from "routes/admin";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
