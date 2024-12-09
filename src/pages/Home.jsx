import HeroSection from "../components/HeroSection";
import Galleries from "../components/Galleries"
import Pologne from "../components/Pologne";
import Genre from "../components/Genre";
import Categories from "../components/Categories";
import OriginalProgramms from "../components/OriginalPrograms";

function Home()
{
    return (
        <>
                <HeroSection/>
                <Galleries/>
                <Pologne/>
                <Genre/>
                <OriginalProgramms/>
                <Categories/>
        </>
    )
}

export default Home;