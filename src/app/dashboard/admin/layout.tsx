import { redirect } from "next/navigation";
import { session } from "../../session";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {

  if (!session) {
    redirect('/signin')
  }

  return <>{children}</>
}