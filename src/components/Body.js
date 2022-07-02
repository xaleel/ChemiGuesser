import React, { useState } from 'react';
import Input from "./Input";
import Table from "./Table";
import ElementInfo from "./ElementInfo";

export default function Body(props){

    let [elementDisplay, setElementDisplay] = useState("hydrogen")
    let [guess, setGuess] = useState([])

    const start = () => {
        let id = Math.floor(Math.random() * 118) + 1;
        props.setAnswer(id.toString())
        props.setDisplay('game')
    }

    const back = () => {
        if (guess.length > 0){
            for(let i = 1; i < 119; i++){
                document.getElementById(i).style = ""
            }
        }
        setGuess([]);
        props.setDisplay('full');
        props.displaySettings(false);
        props.displayTutorial(false);
    }

    return(
        <div>
            { props.display === 'game' && <Input easy={props.easy} guess={guess} setGuess={setGuess} answer={props.answer} color={props.color}/> }
            { props.display === 'full' && 
                <div className="w-screen flex justify-center">
                    <button className="text-lg bg-slate-500 rounded hover:opacity-90 px-4 py-2 text-white font-bold" onClick={start}>
                        Start
                    </button>
                </div>
            }
            { props.display !== 'element' && 
                <Table theme={props.theme} color={props.color} guess={guess} display={props.display} setDisplay={props.setDisplay} setElementDisplay={setElementDisplay} />
            }
            { props.display === 'element' && 
                <ElementInfo color={props.color} element={elementDisplay}/>
            }
            { props.display !== 'full' && 
                <div className="absolute left-4 bottom-4">
                    <button className="text-lg bg-slate-500 rounded hover:opacity-90 px-4 py-2 text-white font-bold" onClick={back}>
                        Back
                    </button>
                </div>
            }
        </div>
    )
}