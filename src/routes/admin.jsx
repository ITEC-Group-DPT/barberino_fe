import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "layout/dashboard";
import Authentication from "layout/authentication";
import LeftNav from "component/leftNav/leftNav";
import DocumentList from "layout/documentList";

const WithNav = () => (
  <>
    <LeftNav />
    <Outlet />
  </>
);

const WithoutNav = () => <Outlet />;

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<WithoutNav />}>
        <Route path="authentication" element={<Authentication />} />
      </Route>

      <Route element={<WithNav />}>
        <Route index element={<Dashboard />} />
        <Route path="document" element={<DocumentList />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
