import React from "react";

export default function Header(props){
    var classNames = require('classnames');
    const classStr = classNames(
        "fixed top-2 h-12 border-b border-b-gray-400 justify-between border-b-1 text-blue w-[40vw] left-1/2 flex items-center px-2 translate-x-[-50%]", 
        props.color
    );
    const settings = () => {
        props.displayTutorial(false);
        if (props.settings){
            props.displaySettings(false);
        } else {
            props.displaySettings(true);
        }
    }

    const tutorial = () => {
        props.displaySettings(false);
        props.displayTutorial(true);
    }

    return(
        <div className={classStr}>
            <button className="text-2xl hover:opacity-90 hover:cursor-pointer" onClick={tutorial}>
                <i className="fa-solid fa-circle-question"></i>
            </button>
            <h1 className="font-bold text-4xl">
                Chem
                <span className="relative -mt-1">
                    <i className="fa-solid fa-vial -rotate-45 -translate-y-1 -ml-1.5 text-2xl relative"></i>
                    <i className="fa-solid fa-atom absolute -ml-1 left-1/2 translate-x-[-40%] -translate-y-1 top-1 text-sm"></i>
                </span>
                Guesser
            </h1>
            <button className="text-2xl hover:opacity-90 hover:cursor-pointer focus:outline-none" onClick={settings}>
                <i className="fa-solid fa-gear"></i>
            </button>
        </div>
    )
}