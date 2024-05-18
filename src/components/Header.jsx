function HeaderSection({ currentScore, bestScore }) {
    return (
        <>
            <h1>Star Wars Memory Game</h1>
            <div className="scoreBord">
                <h3 className="currentScore">Score: {currentScore}</h3>
                <h3 className="bestScore">Best Score: {bestScore}</h3>
            </div>
        </>
    )
}

export default HeaderSection;