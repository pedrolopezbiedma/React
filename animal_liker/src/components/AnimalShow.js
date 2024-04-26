import { useState } from 'react'

import './AnimalShow.css'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import horse from '../svg/horse.svg'
import heart from '../svg/heart.svg'

const animalSrcs = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ animal }) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' alt='animal' src={ animalSrcs[animal] } />
            <img className='heart' alt='heart' src={ heart } style={{ width: 10 + 10*clicks + 'px'}}/>
        </div>
    )
}

export default AnimalShow;