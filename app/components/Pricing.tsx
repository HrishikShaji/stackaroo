import Image from "next/image";
import { Headings } from "./Headings";

const data = [
  {
    image: "/assets/icon10.png",
    title: "Simplifying Talent Hiring with Transparent Pricing",
    desc: "We have a pricing system based on talent's skills, experience, role complexity, and duration. Companies are charged upon talent hiring, while talent is not charged. We offer discounts of 5% to 20% for prepaid amounts.",
  },
  {
    image: "/assets/icon11.png",
    title: "Tailored Pricing and Expert Consultation",
    desc: "To find out our prices, fill out a form. Get email with subject 'Access your PRICE CARD.' Request a meeting to learn more about our services. We try to simplify offshore recruitment for global organizations to hire Indian Talent.",
  },
  {
    image: "/assets/icon12.png",
    title: "Other Services",
    desc: "Cost of hiring Indian workers from us is lower with more people employed. Pay in advance for a discount of 2.5% to 7%. Local time zone staff have additional charges. High demand may require non-traditional hours.",
  },
  {
    image: "/assets/icon13.png",
    title: "Contact Us",
    desc: "Get Pricing based on Job Description. Provide the description and other info. We'll review and give the right budget. Schedule a free insightful call with our Talent Specialist.",
  },
];

export const Pricing = () => {
  return (
    <div className="flex flex-col gap-10">
      <Headings
        headingOne="Pricing"
        headingTwo="Best Services at the Most Affordable Cost"
      />
      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 items-center">
            <Image
              src={item.image}
              className="w-[60px] h-[60px]"
              height={1000}
              width={1000}
              alt="image"
            />
            <h1>{item.title}</h1>
            <h1>{item.desc}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
