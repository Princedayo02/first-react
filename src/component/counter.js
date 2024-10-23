import { useState } from "react";
function Counter() {
	//JSX

	const [counter, setCounter] = useState(0);

	const [post, setPost] = useState([]);

	function Add() {
		setCounter(counter + 1);
		console.log(counter);
	}

	async function fetchPost() {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		setPost(data);
	}

	function Sub() {
		setCounter(counter - 1);
		console.log(counter);
	}

	function Reset() {
		setCounter(0);
	}

	return (
		<div className="w-1/2 mx-auto h-32 border mt-40 flex items-center gap-10 justify-center">
			<button onClick={() => Add()} className="bg-black text-white px-8 py-3 w-40 text-sm rounded-full">
				add one
			</button>
			<div>{counter}</div>
			<button onClick={() => Sub()} className="bg-black text-white px-8 py-3 w-40 text-sm rounded-full">
				subtract one
			</button>
			<button onClick={() => Reset()} className="bg-black text-white px-8 py-3 w-40 text-sm rounded-full">
				reset
			</button>
		</div>
	);
}

export default Counter;




















