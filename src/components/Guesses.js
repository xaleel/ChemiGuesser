import React from "react";

export default function Guesses(props){

    let arr = props.guesses.sort((a, b) => a.distance - b.distance).map(ob => ob.el)

    return(
        <div className="w-full text-center font-bold mt-2">
            <h3 className={props.color}>
                Closest
            </h3>
            {arr.map(el => {
                return(
                    <span className={props.color}>
                        {el + " > "}
                    </span>
                )
            })}
        </div>
    )
}