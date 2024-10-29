import "./App.css";
import Header from "./component/header";
import Counter from "./component/counter";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
import { useEffect, useState } from "react";
function App() {
	const [x, setX] = useState(4);
	console.log("Good Day");
	const y = "Dayo";
	const testFunction = () => {
		console.log(x);
	};
	useEffect(() => {
		testFunction();
	}, [x]);
	return (
		<div className="min-h-screen flex flex-col">
			<Header passedNumber={x} secondVariable={y} />
			<HeroSection />
			<div className="text-center text-4xl">{x}</div>
			<button onClick={() => setX(x + 1)}>changeX</button>
			<Footer />
		</div>
	);
}

export default App;
