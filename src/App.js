import './App.css';
import Header from './component/header';
import Counter from './component/counter';
import Footer from './component/footer';
function App() {
  console.log("Good Day")
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      {/* <Counter/> */}
      <Footer/>
    </div>
  );
}

export default App;

