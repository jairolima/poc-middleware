"use client"
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export default function SignIn() {

  const router = useRouter()


  const handleClick = async () => {
    try {
      await axios.post("https://fakestoreapi.com/auth/login", {
        username: "mor_2314",
        password: "83r5^_"
      });
      document.cookie = "JwtToken=auPukDFskaSFzuAFasdas; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      router.push('/dashboard/admin')
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8">

        <button onClick={handleClick}>ENTRAR</button>
      </div>
    </>
  );
}
