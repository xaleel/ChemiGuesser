import React from "react";


export default function Settings(props){

    const dark = () => {
        let btn = document.getElementById("btn1")
        btn.setAttribute("aria-checked", String(!(btn.ariaChecked === "true")))
        if (btn.ariaChecked === "true"){
            document.getElementById("btn-sp1").style.left = "calc(1.75rem - 2px)";
            props.setTheme('dark')
        } else {
            document.getElementById("btn-sp1").style.left = "2px";
            props.setTheme('light')
        }
    }

    const easy = () => {
        let btn = document.getElementById("btn2")
        btn.setAttribute("aria-checked", String(!(btn.ariaChecked === "true")))
        if (btn.ariaChecked === "true"){
            document.getElementById("btn-sp2").style.left = "calc(1.75rem - 2px)";
            props.setEasy(true)
        } else {
            document.getElementById("btn-sp2").style.left = "2px";
            props.setEasy(false)
        }
    }

    const close = () => {
        props.displaySettings(false)
    }

    var classNames = require('classnames');
    const btn1Class = classNames(
        "rounded-xl relative h-6 w-12 focus:outline-none",
        {
            "bg-gray-500": props.theme === 'light',
            "bg-green-700/75": props.theme === 'dark'
        }
    )
    const span1Class = classNames(
        "absolute h-5 w-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-100",
        "shadow-inner shadow-gray-400 transition-all",
        {
            "left-sw_l": props.theme === 'light',
            "left-sw_r": props.theme === 'dark'
        }
    )
    const btn2Class = classNames(
        "rounded-xl relative h-6 w-12 focus:outline-none",
        {
            "bg-gray-500": !props.easy,
            "bg-green-700/75": props.easy
        }
    )
    const span2Class = classNames(
        "absolute h-5 w-5 top-1/2 -translate-y-1/2 rounded-full bg-gray-100",
        "shadow-inner shadow-gray-400 transition-all",
        {
            "left-sw_l": !props.easy,
            "left-sw_r": props.easy
        }
    )

    return(
        <div className="h-fit w-96 backdrop-blur-md absolute top-1/2 left-1/2 translate-x-[-50%]
                        translate-y-[-50%] transition-all bg-[#eeeeee40] shadow-settings flex
                        flex-col items-center content-evenly z-20 px-8 py-4 text-xl animate-fade">
            <button className="absolute left-x top-2 font-bold hover:opacity-80 focus:outline-none" onClick={close}>
                X
            </button>
            <h2 className="text-3xl mb-8 relative">Settings</h2>
            <div className="flex justify-between items-center w-full border-b border-gray-500 mb-4">
                <h4 className="mb-2">Dark Theme</h4>
                <button id="btn1" aria-checked={props.theme === 'dark'} onClick={dark} className={btn1Class}>
                    <span id="btn-sp1" className={span1Class}></span>
                </button>
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-500 mb-4">
                <h4 className="mb-2">
                    Easy mode 
                    <span className="text-sm">{" (input atomic number)"}</span>
                </h4>
                <button id="btn2" aria-checked={props.easy} onClick={easy} className={btn2Class}>
                    <span id="btn-sp2" className={span2Class}></span>
                </button>
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-500">
                <h4 className="mb-2">Feedback</h4>
                <a href="mailto: xaleelchess@gmail.com" className="text-blue-600 hover:text-blue-900">Email</a>
            </div>
            <div className="flex justify-between items-center w-full border-b border-gray-500 mb-14">
                <h4 className="mb-2">Source code</h4>
                <a href="https://github.com/xaleel/ChemiGuesser" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">
                    Github
                </a>
            </div>
        </div>
    )
}