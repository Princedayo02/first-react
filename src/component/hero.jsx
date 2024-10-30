import React from "react";
import CustomButton from "./cusomeButton";
import Card from "./ButtonMike";
import { CardBody, CardHeading } from "./ButtonMike";
function HeroSection() {
	return (
		<div className="h-screen bg-slate-600">
			{/* Hero Section */}
			<div className="mx-auto w-full border border-red-500 text-center h-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-white pb-4">Welcome to our website</h1>
				<p className="text-2xl text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed,
					convallis ex.
				</p>
				<div className="flex items-center justify-center gap-10 my-10">
					<CustomButton text="Contact Us" />
					<CustomButton background="bg-black" text="More" />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
