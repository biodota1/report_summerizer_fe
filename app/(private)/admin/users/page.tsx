"use client";

import { DataTable } from "../components/tables/data-table";
import { userColumns } from "../components/tables/user-columns";
import { User } from "../components/tables/types";
import { apiFetch } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Users() {
  const queryClient = useQueryClient();

  // 1️⃣ Fetch users (apiFetch already returns JSON)
  const fetchUsers = async (): Promise<User[]> => {
    return apiFetch("/user/all");
  };

  // 2️⃣ Query users
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // 3️⃣ Delete mutation
  const deleteUserMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiFetch(`/user/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err: any) => {
      console.error("Error deleting user:", err);
    },
  });

  // 4️⃣ Delete handler
  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    deleteUserMutation.mutate(id);
  };

  // 5️⃣ Loading / Error UI
  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error loading users</p>;

  return (
    <div className="w-full p-16 flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Users</h2>

      <div className="flex gap-10">
        <div className="h-[100px] w-[200px] border border-slate-500 shadow-lg rounded-lg flex flex-col justify-center items-center">
          <p className="text-4xl text-blue-600 font-bold">{users.length}</p>
          <h3 className="text-sm text-slate-400 font-bold">Total Users</h3>
        </div>

        <div className="h-[100px] w-[200px] border border-slate-500 shadow-lg rounded-lg flex flex-col justify-center items-center">
          <p className="text-4xl text-blue-600 font-bold">
            {users.filter((u) => u.status === "active").length}
          </p>
          <h3 className="text-sm text-slate-400 font-bold">Active Users</h3>
        </div>
      </div>

      <DataTable columns={userColumns(handleDelete)} data={users} />
    </div>
  );
}
