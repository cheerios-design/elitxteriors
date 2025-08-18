import type { Metadata } from "next";
import { AdminDashboard } from "./AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | Elite Exteriors",
  description: "Moderate blog comments and manage website interactions",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
    </div>
  );
}
