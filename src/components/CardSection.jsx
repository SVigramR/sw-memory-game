import { useState } from 'react'
import '../styles/Cards.css'
import characterData from './character_data';

const data = characterData

function Cards({ currentScore, setCurrentScore, bestScore, setBestScore }) {
    const [characters, setCharacters] = useState(data);
    
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function handleClick(index) {
        if (!characters[index].selected) {
            const updatedCharacters = characters.map((character, i) =>
                i === index ? { ...character, selected: true } : character
            );

            setCurrentScore(currentScore + 1)
            if (bestScore <= currentScore) {
                setBestScore(currentScore + 1)
            }
            const shuffledCharacters = shuffleArray(updatedCharacters);
            setCharacters(shuffledCharacters);
            console.log(shuffledCharacters)
        } else {
            setCurrentScore(0)
            setCharacters(characterData)
        }

    }

    return (
        <>
            <div className="cards">
                {characters.map((character, index) => (
                    <div key={index} className='card' onClick={() => handleClick(index)}>
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards;