import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Stardew from "./pages/Stardew";
import Header from "./molecules/Header";
import { MenuLinks } from "./types/MenuLinks";

const pages: MenuLinks = [
    { link: "/about", text: "About Me" },
    { link: "/stardew", text: "Stardew" },
    { link: "/killer", text: "Killer" },
];

const Page = ({ child, title }: { child: JSX.Element; title?: string }) => {
    // Allow an optional title prop to be passed that sets the page title
    if (title) {
        document.title = title;
    }
    return (
        <>
            <Header menuLinks={pages} />
            <div
                style={{
                    position: "relative",
                    top: "2.5em",
                    marginBottom: "2em",
                }}
            >
                {child}
            </div>
        </>
    );
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
