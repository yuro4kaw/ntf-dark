import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "@mantine/carousel/styles.css";

import HeaderComponent from "./components/HeaderComponent";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Auctions from "./components/Auctions";
import HowItWorks from "./components/HowItWorks";

import { createTheme, MantineProvider } from "@mantine/core";
import PopularCollections from "./components/PopularCollections";
import Categories from "./components/Categories";
import Creators from "./components/Creators";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const theme = createTheme({});

function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Auctions />
      <HowItWorks />
      <PopularCollections />
      <Categories />
      <Creators />
      <Newsletter />
    </>
  );
}

function About() {
  return (
    <>
      <Creators />
    </>
  );
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <HeaderComponent />
          <div className="blur"></div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}

export default App;
