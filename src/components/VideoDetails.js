import React, {useState} from "react";
import video from "../data/video";
import Comments from "./Comments";

const VideoDetails = () => {

    const [likes, setLikes] = useState(video.upvotes)
    const [downLikes, setDownLikes] = useState(video.downvotes)
    const [showComments, setShowComments] = useState(true)

    //HANDLES UPVOTES
    function handleLikes() {
        setLikes(likes + 1 )
    };
    //HANDLES DOWNVOTES
    function handleDownLikes() {
        setDownLikes(downLikes + 1 )
    };
    //HIDES COMMENTS
    const handleHiddenComments = () => {
        setShowComments(!showComments)
    };
    //SETS HIDE BUTTONS INNTER TEXT
    const text = showComments ? "Hide" : 'Show';

    return(
        <>
            <h2>{video.title}</h2>
                <p>{video.views} | Upoladed {video.createdAt}</p>
                    <button onClick = {handleLikes}> {likes}👍</button>
                    <button onClick={handleDownLikes}> {downLikes}👎</button>
                    <p><button onClick={handleHiddenComments} >{text} Comments</button></p>
                            <hr></hr> 
                {showComments ? <Comments /> : null }
        </>
    )
};

export default VideoDetails;