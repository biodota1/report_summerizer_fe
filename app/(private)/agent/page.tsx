"use client";
import { useState, useEffect } from "react";

import Dashboard from "./components/dashboard";

export default function Home() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString()); // e.g., 11/26/2025
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-10">
      <h1 className="text-right text-3xl font-semibold">{date}, Team Alpha </h1>

      <Dashboard />
    </div>
  );
}
