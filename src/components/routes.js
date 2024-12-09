import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  Layout from '../pages/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Notfound from '../pages/NotFound';
import Detail from "../pages/Detail";

function AppRoutes()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route  path="contact" element={<Contact />}/>
                    <Route  path="/tvshow/:tvShowId" element={<Detail />}/>
                </Route>
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;