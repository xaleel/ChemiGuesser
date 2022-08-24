import React, {useState} from "react";
import elements from "../elements";

export default function Input(props){

    const [message, setMessage] = useState("Enter the name or symbol of any element to make your first guess")
    const [winScr, SetWinScr] = useState(false)

    function getPosition(element){
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
            x: left + width / 2,
            y: top + height / 2
        };
    }

    function checkElement(str){
        for (let element of elements()){
            if(element.symbol === str || element.name === str || (props.easy && parseInt(str) > 0 && parseInt(str) < 119)){
                return true;
            }
        }
        return false;
    }

    function win(){
        SetWinScr(true)
        for(let i = 1; i < 119; i++){
            let answer = document.getElementById(props.answer)
            let element = document.getElementById(i)
            let posA = getPosition(element)
            let posB = getPosition(answer)
            let distance = Math.hypot(posA.x - posB.x, posA.y - posB.y) / maxDistance;
            element.style.background = `rgba(${255 * (1 - distance)}, ${255 * distance}, ${255 * distance}, 1)`
            if (element.id === props.answer){
                element.style.border = '3px solid gold'
                setMessage(`You win, the anwer is: ${element.getAttribute('data-name')}`)
            }
        }
        let ids = [...Array(119).keys()].map(n => (n + 1).toString())
        props.setGuess(ids)
    }

    let posA = getPosition(document.getElementById("1"))
    let posB = getPosition(document.getElementById("118"))
    const maxDistance = Math.hypot(posA.x - posB.x, posA.y - posB.y);

    const enter = () => {
        if (winScr){
            restart();
            return;
        }
        let str = document.getElementById('input').value
        str = str[0].toUpperCase() + str.slice(1)
        if (!checkElement(str)){
            setMessage(`No such element: ${str}`)
            return;
        }
        let element = parseInt(str) && props.easy ?
            document.getElementById(str) :
            str.length < 3 ?
            document.querySelector(`[data-symbol="${str}"]`) :
            document.querySelector(`[data-name="${str}"]`)
        if (element.id === props.answer){
            win();
            return;
        }
        setMessage(`Element: ${element.getAttribute('data-name')}`)
        let answer = document.getElementById(props.answer)
        let posA = getPosition(element)
        let posB = getPosition(answer)

        let distance = Math.hypot(posA.x - posB.x, posA.y - posB.y) / maxDistance;
        props.setGuess(props.guess.concat(element.id));

        let guess = {el: element.getAttribute('data-name'), distance: distance}
        let in_array = false;
        for (let i = 0; i < props.guesses.length; i++){
            if (props.guesses[i].el === guess.el){
                in_array = true;
            }
        }
        if (!in_array){
            props.setGuesses(props.guesses.concat(guess))
        }
        console.log(props.guesses)
        
        element.style.background = `rgba(${255 * (1 - distance)}, ${255 * distance}, ${255 * distance}, 1)`;
        document.getElementById('input').value = "";
    }
    
    const press = (ev) => {
        if (ev.code === "Enter"){
            enter();
        }
    };

    const restart = () => {
        setMessage("")
        SetWinScr(false)
        props.setGuess([]);
        props.setGuesses([]);
        props.displaySettings(false);
        props.displayTutorial(false);
        for(let i = 1; i < 119; i++){
            document.getElementById(i).style = "";
        }
    }

    return(
        <div className="w-screen flex flex-col items-center my-6">
            <div className="flex flex-row">
                <input id="input" disabled={winScr} type="text" className="mr-3 opacity-80 focus:outline-none px-1 text-lg rounded shadow-md" onKeyPress={press}/>
                <button className="text-lg bg-slate-500 rounded hover:opacity-90 px-4 py-2 text-white font-bold" onClick={enter}>
                    {winScr ? "Restart" : "Enter"}
                </button>
            </div>
            <p className={props.color}>
                {message}
            </p>
        </div>
    )
}