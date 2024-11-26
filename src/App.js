import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Galleries from "./components/Galleries"
import Pologne from "./components/Pologne";
function App() {
  return (
    <div className="App">
        <Navbar />
        <HeroSection />
        <Galleries />
        <Pologne />
        <Footer />
    </div>
  );
}

export default App;
