import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
  const session = cookies().get('TokenJwt')
  
  if (session) {
    redirect('/dashboard/admin')
  }

  return <>{children}</>
}