import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Galleries from "./components/Galleries"
function App() {
  return (
    <div className="App">
        <Navbar />
        <HeroSection />
        <Galleries />
        <Footer />
    </div>
  );
}

export default App;
