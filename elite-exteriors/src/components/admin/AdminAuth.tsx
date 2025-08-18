"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, Shield, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

interface AdminAuthProps {
  onAuthenticated: () => void;
}

const ADMIN_CREDENTIALS = {
  email: "info@elitexteriorsva.com",
  username: "elite_exteriors_va",
  password: "EliteVA23320",
};

const AUTH_SESSION_KEY = "elite_admin_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function AdminAuth({ onAuthenticated }: AdminAuthProps) {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check for existing session on component mount
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const session = localStorage.getItem(AUTH_SESSION_KEY);
        if (session) {
          const sessionData = JSON.parse(session);
          const now = Date.now();

          // Check if session is still valid
          if (sessionData.expiry > now) {
            onAuthenticated();
            return;
          } else {
            // Session expired, remove it
            localStorage.removeItem(AUTH_SESSION_KEY);
          }
        }
      } catch (error) {
        console.error("Error checking session:", error);
        localStorage.removeItem(AUTH_SESSION_KEY);
      }
    };

    checkExistingSession();
  }, [onAuthenticated]);

  const createSession = () => {
    const sessionData = {
      authenticated: true,
      expiry: Date.now() + SESSION_DURATION,
      timestamp: Date.now(),
    };

    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(sessionData));
  };

  const validateCredentials = (login: string, password: string): boolean => {
    const trimmedLogin = login.trim().toLowerCase();
    const trimmedPassword = password.trim();

    return (
      (trimmedLogin === ADMIN_CREDENTIALS.email.toLowerCase() ||
        trimmedLogin === ADMIN_CREDENTIALS.username.toLowerCase()) &&
      trimmedPassword === ADMIN_CREDENTIALS.password
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Simulate a brief delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (!formData.login || !formData.password) {
        setError("Please enter both username/email and password");
        return;
      }

      if (validateCredentials(formData.login, formData.password)) {
        createSession();
        toast.success("Successfully authenticated!", {
          icon: "🔓",
          duration: 2000,
        });
        onAuthenticated();
      } else {
        setError(
          "Invalid credentials. Please check your username/email and password."
        );
        toast.error("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("An unexpected error occurred. Please try again.");
      toast.error("Authentication error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
          <CardDescription>
            Enter your credentials to access the Elite Exteriors admin dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Username or Email</Label>
              <Input
                id="login"
                type="text"
                placeholder="Enter username or email"
                value={formData.login}
                onChange={(e) => handleInputChange("login", e.target.value)}
                disabled={loading}
                className={error ? "border-red-500 focus:border-red-500" : ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  disabled={loading}
                  className={`pr-10 ${
                    error ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-md">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                "Access Dashboard"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Secure access to Elite Exteriors admin panel</p>
            <p className="text-xs mt-1">Session expires after 24 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
