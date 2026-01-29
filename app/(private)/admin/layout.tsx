"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import AdminNav from "./components/ui/adminnav";
import Image from "next/image";

type sidebarNavButton = {
  bg: string;
  text: string;
  icon: string;
};

export default function AgentDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [selectDashboard, setselectDashboard] = useState<sidebarNavButton>({
    bg: "bg-blue-600",
    text: "text-white",
    icon: "/icons/home_icon_selected.png",
  });
  const [selectUsers, setSelectUsers] = useState({
    bg: "bg-white",
    text: "text-blue-500",
    icon: "/icons/user_icon.png",
  });
  const [selectReports, setSelectReports] = useState({
    bg: "bg-white",
    text: "text-blue-500",
    icon: "/icons/report_icon.png",
  });

  const { user, logout } = useAuth();

  const unSelectedButton = {
    bg: "bg-white",
    text: "text-blue-500",
  };

  const selectedButton = {
    bg: "bg-blue-500",
    text: "text-white",
  };

  return (
    <div className="flex h-screen">
      <aside className="w-60 flex flex-col m-2 p-4 shadow-lg shadow-slate-500">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-2xl font-bold text-center text-blue-500">
            CallDoc Pro
          </h1>

          <div className="flex flex-col gap-2">
            <Link href="/admin">
              <Button
                className={`flex gap-4 font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectDashboard.bg} ${selectDashboard.bg} $`}
                onClick={() => {
                  setselectDashboard({
                    ...selectedButton,
                    icon: "/icons/home_icon_selected.png",
                  });
                  setSelectUsers({
                    ...unSelectedButton,
                    icon: "/icons/user_icon.png",
                  });
                  setSelectReports({
                    ...unSelectedButton,
                    icon: "/icons/report_icon.png",
                  });
                }}
              >
                <Image
                  src={selectDashboard.icon}
                  alt="home"
                  width={20}
                  height={20}
                />
                <p className={selectDashboard.text}>Home</p>
              </Button>
            </Link>
            <Link href="/admin/users/ ">
              <Button
                className={`flex gap-4 font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectUsers.bg} ${selectUsers.bg}`}
                onClick={() => {
                  setselectDashboard({
                    ...unSelectedButton,
                    icon: "/icons/home_icon.png",
                  });
                  setSelectUsers({
                    ...selectedButton,
                    icon: "/icons/user_icon_selected.png",
                  });
                  setSelectReports({
                    ...unSelectedButton,
                    icon: "/icons/report_icon.png",
                  });
                }}
              >
                <Image
                  src={selectUsers.icon}
                  alt="users"
                  width={20}
                  height={20}
                />
                <p className={selectUsers.text}>Users</p>
              </Button>
            </Link>
            <Link href="/admin/reports ">
              <Button
                className={`flex gap-4 font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectReports.bg} ${selectReports.bg}`}
                onClick={() => {
                  setselectDashboard({
                    ...unSelectedButton,
                    icon: "/icons/home_icon.png",
                  });
                  setSelectUsers({
                    ...unSelectedButton,
                    icon: "/icons/user_icon.png",
                  });
                  setSelectReports({
                    ...selectedButton,
                    icon: "/icons/report_icon_selected.png",
                  });
                }}
              >
                <Image
                  src={selectReports.icon}
                  alt="report"
                  width={20}
                  height={20}
                />
                <p className={selectReports.text}>Report</p>
              </Button>
            </Link>
          </div>
        </div>

        <div className="h-30 flex flex-col gap-5">
          <Link href="/auth/login">
            <Button
              className="w-full flex gap-4 justify-start pl-8 bg-white hover:bg-white cursor-pointer"
              onClick={logout}
            >
              <Image
                src="/icons/settings_icon.png"
                alt="settings-icon"
                width={20}
                height={20}
              ></Image>
              <p className="text-blue-500 font-bold">Settings</p>
            </Button>
          </Link>
        </div>
      </aside>

      <main className="w-full flex flex-col overflow-auto  shadow-lg shadow-slate-500 my-2 mr-2">
        <AdminNav />
        {children}
      </main>
    </div>
  );
}
