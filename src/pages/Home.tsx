import "./Home.css";

function Home() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1>Cheryl Lane</h1>
                </div>
                <div className="card-text">
                    <p>Welcome to my personal website.</p>
                    <p></p>
                    <p>
                        It's a work in progress, I'm uploading this live from my
                        working branch,{" "}
                        <a href="https://github.com/cheryllane/personal-site/tree/feature/killer-sudoku">
                            which can be found on GitHub
                        </a>
                        .
                    </p>
                    <p>
                        I've got some simple tools that I've made for myself and
                        host to make them easy second screen tools.
                    </p>
                    <ul>
                        <li>
                            <a href="/killer">Killer Sudoku</a> - I'm a big fan
                            of Killer Sudoku, and like to have a reference to
                            help
                        </li>
                        <li>
                            <a href="/stardew">Stardew</a> - To improve my
                            Japanese reading, I started playing Stardew Valley
                            in Japanese, and I wanted a checklist
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;
