import React, {useState} from 'react';

const CheckNumber = () => {
    const randomCheck = String(Math.ceil(Math.random() * 10))

    const [addNum, setAddNum] = useState('')
    const [randomNum, setRandomNum] = useState(randomCheck)
    const [mess, setMess] = useState('')
    const [chance, setChance] = useState(3)
    const [btn, setBtn] = useState(1)
    const [win, setWin] = useState(Number(localStorage.getItem('win')) || 0)
    const [lose, setLose] = useState(Number(localStorage.getItem('lose')) || 0)
    const [help, toggleHelp] = useState(false)

    const addNumber = (e) => {
        const n = Math.max( Math.min(e.target.value, 10), 0) || ''
        setAddNum(n)

    }

    const randomNumber = () => {
        if (!addNum) {
            setMess('Введите число')
        } else if (addNum === +randomNum) {
            setMess('Вы победили')
            setBtn(2)
            setAddNum('')
            setWin(win + 1)
            localStorage.setItem('win', String(win + 1))

        } else {
            if(chance - 1 === 0){
                setMess('Вы проиграли')
                setBtn(2)
                setAddNum('')
                setLose(lose + 1)
                localStorage.setItem('lose', String(lose + 1))
            }else{
                setChance(chance - 1)
                if(help) {
                    setMess( addNum > randomNum ? 'Перебор' : 'Недобор')
                }else {
                    setMess('Попробуйте еще раз')
                }
                setAddNum('')
            }
            setChance(chance - 1)
        }
    }

    const ClearRating = () => {
        setWin(0)
        setLose(0)
        localStorage.setItem('win', 0)
        localStorage.setItem('lose', 0)
    }

    const playAgain = () => {
        setChance(3)
        setRandomNum(randomCheck)
        setBtn(1)
        setMess('')
        setAddNum('')
    }

    const turnHelp = (e) => {
        toggleHelp(e.target.checked)
    }


    return (
        <div>
            <input onChange={addNumber} value={addNum} type="number"/>
            {btn === 1 && <button disabled={!addNum} onClick={randomNumber} type='button'>Play</button>}
            {btn === 2 && <button onClick={playAgain} type='button'>Play Again</button>}
            <label>
                С подсказками
                <input onChange={turnHelp} type="checkbox"/>
            </label>
            <div>Попыток осталосбь:{chance}</div>
            <div>{mess}</div>
            <div>Win:{win}</div>
            <div>Lose:{lose}</div>
            <button onClick={ClearRating} type='button'>Clear</button>
        </div>
    );
};

export default CheckNumber;