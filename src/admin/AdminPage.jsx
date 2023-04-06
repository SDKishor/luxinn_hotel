import React from "react";
import { Admin_Sidebar } from "./Admin_Sidebar";
import { Admin_Header } from "./Admin_Header";
import { Outlet } from "react-router-dom";

export const AdminPage = () => {
  return (
    <>
      <Admin_Header />
      <div className="flex w-full">
        <Admin_Sidebar />
        <Outlet />
      </div>
    </>
  );
};
