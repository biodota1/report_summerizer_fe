"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/AuthContext";
import Logo from "@/components/ui/logo";
import AgentNav from "./components/ui/agentNav";

type sidebarNavButton = {
  bg: string;
  text: string;
  icon: string;
};

export default function AgentDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectHome, setSelectHome] = useState<sidebarNavButton>({
    bg: "bg-blue-600",
    text: "text-white",
    icon: "/icons/home_icon_selected.png",
  });
  const [selectAddNewReport, setSelectAddNewReport] =
    useState<sidebarNavButton>({
      bg: "bg-white",
      text: "text-blue-600",
      icon: "/icons/new_report_icon_v1.png",
    });
  const [selectAccounts, setselectAccounts] = useState<sidebarNavButton>({
    bg: "bg-white",
    text: "text-blue-600",
    icon: "/icons/user_icon.png",
  });

  const [selectNotification, setSelectNotification] =
    useState<sidebarNavButton>({
      bg: "bg-white",
      text: "text-blue-600",
      icon: "/icons/notification_icon.png",
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
          <Logo />

          <div className="flex flex-col gap-2">
            <Link href="/agent">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectHome.bg} ${selectHome.bg}`}
                onClick={() => {
                  setSelectHome({
                    ...selectedButton,
                    icon: "/icons/home_icon_selected.png",
                  });
                  setSelectAddNewReport({
                    ...unSelectedButton,
                    icon: "/icons/new_report_icon_v1.png",
                  });
                  setselectAccounts({
                    ...unSelectedButton,
                    icon: "/icons/user_icon.png",
                  });
                  setSelectNotification({
                    ...unSelectedButton,
                    icon: "/icons/notification_icon.png",
                  });
                }}
              >
                <Image
                  src={selectHome.icon}
                  alt="home"
                  height={20}
                  width={20}
                ></Image>
                <p className={selectHome.text}>Home</p>
              </Button>
            </Link>
            <Link href="/agent/callreport ">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectAddNewReport.bg} ${selectAddNewReport.bg}`}
                onClick={() => {
                  setSelectHome({
                    ...unSelectedButton,
                    icon: "/icons/home_icon.png",
                  });
                  setSelectAddNewReport({
                    ...selectedButton,
                    icon: "/icons/new_report_icon_selected_v1.png",
                  });
                  setselectAccounts({
                    ...unSelectedButton,
                    icon: "/icons/user_icon.png",
                  });
                  setSelectNotification({
                    ...unSelectedButton,
                    icon: "/icons/notification_icon.png",
                  });
                }}
              >
                <Image
                  src={selectAddNewReport.icon}
                  alt="new_report_icon"
                  height={20}
                  width={20}
                />
                <p className={selectAddNewReport.text}>New Report</p>
              </Button>
            </Link>
            <Link href="/agent/accounts">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectAccounts.bg} ${selectAccounts.bg}`}
                onClick={() => {
                  setSelectHome({
                    ...unSelectedButton,
                    icon: "/icons/home_icon.png",
                  });
                  setSelectAddNewReport({
                    ...unSelectedButton,
                    icon: "/icons/new_report_icon_v1.png",
                  });
                  setselectAccounts({
                    ...selectedButton,
                    icon: "/icons/user_icon_selected.png",
                  });
                  setSelectNotification({
                    ...unSelectedButton,
                    icon: "/icons/notification_icon.png",
                  });
                }}
              >
                <Image
                  src={selectAccounts.icon}
                  alt="account"
                  height={20}
                  width={20}
                />
                <p className={selectAccounts.text}>Accounts</p>
              </Button>
            </Link>
            <Link href="/agent/tools">
              <Button
                className={`font-bold w-full justify-start pl-8 rounded-full cursor-pointer hover:${selectNotification.bg} ${selectNotification.bg}`}
                onClick={() => {
                  setSelectHome({
                    ...unSelectedButton,
                    icon: "/icons/home_icon.png",
                  });
                  setSelectAddNewReport({
                    ...unSelectedButton,
                    icon: "/icons/new_report_icon_v1.png",
                  });
                  setselectAccounts({
                    ...unSelectedButton,
                    icon: "/icons/user_icon.png",
                  });
                  setSelectNotification({
                    ...selectedButton,
                    icon: "/icons/notification_icon_selected.png",
                  });
                }}
              >
                <Image
                  src={selectNotification.icon}
                  alt="notification_icon"
                  height={20}
                  width={20}
                />
                <p className={selectNotification.text}>Notification</p>
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-30 flex flex-col gap-5">
          <Link href="/auth/login" className="h-30 flex flex-col gap-5 ">
            <Button
              className="w-full rounded-full cursor-pointer"
              onClick={logout}
            >
              Log out
            </Button>
          </Link>
        </div>
      </aside>
      <main className="w-full flex flex-col overflow-auto  shadow-lg shadow-slate-500 my-2 mr-2">
        <AgentNav />
        {children}
      </main>
    </div>
  );
}
