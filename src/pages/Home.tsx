import "./Home.css";

function Home() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1>Cheryl Lane</h1>
                </div>
                <div className="card-text">
                    <p>Welcome to my portfolio site.</p>
                    <p>
                        It's a work in progress, I'm uploading this live from my
                        working branch,{" "}
                        <a href="https://github.com/cheryllane/personal-site/tree/feature/killer-sudoku">
                            which can be found on GitHub
                        </a>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
