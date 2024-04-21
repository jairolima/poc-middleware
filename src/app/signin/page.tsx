"use client"
import { useRouter } from 'next/navigation';

export default function SignIn() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard/admin')
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8">

        <button onClick={handleClick}>Signin</button>
      </div>
    </>
  );
}
