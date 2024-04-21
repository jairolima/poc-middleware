"use client"

import { DashboardContext } from "@/context/DashboardContext";
import { useContext } from "react";

export default function Dashboard() {

  const { user } = useContext(DashboardContext)

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <div>Dashboard</div>
        <div>Olá, {user?.name?.firstname}</div>
      </div>
    </>
  );
}
