import Image from "next/image";

const data = [
	{
		image: "/assets/icon1.png",
		title: "Talent Matchmaker",
		desc: "STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.",
	},
	{
		image: "/assets/icon2.png",
		title: "Easy Hiring",
		desc: "We help with hiring, including interviews, negotiations, contracts, and onboarding. Indian talent and the company receive support during recruitment.",
	},
	{
		image: "/assets/icon3.png",
		title: "Affordability",
		desc: "The company pays a fee for talent hire based on salary and role difficulty. The talent is not charged a fee.",
	},
	{
		image: "/assets/icon4.png",
		title: "Long-Term Relationship",
		desc: "STACKKAROO maintains good talent-org relationships by providing feedback, performance appraisal, career development, and settling disputes.",
	},
];

export const About = () => {
	return (
		<div className="flex flex-col gap-10 items-center">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-xl font-bold text-orange-500">
					We are best Because
				</h1>
				<h1>Affordable Web Development Company in India</h1>
			</div>
			<div className="grid grid-cols-2 gap-4">
				{data.map((item) => (
					<div
						key={item.title}
						className="w-[620px] h-[268px] p-1 bg-gray-300 rounded-md flex flex-col items-center gap-4"
					>
						<Image
							src={item.image}
							width={1000}
							height={1000}
							className="w-[75px] h-[75px]"
							alt="image"
						/>
						<h1 className="text-blue-500 font-bold text-xl">{item.title}</h1>
						<p>{item.desc}</p>
					</div>
				))}
			</div>
			<div className="bg-blue-200 w-full p-5">
				<h1>
					STACKKAROO aims to simplify the remote hiring process and allows
					global companies to tap into top tech talent from India. Also, it
					assists Indian talent to find the dream jobs on the global level
				</h1>
			</div>
		</div>
	);
};
