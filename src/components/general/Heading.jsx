import { GoDotFill } from "react-icons/go";

export default function Heading({ text, vertical = false, end = false }) {
  return (
    <h2
      className={`${
        end ? "mb-2" : "mb-6"
      } capitalize items-center font-general font-bold text-xl text-gray-700 md:text-6xl xs:text-4xl md:mb-16 flex gap-2
      ${
        vertical &&
        "[writing-mode:vertical-lr] justify-center mb-0  relative right-12"
      }`}
    >
      <GoDotFill className=" text-base" />
      <span>{text}</span>
      <GoDotFill className=" text-base" />
    </h2>
  );
}
