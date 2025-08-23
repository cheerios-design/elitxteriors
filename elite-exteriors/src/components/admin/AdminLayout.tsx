"use client";

import { useState, useEffect } from "react";
import "../../styles/admin-dashboard.css";
import {
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  User,
  Shield,
  Bell,
  Home,
  Menu,
  X,
  Zap,
  Activity,
  TrendingUp,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export function AdminLayout({ children, onLogout }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState("dashboard");

  // Update time every second for live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navigationItems = [
    {
      name: "Dashboard",
      id: "dashboard",
      icon: BarChart3,
      gradient: "from-blue-500 to-purple-600",
      current: activeSection === "dashboard",
    },
    {
      name: "Comments",
      id: "comments",
      icon: MessageSquare,
      gradient: "from-green-500 to-teal-600",
      current: activeSection === "comments",
    },
    {
      name: "Analytics",
      id: "analytics",
      icon: TrendingUp,
      gradient: "from-orange-500 to-pink-600",
      current: activeSection === "analytics",
    },
    {
      name: "Settings",
      id: "settings",
      icon: Settings,
      gradient: "from-gray-500 to-slate-600",
      current: activeSection === "settings",
    },
  ];

  const quickStats = [
    {
      label: "Active Users",
      value: "1,247",
      change: "+12%",
      color: "text-green-500",
    },
    {
      label: "Comments Today",
      value: "89",
      change: "+5%",
      color: "text-blue-500",
    },
    {
      label: "Engagement",
      value: "94%",
      change: "+8%",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Modern Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-all duration-500 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl">
          {/* Header Section */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Elite Admin</h1>
                  <p className="text-sm text-white/70">Dashboard v2.0</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Live Clock */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {currentTime.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
                <div className="text-sm text-white/70">
                  {currentTime.toLocaleDateString([], {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`group w-full flex items-center justify-between p-4 text-left rounded-xl transition-all duration-300 hover:scale-105 ${
                    item.current
                      ? "bg-white/20 backdrop-blur-sm text-white shadow-lg border border-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} shadow-lg`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.current && (
                    <ChevronRight className="h-4 w-4 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 space-y-3">
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
              Quick Stats
            </h3>
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white">Elite Admin</p>
                <p className="text-xs text-white/70 truncate">
                  info@elitexteriorsva.com
                </p>
              </div>
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() =>
                  window.open("https://www.elitexteriorsva.com", "_blank")
                }
                className="flex items-center justify-center px-3 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:scale-105"
              >
                <Home className="h-4 w-4 mr-2" />
                Website
              </button>

              <button
                onClick={onLogout}
                className="flex items-center justify-center px-3 py-2 text-sm text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-all hover:scale-105"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-72">
        {/* Top Navigation Bar */}
        <div className="bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="h-20 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-blue-400" />
                  Elite Exteriors Dashboard
                </h2>
                <p className="text-sm text-white/70">
                  Welcome back! Here&apos;s what&apos;s happening today.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Live Status Indicator */}
              <div className="hidden md:flex items-center space-x-2 px-3 py-2 bg-green-500/20 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-300 font-medium">
                  System Online
                </span>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                  <Bell className="h-5 w-5" />
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
              </div>

              {/* Quick Action Button */}
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
                <Zap className="h-4 w-4" />
                <span>Quick Action</span>
              </button>

              {/* Profile */}
              <div className="relative">
                <button className="flex items-center space-x-3 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">
                    Admin
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content with Animations */}
        <main className="p-6">
          <div className="admin-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
}
