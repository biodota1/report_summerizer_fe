"use client";

import { useState, useEffect } from "react";
import { DataTable } from "./components/tables/data-table";
import { apiFetch } from "@/lib/api";
import { userColumns } from "./components/tables/user-columns";
import { User } from "./components/tables/types";

export default function Home() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString()); // e.g., 11/26/2025
  }, []);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiFetch("/user/all");
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await apiFetch(`/user/user/${id}`, { method: "DELETE" });
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-10">
      <div className="container mx-auto py-10"></div>
    </div>
  );
}
