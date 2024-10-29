import React from "react";

function CustomButton({ text, background }) {
	return <button className={`${background} px-6 py-3 text-white rounded-xl border border-teal-500 w-40`}>{text}</button>;
}

export default CustomButton;
