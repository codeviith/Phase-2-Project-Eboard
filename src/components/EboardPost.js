import React, {useState} from "react";

function EboardPost({eboard, deletePost, URL}) {
    const [likes, setLikes] = useState(eboard.likes)
    const [comments, setComments] = useState(eboard.comment)
    const [commentInput, setCommentInput] = useState("")

    function updateLikes() {
        fetch(URL + `${eboard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                likes: likes + 1,
            })
        })
        .then(data => data.json())
        .then(updatedEboard => setLikes(updatedEboard.likes))
    }

    function addComment(e) {
        e.preventDefault();
        
        fetch(URL + `${eboard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: [...comments, commentInput]
            })
        }).then(data => data.json())
        .then(newObj => setComments(newObj.comment))
        
        return resetCommentInput(e);
    }

    function resetCommentInput(e) {
        e.target.reset();
    }

    return (
        <p className="post">
            <img src={eboard.image} alt={eboard.id} />
                <div className="specs">
                    <p>Battery: {eboard.battery}</p>
                    <p>Motor Size: {eboard.motor}</p>
                    <p>Gear Ratio: {eboard.gear_ratio}</p>
                    <p>Top Speed(mph): {eboard.top_speed}</p>
                    <p>{<button className="like-button" onClick={updateLikes}>Likes: {likes}</button>}</p>
                    <p>{<button className="delete-button" onClick={() => deletePost(eboard.id)}>Hall-of-Fame</button>}</p>
                </div>
                <span className="comment-section">Comments:</span>
                <div className="displayed-comments">
                    {comments.map(comment => {
                        return <li>{comment}</li>
                    })}
                </div>
                <form onSubmit={addComment} className="comment-form">
                    <input className="comment-input" type="text" 
                    placeholder="Enter Your Comments Here" 
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button className="comment-button">Submit Comment</button>
                </form>
        </p>
    )
}

export default EboardPost;