import { Heading } from "../";
import { FaReact, FaJava, FaAngular, FaPython, FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiPhp,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiGraphql,
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const Card = ({ Logo, text, fill, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <motion.div
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        className="relative flex flex-col items-center gap-2 cursor-pointer"
      >
        <motion.div
          animate={{
            backgroundColor: isHovered && fill ? color : undefined,
            color: !fill && isHovered ? color : undefined,
          }}
          transition={{ duration: 0.8 }}
          className={`text-6xl cursor-pointer ${
            fill
              ? "bg-gray-700 rounded-full p-1 text-[#f3ebdd] scale-[0.8]"
              : "text-gray-700 py-1"
          } `}
        >
          <Logo />
        </motion.div>

        <motion.div
          className={` flex items-center justify-center  font-general font-bold text-center text-gray-700 rounded-full  
          }`}
        >
          {text}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div>
      <div className="mb-2 justify-center flex">
        <Heading text="expertise" />
      </div>
      <div className="flex gap-8 flex-wrap justify-evenly">
        <Card text="React" Logo={FaReact} fill color="#4aa0c2" />
        <Card text="Angular" Logo={FaAngular} color="#b30028" />
        <Card text="Next.js" Logo={RiNextjsFill} color="#000000" />
        <Card text="Java" Logo={FaJava} fill color="#007396" />
        <Card text="Node.js" Logo={FaNodeJs} fill color="#6a9a3e" />
        <Card text="Python" Logo={FaPython} fill color="#306998" />
        <Card text="Go" Logo={FaGolang} fill color="#0091b0" />
        <Card text="C Lang" Logo={TbCircleLetterCFilled} color="#00599C" />
        <Card text="PHP" Logo={SiPhp} fill color="#6f80a6" />
        <Card text="Spring Boot" Logo={BiLogoSpringBoot} color="#4a8a2f" />
        <Card text="MongoDB" Logo={SiMongodb} color="#388a2b" />
        <Card text="MySQL" Logo={DiMysql} fill color="#00758F" />
        <Card text="MSSQL" Logo={SiMicrosoftsqlserver} fill color="#a2201e" />
        <Card text="GraphQL" Logo={SiGraphql} fill color="#b60078" />
      </div>
    </div>
  );
}
