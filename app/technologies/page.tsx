"use client";

import { motion } from "framer-motion";
import Technologies from "@/components/technologies";

export default function Tech() {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-4 px-4"
      >
        <div className="text-3xl md:text-4xl font-bold">Technologies</div>
        <p className="text-sm md:text-base font-thin">
          Click on an icon to see projects using that technology.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-1 w-full flex items-start justify-center p-4 pt-0 -mt-20 md:-mt-32"
      >
        <div className="w-full h-full max-w-[min(90vw,90vh)] max-h-[min(90vw,90vh)]">
          <Technologies liveLinks={true} />
        </div>
      </motion.div>
    </div>
  );
}
