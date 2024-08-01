import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Heading } from "../";

export default function Work() {
  const Details = ({ type, time, place, country }) => {
    const ref = useRef(null);

    const LiIcon = ({ reference }) => {
      const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
      });

      return (
        <figure className="absolute left-0 stroke-light">
          <svg
            className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
            width="75"
            height="75"
            viewBox="0 0 100 100"
          >
            <circle
              cx="75"
              cy="50"
              r="20"
              className="stroke-light"
              strokeWidth="1"
              fill="none"
            />
            <motion.circle
              cx="75"
              cy="50"
              r="20"
              className="fill-[#f3ebdd]"
              strokeWidth="3"
              //   style={{
              //     pathLength: scrollYProgress,
              //   }}
            />
            <circle
              cx="75"
              cy="50"
              r="10"
              className="fill-gray-600"
              strokeWidth="1"
            />
          </svg>
        </figure>
      );
    };

    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
        >
          <h3 className="capitalize font-bold font-general sm:text-xl xs:text-lg">
            {type}&nbsp;
          </h3>
          <span className="capitalize font-medium text-light/75 xs:text-sm">
            {time} | <br />
            <span>
              {place} <br />
              {country}
            </span>
          </span>
        </motion.div>
      </li>
    );
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="xs:mt-30 xs:pb-[22vh]">
      <div className="mt-2 justify-center flex">
        <Heading text="Work" />
      </div>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top dark:bg-light
             md:w-[2px] md:left-[30px] xs:left-[20px]"
        /> */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Intern Software Engineer"
            time="Jan 2024 - July 2024"
            place="WSO2 (Pvt) Ltd"
            country="Sri Lanka"
          />
        </ul>
      </div>
    </div>
  );
}
