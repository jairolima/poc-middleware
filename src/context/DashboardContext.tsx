'use client';

import axios, { AxiosError } from "axios";
import { useEffect, createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DashboardContext = createContext({} as any);

export function DashboardProvider({ children }: Props) {
  const [user, setUser] = useState<any>();

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/users/1");
      setUser(response.data)
    } catch (e) {
      const error = e as AxiosError;
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
