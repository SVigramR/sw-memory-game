import '../styles/Cards.css'

function Cards({ currentScore, setCurrentScore, bestScore, setBestScore}) {

    function handleClick() {
        setCurrentScore(currentScore + 1)
        if (bestScore <= currentScore) {
            setBestScore(currentScore + 1)
        }
    }

    return (
        <>
            <div className="cards">
                <div className="card" key={0} onClick={handleClick}>
                    Anakin Skywalker
                </div>
                <div className="card" key={1} onClick={handleClick} >
                    Luke Skywalker
                </div>
                <div className="card" key={2} onClick={handleClick}>
                    Obi-Wan Kenobi
                </div>
                <div className="card" key={3} onClick={handleClick}>
                    Ashoka Tano
                </div>
                <div className="card" key={4} onClick={handleClick}>
                    Master Yoda
                </div>
            </div>
        </>
    )
}

export default Cards;