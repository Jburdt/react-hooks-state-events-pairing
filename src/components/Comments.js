import React, { useState } from "react";
import video from "../data/video";

//SHOWS COMMENTS AT THE BOTTOM OF SCREEN
const Comments = () => {

    const [showComments, setShowComments] = useState(false);
    
    return(
    <>
        <h1>{video.comments.length} Comments</h1>     
        {video.comments.map(item => <><h2>{item.user}</h2><p>{item.comment}</p></>)}
    </>    
)};

export default Comments;