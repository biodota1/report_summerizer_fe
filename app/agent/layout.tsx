"use client";
import Link from "next/link";
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
  const [selectDashboard, setselectDashboard] =
    useState<ButtonVariant>("default");
  const [selectAccounts, setselectAccounts] = useState<ButtonVariant>("ghost");
  const [selectTasks, setselectTasks] = useState<ButtonVariant>("ghost");
  const { user, logout } = useAuth();
  return (
    <div className="flex ">
      <aside className="min-h-screen w-60 flex  flex-col p-4">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-2xl font-bold">MYREPORT</h1>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">GENERAL</h2>
            <Link href="/dashboard/agent/">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectDashboard}
                onClick={() => {
                  setselectDashboard("default");
                  setselectAccounts("ghost");
                  setselectTasks("ghost");
                }}
              >
                Dashboard
              </Button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">USER</h2>
            <Link href="/dashboard/agent/accounts">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectAccounts}
                onClick={() => {
                  setselectDashboard("ghost");
                  setselectAccounts("default");
                  setselectTasks("ghost");
                }}
              >
                Accounts
              </Button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">TOOLS</h2>
            <Link href="/dashboard/agent/tools">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectTasks}
                onClick={() => {
                  setselectDashboard("ghost");
                  setselectAccounts("ghost");
                  setselectTasks("default");
                }}
              >
                Notification
              </Button>
            </Link>
          </div>
        </div>

        <div className="h-30 flex flex-col gap-5">
          <h3 className="font-semibold text-md">{user?.email}</h3>
          <Link href="/auth/login">
            <Button className="w-full" onClick={logout}>
              Log out
            </Button>
          </Link>
        </div>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
}
