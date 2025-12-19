"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, FileCheck2, Clock, Target, AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

interface StatItem {
  title: string;
  value: number | string;
  icon: ReactNode;
}

export default function DashboardStats() {
  const stats: StatItem[] = [
    {
      title: "Calls Today",
      value: 13,
      icon: <Phone className="h-5 w-5 text-primary" />,
    },
    {
      title: "Reports Submitted",
      value: 10,
      icon: <FileCheck2 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Pending Reports",
      value: 3,
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      title: "Retention Rate",
      value: "78%",
      icon: <Target className="h-5 w-5 text-primary" />,
    },
    {
      title: "Escalations",
      value: 1,
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((item, i) => (
        <Card key={i} className="shadow-sm border border-muted/40">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-semibold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
