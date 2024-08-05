import { useState } from "react";
import { motion } from "framer-motion";
import { Heading, Card2 } from "../";
import { SiIbm } from "react-icons/si";
import { RiArrowUpWideFill } from "react-icons/ri";
import { IoIosLink } from "react-icons/io";

export default function Certs() {
  const [showAll, setShowAll] = useState(false);

  const CertCard = ({ title, Logo, date, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="block"
      >
        <Card2>
          <div className="gap-6 flex px-2 items-center relative overflow-hidden">
            <motion.div
              className="relative text-4xl"
              initial={{ y: 0 }}
              animate={{ y: isHovered ? -30 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Logo />
            </motion.div>
            <motion.div
              className="absolute text-4xl top-0 bottom-0 flex items-center justify-center text-light"
              initial={{ y: 40 }}
              animate={{ y: isHovered ? 0 : 40 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosLink />
            </motion.div>
            <div className="flex flex-col gap-1">
              <span className="font-general font-bold text-center text-sm">
                {title}
              </span>
              <span className="font-medium text-light/75 text-sm">{date}</span>
            </div>
          </div>
        </Card2>
      </motion.a>
    );
  };

  return (
    <div className="flex flex-col gap-1 items-center my-2">
      <Heading text="certifications" />

      <div className="mb-4">
        <CertCard
          Logo={SiIbm}
          title="Python for Data Science, AI & Development"
          date="August 2024"
          link="https://coursera.org/share/a34ac355c12ca79775188cd5db838a74"
        />
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: showAll ? 1 : 0, height: showAll ? "auto" : 0 }}
          exit={{
            opacity: 0,
            height: 0,
            transition: { duration: 0.5, type: "spring" },
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <CertCard
            Logo={SiIbm}
            title="Hands-on Introduction to Linux Commands and Shell Scripting"
            date="July 2024"
            link="https://coursera.org/share/e8002e1e6fd64b6d3866f52baf401b75"
          />
          <CertCard
            Logo={SiIbm}
            title="Introduction to DevOps"
            date="August 2023"
            link="https://coursera.org/share/2329993ac7713ba0367611f2ae390d47"
          />
          <CertCard
            Logo={SiIbm}
            title="Introduction to Cloud Computing"
            date="July 2023"
            link="https://coursera.org/share/8516d17809a5d62fcfaf24fc9ffbde29"
          />
        </motion.div>
      </div>

      <motion.div
        onClick={() => setShowAll(!showAll)}
        className="text-4xl cursor-pointer text-light"
        initial={{ rotate: 180 }}
        animate={{ rotate: showAll ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        <RiArrowUpWideFill />
      </motion.div>
    </div>
  );
}
