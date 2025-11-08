import "./AboutMe.css";

function AboutMe() {
    return (
        <div className="about-container">
            <div className="card">
                <div className="card-header">
                    <h2>Hi, I'm Cheryl.</h2>
                </div>
                <div className="card-text">
                    <p>
                        I'm{" "}
                        <span className="highlight">quickly passionate</span>{" "}
                        about anything I do.
                    </p>
                    <p>
                        I'm excellent at Googling, at pulling apart a puzzle, at
                        bringing others along for the journey.
                    </p>
                    <p>
                        I bring a new perspective and can see an edge case at 20
                        paces.
                    </p>
                    <p>
                        I've a great memory for that weird issue we fixed 2
                        years ago.
                    </p>
                    <h3>Outside of work</h3>
                    <p>
                        I've a lot of hobbies, including those that have tools
                        here.
                    </p>
                    <p>Among others, I've been doing:</p>
                    <ul>
                        <li>
                            Gardening (I'm chair of my local allotment
                            committee)
                        </li>
                        <li>Leatherworking</li>
                        <li>Reading</li>
                        <li>
                            Exploring new tech (this is written in Vite/React,
                            but I wrote a previous version in Gatsby, and
                            initially wrote the Killer tool in vanilla js)
                        </li>
                        <li>Crocheting (ask me about my desk ghosts!)</li>
                        <li>Sewing</li>
                        <li>Cross stitch</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
