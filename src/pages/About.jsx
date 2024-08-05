import {
  Caption,
  Work,
  Education,
  Skills,
  Awards,
  Certs,
  AnimatedNumbers,
} from "../components";
export default function About() {
  const AnimatedText = ({ text, value }) => (
    <div className=" font-general  bg-dark text-primary justify-center  gap-1 rounded-md py-1 px-2 flex flex-col  items-end  md:text-6xl sm:text-5xl xs:text-4xl">
      <div className="text-6xl">
        <AnimatedNumbers value={value} />+
      </div>
        <span className="text-3xl text-light">{text}</span>
    </div>
  );

  return (
    <div className="mt-2">
      <div className="text-center ">
        <Caption text="BIOGRAHPY" />
      </div>
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col gap-12 w-[60%]">
          <span className="text-2xl paragraph leading-normal">
            A technically competent and self-motivated undergraduate with
            qualitative academic college experience in the field of ICT. An
            effective team player who leverages technical, leadership and
            communication skills to achieve goals and one who continuously seeks
            opportunities to master new technologies.
          </span>
          <hr className="border border-extraLight mx-10" />
          <Skills />
          <hr className="border border-extraLight mx-10 mb-4" />
          <Certs />
        </div>
        <div className="border-l-2 border-extraLight my-2 "></div>
        <div>
          <Work />
          <hr className="border border-extraLight mx-10 my-10" />
          <Education />
          <hr className="border border-extraLight mx-10 my-10" />
          <div className="flex justify-evenly">

          <AnimatedText value={6} text="Projects" />
          <AnimatedText value={6} text="Projects" />
          </div>
          <div className="flex gap-2 justify-center items-center "></div>
        </div>
      </div>
      <Awards />
      <div className="flex">
        <div className="border-l-2 border-extraLight mx-10 mt-2"></div>
      </div>
    </div>
  );
}
