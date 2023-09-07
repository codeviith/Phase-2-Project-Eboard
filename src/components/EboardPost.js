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
        eboard.comment.push(commentInput)
    
        fetch(URL + `${eboard.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comment: eboard.comment
            })
        }).then(data => data.json())
        .then(newObj => setComments([...comments, newObj.comment[newObj.comment.length - 1]]))
    }

    return (
        <p className="post">
            <img src={eboard.image} alt={eboard.id} />
                <ul>
                    <li>Battery: {eboard.battery}</li>
                    <li>Motor Size: {eboard.motor}</li>
                    <li>Gear Ratio: {eboard.gear_ratio}</li>
                    <li>Top Speed(mph): {eboard.top_speed}</li>
                    <p>{<button className="like-button" onClick={updateLikes}>Likes: {likes}</button>}</p>
                    <p>{<button className="delete-button" onClick={() => deletePost(eboard.id)}>Hall-of-Fame</button>}</p>
                </ul>
                <div>
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