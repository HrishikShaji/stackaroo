import { Headings } from "./Headings";

const data = [
  {
    title: "Comprehensive Talent Evaluation",
    desc: "STACKKAROO evaluates talents. Covers communication skills, technical know-how & cultural fit.",
  },
  {
    title: "Ensure Smooth Talent and Client Transition",
    desc: "We know talented workers and client needs smooth transitions. So, the platform provides thorough trainings to all talents for day one readiness.",
  },
  {
    title: "Rigorous Evaluation Process",
    desc: "STACKKAROO reviews key areas, tough eval, clients get skilled specialists.",
  },
  {
    title: "Unlocking Top-Rate Talents",
    desc: "With STACKKAROO, clients get top-rate talents ready to hit the ground running.",
  },
  {
    title: "Competent Education System",
    desc: "India has a good education system producing many highly qualified workers. Emphasis is placed on STEM education.",
  },
  {
    title: "A Vast Talent Base",
    desc: "Moreover, India's populous nation fosters talent, fuels innovation. Thanks to diversity, Indians offer different viewpoints, solutions to problems.",
  },
  {
    title: "Strong Work Mentality",
    desc: "Secondly, Indians are hardworking, resilient, and quick learners when it comes to new technologies.",
  },
  {
    title: "Affordability",
    desc: "The low cost of Indian labor is attractive to corporate entities. Technology giants cannot compromise on service quality even at competitive rates.",
  },
];

export const Benchmark = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Headings
        headingOne="Talents from Stackkaroo sets the Benchmark"
        headingTwo="We choose the Best for your Company"
      />
      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.title} className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <div className="flex flex-col gap-2 w-[700px]">
              <h1>{item.title}</h1>
              <h1>{item.desc}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
