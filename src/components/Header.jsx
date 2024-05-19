import '../styles/header.css';

function HeaderSection({ currentScore, bestScore }) {
    return (
        <>
        <div className="headerSection">
            <h1>Star Wars Memory Game</h1>
            <div className="scoreBoard">
                <h3 className="currentScore">Score: {currentScore}</h3>
                <h3 className="bestScore">Best Score: {bestScore}</h3>
            </div>
        </div>
        </>
    )
}

export default HeaderSection;