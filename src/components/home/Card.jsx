import { motion } from "framer-motion";
import { useState } from "react";

export default function Card() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="border-[3px] hover:bg-hoveredCard bg-primary border-dark p-2 rounded-lg text-center shadow-lg cursor-pointer"
    >
      <div
        className="relative h-20 border-dashed border-2 border-gray-500  rounded-lg overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ position: "relative" }}
        >
          <motion.span
            className="font-general font-bold text-4xl absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "-100%" : "0%" }}
            transition={{ type: "spring", stiffness: 200, damping: 50 }}
            style={{ zIndex: 1 }}
          >
            TALK?
          </motion.span>
          <motion.span
            className="font-general font-bold text-4xl absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ x: "100%" }}
            animate={{ x: isHovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 50 }}
            style={{ zIndex: 0 }}
          >
            MAIL 
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
