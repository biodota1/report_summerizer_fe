"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";

/* ✅ Button variant type */
type ButtonVariant =
  | "default"
  | "destructive"
  | "link"
  | "outline"
  | "secondary"
  | "ghost";

/* ✅ Variant list (if you need runtime checking later) */
const buttonVariants: readonly ButtonVariant[] = [
  "default",
  "destructive",
  "link",
  "outline",
  "secondary",
  "ghost",
] as const;

export default function AgentDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [selectDashboard, setSelectDashboard] =
    useState<ButtonVariant>("default");
  const [selectAccounts, setSelectAccounts] = useState<ButtonVariant>("ghost");
  const [selectTasks, setSelectTasks] = useState<ButtonVariant>("ghost");

  const { user, logout } = useAuth();

  return (
    <div className="flex">
      <aside className="min-h-screen w-60 flex flex-col p-4">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-2xl font-bold">MYREPORT</h1>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">GENERAL</h2>
            <Link href="/admin/">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectDashboard}
                onClick={() => {
                  setSelectDashboard("default");
                  setSelectAccounts("ghost");
                  setSelectTasks("ghost");
                }}
              >
                Dashboard
              </Button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">USER</h2>
            <Link href="/admin/accounts">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectAccounts}
                onClick={() => {
                  setSelectDashboard("ghost");
                  setSelectAccounts("default");
                  setSelectTasks("ghost");
                }}
              >
                Accounts
              </Button>
            </Link>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-gray-400">TOOLS</h2>
            <Link href="/admin/notifications">
              <Button
                className="font-bold w-full justify-start pl-8"
                variant={selectTasks}
                onClick={() => {
                  setSelectDashboard("ghost");
                  setSelectAccounts("ghost");
                  setSelectTasks("default");
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
