import React from "react";

export default function Element(props){
    
    let n = props.n
    let symbol = props.symbol
    let name = props.name
    
    var classNames = require('classnames');
    const classStr = classNames(
        {
            "table-template": !props.f,
            "element-hover": props.display !== "game",
            "text-shadow": props.theme === "dark"
        },
        "element",
        props.color
    )

    const click = () => {
        if (props.display === "game"){
            return;
        }
        if (props.setElementDisplay){
            props.setElementDisplay(name)
            props.setDisplay("element")
        }
    }

    return(
        <div className={classStr} id={props.id} data-symbol={props.symbol} data-name={props.name} onClick={click}>
            {
                (props.display !== "game" || props.guessed) &&
                <>
                    <span className="text-[85%] ml-1">{n}</span>
                    <span className="text-center text-[150%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">{symbol}</span>
                    <span className="text-center text-[60%]">{name}</span>
                </>
            }
        </div>
    )
}