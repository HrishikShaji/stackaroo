export const Talents = () => {
	const data = [
		{
			number: 1,
			title: "Share the Job Description with us",
			desc: "Talent Specialists will contact you within 2 working hours after you share the job description with us including roles, responsibilities, skills, experience, and budget.",
		},
		{
			number: 2,
			title: "Review and Shortlist the Matches",
			desc: "From there, review and shortlist the best fit profiles shared by STACKKAROO. Company will search if suitable people are not found.",
		},
		{
			number: 3,
			title: "Interview and Hire the Best",
			desc: "You can interview and hire in 48 hours. Additionally, you can hire top talent from India with 40% cost saving.",
		},
		{
			number: 4,
			title: "Post Hiring Support",
			desc: "We'll also ensure smooth onboarding and support, such as contracts, replacement, retention, cancellation and work in your time zone.",
		},
	];
	return (
		<div className="flex flex-col gap-5 items-center">
			<div className="flex flex-col gap-2 items-center">
				<h1 className="text-orange-500 text-xl">
					Hire Best Talents from Stackkaroo
				</h1>
				<h1>4 Easy Steps for Simple and Fast Hiring</h1>
			</div>
			<div className="flex gap-3 ">
				{data.map((item) => (
					<div
						key={item.number}
						className="relative flex w-[300px] h-[407px] rounded-md bg-gray-400 flex-shrink-0 p-5 text-center flex-col gap-2 items-center"
					>
						<div className="absolute -top-10 h-20 w-20 flex items-center justify-center rounded-full bg-gray-100">
							<h1 className="text-4xl font-bold">{item.number}</h1>
						</div>
						<div className="pt-20">
							<h1>{item.title}</h1>
							<h1>{item.desc}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
