import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Stardew from "./pages/Stardew";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/stardew" element={<Stardew />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
