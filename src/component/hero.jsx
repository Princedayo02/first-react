import React from "react";

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
			</div>
		</div>
	);
}

export default HeroSection;
