import type { Metadata } from "next";
import { ProtectedAdminPage } from "./ProtectedAdminPage";

export const metadata: Metadata = {
  title: "Admin Dashboard | Elite Exteriors",
  description: "Moderate blog comments and manage website interactions",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <ProtectedAdminPage />;
}
