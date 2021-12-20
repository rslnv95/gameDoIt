import {useState} from "react";
import tiny from '../images/tiny.png'
import paper from '../images/paper.png'
import scissors from '../images/scissors.png'


const GameDoIt = () => {
    const localResultPlayer = JSON.parse(localStorage.getItem('resultPlayer') || 0)
    const localResultBot = JSON.parse(localStorage.getItem('resultBot') || 0)

    const [playerRes, setPlayerRes] = useState('')
    const [botRes, setBotRes] = useState('')
    const [result, setResult] = useState('')
    const [playerCounter, setPlayerCounter] = useState(localResultPlayer)
    const [botCounter, setBotCounter] = useState(localResultBot)

    const playerClick = (playerAction) => {
        const botMove = [tiny, scissors, paper]
        const botAction = botMove[Math.floor(Math.random() * 3)]

        if (playerAction === botAction) {
            setResult('Ничья!')
        } else if (
            (playerAction === tiny && botAction === scissors)
            || (playerAction === scissors && botAction === paper)
            || (playerAction === paper && botAction === tiny)
        ) {
            setResult('Вы выйграли!')
            setPlayerCounter(playerCounter + 1)
            localStorage.setItem('resultPlayer', String(playerCounter + 1))
        } else {
            setResult('Вы проиграли!')
            setBotCounter(botCounter + 1)
            localStorage.setItem('resultBot', String(botCounter + 1))
        }

        setPlayerRes(playerAction)
        setBotRes(botAction)
        setBotRes(botAction)

    }

    return (
        <>
            <div className="container">
                <div className="btns">
                    <button type='button' onClick={() => playerClick(tiny)}>Камень</button>
                    <button type='button' onClick={() => playerClick(scissors)}>Ножницы</button>
                    <button type='button' onClick={() => playerClick(paper)}>Бумага</button>
                </div>
                <div>Результат: {result}</div>
                <div>Игрок:{playerCounter}</div>
                <div>Бот:{botCounter}</div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <h3>Player:</h3>
                        <img src={playerRes} alt='playRes' />
                    </div>
                    <div className="col-6">
                        <h3>Bot:</h3>
                        <img src={botRes} alt='botRes' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDoIt