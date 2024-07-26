// Nav.jsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowRightSFill } from "react-icons/ri";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  useEffect(() => {
    if (!isOpen && hasToggled) {
      setIsClosing(true);
      const timeout = setTimeout(() => {
        setIsClosing(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setHasToggled(true);
  };

  const NavItem = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="relative">
        <motion.div
          animate={{ width: isHovered ? "100%" : "none" }}
          transition={{ duration: 0.5 }}
          className="absolute cursor-pointer  flex flex-col gap-4 top-6"
          onHoverStart={() => {
            setIsHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
          }}
        >
          <motion.hr className="border-dark" />
          <motion.hr className="border-dark" />
        </motion.div>
        <motion.span
          onHoverStart={() => {
            setIsHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
          }}
          className="text-6xl font-general font-bold cursor-pointer z-100"
        >
          {text}
        </motion.span>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, display: "none", width: 0 },
    visible: {
      opacity: 1,
      display: "block",
      width: "100%",
      transition: {
        duration: 0.5,
        when: "beforeChildren", // Ensure the parent animation completes before starting children animations
        staggerChildren: 0.1, // Stagger the children animations by 0.1s
      },
    },
    exit: { opacity: 0, display: "none", width: 0 },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <>
      <motion.div
        className={`fixed top-0 bottom-0 left-0  flex items-center justify-end z-50 bg-primary  ${
          isOpen && "shadow-xl"
        }
         
         `}
        drag="x"
        dragConstraints={{ left: isOpen ? 0 : -300, right: 0 }}
        dragElastic={0.1}
        animate={{
          width: isOpen ? "25%" : isClosing ? "0%" : "auto",
          borderRight: isOpen ? "1px solid #9ca3af" : "none",
        }}
        transition={{ duration: 0.5, delay: isOpen ? 0 : 0.5 }}
        onDragEnd={handleDragEnd}
        onMouseUp={() => {
          setIsOpen(!isOpen);
          setHasToggled(true);
        }}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="ml-12 h-1/2"
            >
              <div className="flex flex-col gap-12">
                {Array.from({ length: 9 }).map((_, index) => (
                  <motion.hr
                    key={index}
                    className="border border-dark"
                    variants={lineVariants}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="p-2 relative  bg-primary shadow-2xl border border-dark rounded-r-full cursor-pointer"
          whileTap={{ scale: 0.9 }}
          animate={{ left: isOpen ? 32 : "auto" }}
          transition={{ duration: 0.5, delay: isOpen ? 0 : 0.7 }}
        >
          <div className="rounded-r-full border border-dashed border-light">
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
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 h-screen w-screen bg-primary z-40 flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-16  h-full justify-center ml-10 mt-8">
          <NavItem text="HOME" />
          <NavItem text="WORK" />
          <NavItem text="ABOUT" />
        </div>
      </motion.div>
    </>
  );
}
