import { delay, motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-2 text-xl px-2mt-6 flex justify-center">
      <span>Shamly</span>
    </div>
  );
}
