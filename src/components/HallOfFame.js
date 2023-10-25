import React from "react";
import EboardPost from "./EboardPost";

function HallOfFame({hofBoard}) {
console.log(hofBoard)

    return (
        <div>
            <h4>Hall-of-Fame</h4>
            {hofBoard.map(hofPost => {
            return <EboardPost key={hofPost.id} eboard={hofPost}/>
            })}
        </div>
    )
}

export default HallOfFame;