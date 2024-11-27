import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Galleries from "./components/Galleries"
import Pologne from "./components/Pologne";
import Genre from "./components/Genre"
import Categories from "./components/Categories"
import OriginalProgramms from "./components/OriginalPrograms"
import {Children} from "react";
function App() {
  return (
    <div className="App">
        <Navbar />
        <HeroSection />
        <Galleries />
        <Pologne />
        <Genre />
        <OriginalProgramms />
        <Categories />
        <Footer />
    </div>
  );
}

export default App;
