'use client';
import { RegisterForm } from "@/components/auth/RegisterForm.jsx";
import Image from "next/image";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
           <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-sm"
        >
            <RegisterForm />
          </motion.div>
        </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width={200}
          height={500}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
         
      </div>
    </div>
  );
}
