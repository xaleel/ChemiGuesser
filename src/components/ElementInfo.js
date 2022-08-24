import React, { useState } from "react";

export default function ElementInfo(props){
    
    const wiki = require('wikipedia');

    let [content, setContent] = useState("");

    (async () => {
        try {
            let query = props.element === "Mercury" ? "Mercury (element)" : props.element
            const page = await wiki.page(query);
            const intro = await page.intro({redirect: false});
            setContent(intro)
        } catch (error) {
            console.log(error);
        }
    })();

    return(
        <div className="p-6 relative">
            {
                !content &&
                <div className="absolute animate-spin left-1/2 top-8 text-slate-500">
                    <i className="fa-solid fa-spinner text-4xl"></i>
                </div>
            }
            
            <div className={props.color}>
                {
                    content &&
                    <div className="w-full flex justify-center text-3xl mb-4 font-bold">
                        <h3>{props.element}</h3>
                    </div>
                }
                {
                    content.split('\n').map(paragraph => {
                        return (
                            <p className="text-lg mb-1">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                {paragraph}
                            </p>
                        )
                    })
                }
            </div>
            {
                content &&
                <div className="w-full flex justify-center text-xl text-blue-600 hover:text-blue-900 mt-3">
                    <a href={`https://en.wikipedia.org/wiki/${props.element}`} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-wikipedia-w mr-2"></i>
                        Read more
                    </a>
                </div>
            }
        </div>
    )

}