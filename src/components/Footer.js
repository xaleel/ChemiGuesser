import React from "react";

export default function Footer(props){

    var classNames = require('classnames');
    const classStr = classNames(
        "absolute right-0 bottom-0 m-4 text-sm",
        props.color
    )

    return(
        <div className={classStr}>
            by 
            <a href="https://xaleel.github.io/" className="text-blue-600 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                {" Xaleel "}
            </a>
            @ 2022
            <a href="https://github.com/xaleel/ChemiGuesser" className="ml-1 text-blue-600 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    )
}