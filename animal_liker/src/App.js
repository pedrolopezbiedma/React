import { useState } from "react";

import './App.css'
import AnimalShow from "./components/AnimalShow";

const animalPool = ['dog', 'cat', 'bird', 'cow', 'gator', 'horse'];

const getRandomAnimal = () => {
    return animalPool[parseInt(Math.random() * animalPool.length)];
}

const App = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals,getRandomAnimal() ])
    }

    return (
        <div className="app">
            <button onClick={handleClick}>Create an Animal</button>
            <div className="animal-list">
            {
                animals.map((animal, index) => 
                    <AnimalShow key={index} animal={ animal } />
                )
            }
            </div>
        </div>
    )
}

export default App;