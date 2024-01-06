import Image from "next/image";
import { Headings } from "./Headings";
import { ArrowDown } from "./ArrowDown";
import { Chart } from "./Chart";

export const TalentCategories = () => {
  return (
    <div className="flex flex-col gap-4 pb-10 items-center">
      <Headings
        headingOne="Talent Categories"
        headingTwo="Categorizing Talents based on IT, Non-IT, Experience and Expertise"
      />
      <div className="pt-10">
        <h1 className="p-2 rounded-xl bg-orange-600">Stackaroo Talents</h1>
      </div>
      <div className="flex flex-col items-center">
        <ArrowDown />
        <Chart />
      </div>
    </div>
  );
};
