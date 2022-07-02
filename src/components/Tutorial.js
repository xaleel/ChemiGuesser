import React, { useEffect } from "react";
import Element from "./TableElement"

export default function Tutorial(props){

    const close = () => {
        props.displayTutorial(false);
    }    

    useEffect(() => {
        let styles = [
            "background: rgb(27, 228, 228)",
            "background: rgb(113, 142, 142)",
            "background: rgb(170, 85, 85)",
            "background: rgb(241, 14, 14)"
        ]
        document.querySelectorAll('#tutorial .element').forEach((el, i) => {
            el.style = styles[i]
        })
    })

    return(
        <div className="h-fit w-[32rem] backdrop-blur-md absolute top-1/2 left-1/2 translate-x-[-50%]
                        translate-y-[-50%] transition-all bg-[#eeeeee40] shadow-settings flex
                        flex-col items-center content-evenly z-20 px-8 py-4 text-xl animate-fade">
            <button className="absolute left-xt top-2 font-bold hover:opacity-80 focus:outline-none" onClick={close}>
                X
            </button>
            <h2 className="text-3xl mb-8 relative">How to play</h2>
            <div id="tutorial">
                <p>
                    Your goal is to guess the mystery element. You make a guess by inputting
                    either the element's name or symbol (the case does not matter). 
                </p>
                <p>
                    If your turn on the easy mode in the settings, atomic numbers will also be accepted. 
                </p>
                <p>
                    Each incorrect guess will appear on the table with a color indicating how
                    close it is to the mystery element.
                </p>
                <p>
                    For example, if the mystery element is Iodine (53), the following guesses would appear as such:
                </p>
                <div className="flex justify-center gap-1 mt-2 mb-4 text-3xl">
                    <Element n="11" name="Sodium" symbol="Na" color={props.color} hover={true} setDisplay={props.setDisplay} theme={props.theme}/>
                    <Element n="25" name="Manganese" symbol="Mn" color={props.color} hover={true} setDisplay={props.setDisplay} theme={props.theme}/>
                    <Element n="47" name="Silver" symbol="Ag" color={props.color} hover={true} setDisplay={props.setDisplay} theme={props.theme}/>
                    <Element n="54" name="Xenon" symbol="Xe" color={props.color} hover={true} setDisplay={props.setDisplay} theme={props.theme}/>
                </div>
            </div>
        </div>
    )
}