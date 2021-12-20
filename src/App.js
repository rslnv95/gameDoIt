import React, {useState} from 'react';
import GameDoIt from "./components/GameDoIt";
import CheckNumber from "./components/CheckNumber";


const App = () => {
    const [game, setGame] = useState(null)
    return (
        <div>
            {
               !game && <div className="menu">
                   <button type='button' onClick={()=> setGame(1)}>GameDoIt</button>
                   <hr/>
                   <button type='button' onClick={()=> setGame(2)}>GameCheckNumber</button>
               </div>
            }
            {game === 1 && <GameDoIt />}
            {game === 2 && <CheckNumber />}
        </div>
    );
};

export default App;