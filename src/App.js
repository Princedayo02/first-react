import "./App.css";
import Header from "./component/header";
import Counter from "./component/counter";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
import { useEffect, useState } from "react";
import Card, { CardBody, CardHeading, CardTwo } from "./component/ButtonMike";
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

			<div className="grid grid-cols-1 mx-auto gap-8  md:grid-cols-2 lg:grid-cols-3 my-16">
				<Card>
					<CardHeading>This is my Card Heading</CardHeading>
					<CardBody>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos fugit illo porro, cumque
						mollitia suscipit consequuntur quaerat voluptas, optio enim ratione quae, blanditiis provident
						similique ipsum iste ipsam quos!
					</CardBody>
				</Card>
				<Card>
					<CardHeading>This is my Card Heading</CardHeading>
					<CardBody>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos fugit illo porro, cumque
						mollitia suscipit consequuntur quaerat voluptas, optio enim ratione quae, blanditiis provident
						similique ipsum iste ipsam quos!
					</CardBody>
				</Card>
				<Card>
					<CardHeading>This is my Card Heading</CardHeading>
					<CardBody>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos fugit illo porro, cumque
						mollitia suscipit consequuntur quaerat voluptas, optio enim ratione quae, blanditiis provident
						similique ipsum iste ipsam quos!
					</CardBody>
				</Card>
				<Card>
					<CardHeading>This is my Card Heading</CardHeading>
					<CardBody>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos fugit illo porro, cumque
						mollitia suscipit consequuntur quaerat voluptas, optio enim ratione quae, blanditiis provident
						similique ipsum iste ipsam quos!
					</CardBody>
				</Card>
			</div>

			<h2 className="text-center text-5xl underline py-8 font-bold">Card Two Section</h2>

			<div className="grid grid-cols-1 mx-auto gap-8  md:grid-cols-2 lg:grid-cols-3 my-16">
				{/* <CardTwo
					bgColor={"bg-black"}
					body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos fugit illo porro, cumque
						mollitia suscipit consequuntur quaerat voluptas, optio enim ratione quae, blanditiis provident
						similique ipsum iste ipsam quos!"
					borderColor={"border-gray-200"}
					borderRadius={"rounded-full"}
					heading={"This is First Heading"}
					href={"/dayoPage"}
				/>
				<CardTwo
					bgColor={"bg-red-500"}
					borderColor={"border-black"}
					body={"This is what we have been waiting  for since we started writing some javascriptcode in mid september"}
					heading={"This is Second Heading"}
					borderRadius={"rounded-lg"}
					href={"mikePage"}
				/>
				<CardTwo
					href={"dayoSonPage"}
					bgColor={"bg-blue-500"}
					borderColor={"border-black"}
					body={"This is what we have been waiting  for since we started writing some javascriptcode in mid september"}
					heading={"This is Second Heading"}
					borderRadius={"rounded-lg"}
				/> */}
				<CardTwo
					href={"dayoWife"}
					bgColor={"bg-[#839203]"}
					borderColor={"border-green"}
					body={"This is what we have been waiting  for since we started writing some javascriptcode in mid september"}
					heading={"This Fourth Heading"}
					borderRadius={"rounded-sm"}
					innerDivChild={"I just passed this to The GrandParent"}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
