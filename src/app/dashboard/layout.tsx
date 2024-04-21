"use client";

import { DashboardProvider } from "../../context/DashboradContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
    <DashboardProvider>
      {children}
    </DashboardProvider>
    </>
  );
}