import React, { Children } from "react";

function Card({ children }) {
	return <div className={`w-[300px]  h-auto border shadow-xl bg-gray-200 p-8 rounded-lg`}>{children}</div>;
}

export default Card;

export const CardHeading = ({ children }) => {
	return <h2 className="text-3xl">{children}</h2>;
};

export const CardBody = ({ children }) => {
	return <p className="p-4">{children}</p>;
};

export function CardTwo({ bgColor, borderColor, borderRadius, heading, body, href, innerDivChild, grabInnerVariable }) {
	return (
		<div className={`${bgColor} ${borderRadius}  ${borderColor} w-[300px] shadow-lg  flex flex-col items-center gap-4  border p-10 `}>
			<h3 className="text-3xl text-gray-200">{heading}</h3>
			<p className="text-lg text-gray-200">{body}</p>
			<a
				href={`${href}`}
				className="w-full bg-white border border-gray-400 px-8 py-3 rounded-full text-center mt-auto cursor-pointer">
				View more
			</a>
			<InnerCard variable={innerDivChild} grabInnerVariable={grabInnerVariable} />
		</div>
	);
}

const InnerCard = ({ variable, grabInnerVariable }) => {
	return (
		<GreatGrandChild finalVriable={variable} grabInnerVariable={grabInnerVariable} className="bg-gray-200 p-4">
			Just Grand Child
		</GreatGrandChild>
	);
};

const GreatGrandChild = ({ children, finalVriable, grabInnerVariable }) => {
	const innerVar = "I am hidden variable";
	grabInnerVariable(innerVar);

	return <p className="bg-yellow-700 p-4 rounded-full">{finalVriable}</p>;
};
