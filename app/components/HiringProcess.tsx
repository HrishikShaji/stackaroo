import Image from "next/image";

const data = [
	{
		image: "/assets/icon5.png",
		title: "Our Rigorous Hiring Process",
		desc: "To make sure, our Talent get the Best Opportunities",
	},
	{
		image: "/assets/icon6.png",
		title: "Language Proficiency",
		desc: "We use communication assessment test to assess candidates' reading, writing, pronunciation, clarity, fluency, and speech speed.",
	},
	{
		image: "/assets/icon7.png",
		title: "Aptitude Evaluation",
		desc: "We administer scientifically designed aptitude test to assess candidates' reasoning & problem-solving abilities",
	},
	{
		image: "/assets/icon8.png",
		title: "Technical Assessment",
		desc: "We have developed challenging and advanced technical assessments tailored to specific roles, ensuring that only the most skilled candidates make it.",
	},
	{
		image: "/assets/icon9.png",
		title: "Panel Interview",
		desc: "Our talent acquisition experts conduct a final video interview in the presence of a representative from the hiring company.",
	},
];

export const HiringProcess = () => {
	return (
		<div className="flex flex-col gap-10 items-center">
			<div className="flex flex-col -gap-2 items-center">
				<h1 className="text-xl text-orange-500">Our Rigorous Hiring Process</h1>
				<h1>To make sure, our Talent get the Best Opportunities</h1>
			</div>
			<div className="flex flex-col gap-4">
				{data.map((item) => (
					<div
						key={item.title}
						className=" flex items-center justify-between gap-5"
					>
						<div className="flex gap-5 items-center">
							<div className=" p-3 border-2 border-black rounded-full">
								<Image
									src={item.image}
									height={1000}
									width={1000}
									className="w-[60px] h-[60px]"
									alt="image"
								/>
							</div>
							<h1 className="text-blue-500 text-xl">{item.title}</h1>
						</div>
						<h1 className="w-[600px]">{item.desc}</h1>
					</div>
				))}
			</div>
		</div>
	);
};
