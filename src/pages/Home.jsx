import DP from "../assets/images/Pic2.jpg";
import { Card } from "../components";

export default function Home() {
  return (
    <div>
      <div className=" mt-12 flex gap-8">
        <div>
          <img src={DP} className="h-[90vh] object-cover w-72" />
        </div>
        <div className="w-1/4 mt-4">
          <p className="paragraph mb-4 text-4xl leading-tight">
            Greetings, earthlings! I try to create websites that look cool and
            when I'm not crafting, you'll find me sipping coffee, gaming, or
            exploring the vast wonders of our world.
          </p>
          <Card />
        </div>
        <div className="border-l-2 border-extraLight my-12 mx-6 "></div>
        <div className="w-1/2"></div>
      </div>
      <div className="flex mt-6">
        <div className="bg-dark">
          <span className="text-9xl text-primary font-extrabold tracking-wide">
            SOFTWARE ENGINEER
          </span>
        </div>
        <div className="pl-6 flex items-center border-t border-dark">
          <span className="text-6xl font-extrabold tracking-wide text-dark">
            TURNING <br />
            COFFEE <br />
            INTO CODE
          </span>
        </div>
      </div>
    </div>
  );
}
