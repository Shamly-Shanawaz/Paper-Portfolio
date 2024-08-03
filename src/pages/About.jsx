import {
  Caption,
  Work,
  Education,
  Skills,
  Awards,
  Certs,
} from "../components";
export default function About() {
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
        </div>
      </div>
      <Awards />
      <div className="flex">
        <div className="border-l-2 border-extraLight mx-10 mt-2"></div>
      </div>
    </div>
  );
}
