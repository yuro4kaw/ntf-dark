import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import '@mantine/carousel/styles.css';

import HeaderComponent from "./components/HeaderComponent";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Auctions from "./components/Auctions";
import HowItWorks from "./components/HowItWorks";

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className="blur"></div>
        <Hero />
        <Partners />
        <Auctions />
        <HowItWorks />
      </BrowserRouter>
    </div>
    </MantineProvider>
  );
}

export default App;
