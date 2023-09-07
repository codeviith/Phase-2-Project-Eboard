import React from "react";
import EboardPost from "./EboardPost";

function EboardsList ({eboards, deletePost, URL}) {
    return (
        <div className="list">
            {eboards.map(eboard => {
                return <EboardPost key={eboard.id}
                eboard={eboard}
                deletePost={deletePost}
                URL={URL}
                />
            })}
        </div>
    )
}

export default EboardsList;