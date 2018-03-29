import React from 'react';
const VideoDetail=({video})=>{
    if(!video ){
        return(
            <div className="">lOADING . . .</div>
        );
    }
    const videoId=video.id.videoId;
    const url ='http://www.youtube.com/embed/'+videoId;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameborder="0" className="embed-responsive-item">
                    
                </iframe>
            </div>
            <div className="detail">
                <div className="">{video.snippet.title}</div>
                <div className="">{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;