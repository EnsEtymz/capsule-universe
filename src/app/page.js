'use client';

import useAuth from "@/lib/data/user";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";


export default function Home() {
  const user = useAuth((state) => state.user);
  const router = useRouter(); 
  useEffect(() => {
    if (user) {
      return;
    }else {
      router.replace("/login");
    }
  }, [user]);
  return <Fragment></Fragment>;
}
