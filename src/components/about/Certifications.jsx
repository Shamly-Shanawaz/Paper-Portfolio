import { motion } from "framer-motion";
import { Heading, Card2 } from "../";
import IBMLogo from "../../assets/images/ibm-logo-black-transparent.png";
export default function Certifications() {
  const CertCard = ({ title, logo, date, link }) => (
    <motion.a
      initial={{ y: 80 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      viewport={{ once: true }}
      href={link}
    >
      <Card2>
        <div className="gap-6 flex  items-center p-2">
          <img src={logo} className="object-contain w-10 ml-2" />
          <div className="flex flex-col">
            <span className="font-general font-bold break-words text-sm">
              {title}
            </span>
            <span className="font-medium text-light/75 text-sm">{date}</span>
          </div>
        </div>
      </Card2>
    </motion.a>
  );
  return (
    <div className="flex flex-col gap-1 items-center my-2">
      <Heading text="certifications" />

      <div className="flex">
        <div className="flex flex-col gap-2 mb-8">
          <CertCard
            logo={IBMLogo}
            title="Hands-on Introduction to Linux Commands and Shell Scripting"
            date="July 2024"
          />
          <CertCard
            logo={IBMLogo}
            title="Introduction to Cloud Computing"
            date="July 2024"
          />
          <CertCard
            logo={IBMLogo}
            title="Introduction to DevOps"
            date="July 2024"
          />
        </div>
      </div>
    </div>
  );
}
