"use client";

import { useEffect, useState } from "react";
import { DataTable } from "../components/tables/data-table";
import { reportColumns } from "../components/tables/report-columns";
import { Report } from "../components/tables/types";
import { apiFetch } from "@/lib/api";

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiFetch("/report/all");
        setReports(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="w-full p-16 flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Reports</h2>
      <div className="flex gap-10">
        <div className="h-[100px] w-[200px] border border-slate-500 shadow-lg rounded-lg flex flex-col justify-center items-center">
          <p className="text-4xl text-blue-600 font-bold">{reports.length}</p>
          <h3 className="text-sm text-slate-400 font-bold">Total Reports</h3>
        </div>
      </div>
      <DataTable columns={reportColumns()} data={reports} />
    </div>
  );
}
