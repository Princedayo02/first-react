import "./App.css";
import Header from "./component/header";
import Counter from "./component/counter";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
function App() {
	console.log("Good Day");
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<HeroSection />
			<Footer />
		</div>
	);
}

export default App;
