import React from "react";
// import cityVideo from '../../assets/images/4596414.mp4';
import "./welcomeVideo.css"

function welcomeVideo() {
    return (
        <div>
            <video id="background-video" loop autoplay>
                <source src="./4596414.mp4" type="video/mp4" />
                    <source src=".4596414.mp4" type="video/ogg" />
                        Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default welcomeVideo;