import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [message, setMessage] = useState();

  useEffect(()=> {
    fetch("/api/hello_world")
      .catch((error)=> console.log(error))
      .then((res)=> res.json())
      .then((data)=> {
        setMessage(data.message);
      });
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {message && <p> The message received from the python backend! {message}</p>}
      {!message && <p>
        Youre seeing this means the python backend is not running or some configurations failed  
      </p>}
    </main>
  );
}
