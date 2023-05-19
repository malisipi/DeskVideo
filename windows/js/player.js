"use strict";

var dt = {
    response: {},
    video: null,
    controls: {
        play: ()=>{
            if(dt.video.paused){
                dt.video.play();
            } else {
                dt.video.pause();
            }
        },
        pip: () => {
            dt.video.requestPictureInPicture();
        }
    },
    render:{
        player: async (id) => {
            dt.response = await video_backend.get_video(id);
            document.querySelector("video").src = dt.response.sources[1].url;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dt.video = document.querySelector("video");
    dt.render.player(url_parameters.get("id"));
    let controls = document.querySelector(".controls");
    controls.querySelector(".play").addEventListener("click", dt.controls.play);
    controls.querySelector(".pip").addEventListener("click", dt.controls.pip);
});