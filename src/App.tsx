import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Stardew from "./pages/Stardew";

const Page = ({ child, title }: { child: JSX.Element; title?: string }) => {
    // Allow an optional title prop to be passed that sets the page title
    if (title) {
        document.title = title;
    }
    return child;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page child={<Home />} />} />
                <Route
                    path="/about"
                    element={<Page child={<AboutMe />} title="About Me" />}
                />
                <Route
                    path="/stardew"
                    element={<Page child={<Stardew />} title="Stardew" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
