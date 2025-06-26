import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react"; // Ensure you have the correct import for motion
import DressStyleCard from "./DressStyleCard";

const DressStyle = () => {
  return (
    <div className="">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] pb-6 pt-10 w-full rounded-[40px] text-center px-30">
        <motion.h2
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn([
            "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize",
          ])}
        >
          News
        </motion.h2>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5 "
        >
        {/*   <DressStyleCard
            title="Casual"
            url="/shop#casual"
            className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-1.png')]"
          />
          <DressStyleCard
            title="Formal"
            url="/shop#formal"
            className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-2.png')]"
          /> */}
        </motion.div>
      </section>
    </div>
  );
};

export default DressStyle;
