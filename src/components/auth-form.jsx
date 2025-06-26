'use client';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const tabList = ["login", "register"];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

export function AuthForm() {
  const [tab, setTab] = useState("login");
  const [prevTab, setPrevTab] = useState("login");

  const handleTabChange = (newTab) => {
    setPrevTab(tab);
    setTab(newTab);
  };

  const direction = tabList.indexOf(tab) > tabList.indexOf(prevTab) ? 1 : -1;

  return (
    <div className="bg-white flex flex-col items-center justify-center p-6 rounded-xl shadow-md w-full max-w-md mx-auto transition-all duration-300">
      <div className="relative w-full">
        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 relative bg-black rounded-md overflow-hidden mx-auto">
            {tabList.map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className={clsx(
                  "relative z-10 bg-none text-white rounded-sm",
                  tab === item && "text-black bg-white"
                )}
              >
                {item === "login" ? "Login" : "Register"}
              </TabsTrigger>
            ))}
            <motion.div
              className="absolute top-0 bottom-0 w-1/2  z-0"
              layout
              initial={false}
              animate={{ x: tab === "register" ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </TabsList>
        </Tabs>
      </div>
      <motion.div
        layout
        className="relative w-full mt-6 bg-white overflow-hidden rounded-lg"
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          {tab === "login" && (
            <motion.div
              key="login"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <LoginForm />
            </motion.div>
          )}

          {tab === "register" && (
            <motion.div
              key="register"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <RegisterForm />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
