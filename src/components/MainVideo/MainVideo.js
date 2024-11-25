import React from "react";
import {useEffect} from 'react';
import "./MainVideo.css";
import MainVideoSource from '../../assets/Moana2OfficialTrailer.mp4';
import PlayCircle from '../../assets/PlayCircle.svg';
import Poster from '../../assets/MainVideoPoster.jpg'


function MainVideo() {
    useEffect(() => {
        const videoContainer = document.querySelector('.video-container');
        const video = document.querySelector('.video-player');
        const overlay = document.querySelector('.overlay');

        function playVideo() {
            video.play();
            overlay.style.opacity = '0';
        }
        function pauseVideo() {
            video.pause();
            overlay.style.opacity = '1';
        }

        videoContainer.addEventListener('mouseenter', playVideo);
        videoContainer.addEventListener('mouseleave', pauseVideo);

        return() => {
            videoContainer.removeEventListener('mouseenter', playVideo);
            videoContainer.removeEventListener('mouseleave', pauseVideo);
        };

    }, []);

    return (
        <div className="video-container">
            <div className="video-upper-text">
                <a href="https://www.youtube.com/watch?v=hDZ7y8RP5HE" className="link-main-video">
                    Moana 2 | “We’re Back” | Official Trailer
                </a>
            </div>
            <div className="container-gradient-video">
                <div className="gradient-video-player"></div>
                <video className="video-player" /*poster={Poster}*/
                /*controls autoPlay*/ >
                    <source src={MainVideoSource} type="video/mp4"></source>
                </video>
            </div>
            {/* <div className="overlay">
                <div className="play-button-bottom-text">
                    <p>Découvrez ce qui se trouve au-delà des océans avec Vaiana 2, le 27 novembre au cinéma. </p>
                    <div className="button"><button>En savoir plus</button></div>
                </div>
            </div>  */}
        </div>
    );
};

export default MainVideo;