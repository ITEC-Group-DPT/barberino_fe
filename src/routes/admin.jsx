import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (!isLogin && location.pathname !== "/admin/authentication") {
      navigate("authentication", { replace: true });
    }
  }, [location]);

  return (
    <Routes>
      {isLogin !== true && (
        <Route element={<WithoutNav />}>
          <Route path="authentication" element={<Authentication />} />
        </Route>
      )}
      {isLogin && (
        <Route element={<WithNav />}>
          <Route index element={<Dashboard />} />
          <Route path="document" element={<DocumentList />} />
        </Route>
      )}
    </Routes>
  );
};

export default AdminRoutes;
