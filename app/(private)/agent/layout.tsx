"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";

type ButtonVariant =
  | "default"
  | "destructive"
  | "link"
  | "outline"
  | "secondary"
  | "ghost";

export default function AgentDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectDashboard, setselectDashboard] = useState("bg-blue-600");
  const [selectReports, setSelectReports] = useState("");
  const [selectAccounts, setselectAccounts] = useState(
    "bg-white text-slate-800",
  );
  const [selectTasks, setselectTasks] = useState("bg-white text-slate-800");
  const { user, logout } = useAuth();
  return (
    <div className="flex">
      <aside className="min-h-screen w-60 flex flex-col justify-between p-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/default_profile_image.png"
              alt="profile-picture"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-sm text-slate-600">Welcome back,</p>
            <h2 className="text-lg font-semibold">{user?.name}</h2>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/agent">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectDashboard} ${selectDashboard}`}
                onClick={() => {
                  setselectDashboard("bg-blue-600");
                  setSelectReports("bg-white text-slate-800");
                  setselectAccounts("bg-white text-slate-800");
                  setselectTasks("bg-white text-slate-800");
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/agent/callreport ">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectReports} ${selectReports}`}
                onClick={() => {
                  setselectDashboard("bg-white text-slate-800");
                  setSelectReports("bg-blue-600");
                  setselectAccounts("bg-white text-slate-800");
                  setselectTasks("bg-white text-slate-800");
                }}
              >
                Reports
              </Button>
            </Link>
            <Link href="/agent/accounts">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectAccounts} ${selectAccounts}`}
                onClick={() => {
                  setselectDashboard("bg-white text-slate-800");
                  setSelectReports("bg-white text-slate-800");
                  setselectAccounts("bg-blue-600");
                  setselectTasks("bg-white text-slate-800");
                }}
              >
                Accounts
              </Button>
            </Link>
            <Link href="/agent/tools">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectTasks} ${selectTasks}`}
                onClick={() => {
                  setselectDashboard("bg-white text-slate-800");
                  setSelectReports("bg-white text-slate-800");
                  setselectAccounts("bg-white text-slate-800");
                  setselectTasks("bg-blue-600");
                }}
              >
                Notification
              </Button>
            </Link>
          </div>
        </div>

        <Link href="/auth/login" className="h-30 flex flex-col gap-5 ">
          <Button
            className="w-full rounded-full cursor-pointer"
            onClick={logout}
          >
            Log out
          </Button>
        </Link>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
}
