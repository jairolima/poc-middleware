'use client';

import { useEffect, createContext, useState, ReactNode } from "react";

type UserT = {
  name: string;
  surname: string;
};

type DashboardContextType = {
  user: UserT | undefined;
  setUser: any;
};

type Props = {
  children: ReactNode;
};

export const DashboardContext = createContext({} as DashboardContextType);

export function DashboardProvider({ children }: Props) {
  const [user, setUser] = useState<UserT>();

  const fetchUser = async () => {
    try {
      setUser({name: 'teste', surname: 'teste'})
    } catch (e) {
      console.error('error');
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
