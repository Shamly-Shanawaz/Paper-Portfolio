import { GiStarMedal, GiTiedScroll } from "react-icons/gi";
export default function Awards() {
  const Award = ({ Icon, title, line1, line2, line3 }) => (
    <div className="flex items-center gap-6">
      <Icon className="text-6xl text-gray-700 " />
      <div className="flex flex-col">
        <span className="uppercase font-bold font-general text-xl ">
          {title}
        </span>
        <span className="capitalize font-medium text-light/75 text-lg">
          {line1} | <br />
          {line2} | <br />
          {line3}
        </span>
      </div>
    </div>
  );
  return (
    <div className=" my-10 border-t-extraLight border-2 border-b-extraLight py-4 flex gap-24 justify-evenly">
      <Award
        Icon={GiTiedScroll}
        title="Dean's List Honoree"
        line1="six consecutive semesters"
        line2="BSc (Hons) IT & Management"
        line3="University of Moratuwa"
      />
      <Award
        Icon={GiStarMedal}
        title="Valedictorian"
        line1="Commerce section"
        line2="Zahira College , Colombo"
        line3="2019"
      />
    </div>
  );
}
