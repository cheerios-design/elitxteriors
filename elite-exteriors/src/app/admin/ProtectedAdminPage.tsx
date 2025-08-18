"use client";

import { useState } from "react";
import { AdminAuth } from "@/components/admin/AdminAuth";
import { AdminDashboard } from "./AdminDashboard";

export function ProtectedAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
    </div>
  );
}
