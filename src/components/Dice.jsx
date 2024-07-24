
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import { useState } from 'react'

function Dice(){
    const [click, setClick] = useState(dice3)
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = Math.floor(Math.random() * dice.length)
    

    return(
        <img onClick={() => {setTimeout(emptyDice, 300),
            setClick(dice[randomDice])}} src={click} alt="dice" />
    )
}

export default Dice;