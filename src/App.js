import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Hero from "./components/Hero";
import "./styles/App.css";
import Partners from "./components/Partners";
import Auctions from "./components/Auctions";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="blur"></div>
        <Hero />
        <Partners />
        <Auctions />
      </BrowserRouter>
    </div>
  );
}

export default App;
