"use client";

import { useState } from "react";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { AdminLayout } from "@/components/admin/AdminLayout";
import AdminDashboard from "./AdminDashboard";

export function ProtectedAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("elite_admin_session");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={handleAuthenticated} />;
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <AdminDashboard />
    </AdminLayout>
  );
}
