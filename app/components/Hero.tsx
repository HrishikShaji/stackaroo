"use client";

import Image from "next/image";

export const Hero = () => {
	return (
		<div className="w-full flex flex-col bg-blue-500 flex flex-col items-center">
			<Image
				height={3000}
				width={3000}
				alt="hero"
				className="h-[500px] w-[813.6px]"
				src="/assets/hero.png"
			/>
			<div className="flex flex-col gap-1 w-full items-center">
				<h1 className="text-xl font-bold text-blue-500">
					Experience Seamless Hiring
				</h1>
				<h1>“Connecting Global Companies with the Best Indian Talent”</h1>
				<p>
					STACKKAROO is a hiring platform that picks the best of IT & Non-IT
					fields as well as web development, digital marketing, data science,
					business development, human resource, content writing, advertising and
					much more in India. Their communication skills, fit for culture, and
					ability to be ethical for global work will be assessed.
				</p>
				<button className="py-2 px-3 bg-orange-500 rounded-xl">
					Job Opening
				</button>
			</div>
		</div>
	);
};
