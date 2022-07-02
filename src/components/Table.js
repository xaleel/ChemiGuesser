import React from "react";
import Element from "./TableElement"
import elements from "../elements";

export default function Table(props){
    
    let Elements = []
    let fBlock = []
    for (let el of elements()){
        if ((parseInt(el.n) >= 57 && parseInt(el.n) <= 71) || (parseInt(el.n) >= 89 && parseInt(el.n) <= 103)){
            fBlock.push(<Element color={props.color} n={el.n} name={el.name} setElementDisplay={props.setElementDisplay}
                                 symbol={el.symbol} key={el.n} id={el.n} f={true} hover={true} setDisplay={props.setDisplay}
                                 display={props.display} guessed={props.guess.includes(el.n)} theme={props.theme} />)
        } else {
            Elements.push(<Element color={props.color} n={el.n} name={el.name} setElementDisplay={props.setElementDisplay}
                                   symbol={el.symbol} key={el.n} id={el.n} f={false} hover={true} setDisplay={props.setDisplay}
                                   display={props.display} guessed={props.guess.includes(el.n)} theme={props.theme} />)
        }
    }

    return(
        <div id="periodic-table">
            <div className="grid grid-cols-18 grid-rows-7 gap-1 mx-auto w-fit mb-4">
                {Elements}
            </div>
            <div className="grid grid-cols-15 grid-rows-2 gap-1 mx-auto w-fit">
                {fBlock}
            </div>
        </div>
    )
}