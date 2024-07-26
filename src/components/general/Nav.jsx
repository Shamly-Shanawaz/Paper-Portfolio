// Nav.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { RiArrowRightSFill } from "react-icons/ri";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className={`fixed top-0 bottom-0 left-0  flex items-center justify-end z-50 bg-primary text-white  ${
          isOpen && "border-r border-gray-400 shadow-xl"
        }`}
        drag="x"
        dragConstraints={{ left: isOpen ? 0 : -300, right: 0 }}
        dragElastic={0.1}
        animate={{ width: isOpen ? "25%" : "auto" }}
        transition={{ duration: 0.5 }}
        onDragEnd={handleDragEnd}
        onMouseUp={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.div
          className="p-2 relative  bg-primary shadow-2xl border border-dark rounded-r-full cursor-pointer"
          whileTap={{ scale: 0.9 }}
          animate={{ left: isOpen ? 32 : "auto" }}
        >
          <div className="rounded-r-full border border-dashed border-gray-500">
          <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the arrow based on isOpen state
              transition={{ duration: 0.5 }}
            >
              <RiArrowRightSFill className="text-6xl text-gray-600" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 h-screen w-screen bg-primary text-white z-40 flex flex-col items-center justify-center"
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Navbar</h2>
          {/* Add your nav items here */}
        </div>
      </motion.div>
    </>
  );
}
