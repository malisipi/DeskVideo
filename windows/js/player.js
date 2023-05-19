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
        },
        time: {
            timer: null,
            ignore_change_event: false,
            update: () => {
                dt.controls.time.ignore_change_event = true;
                document.querySelector("fluent-slider.time").value = dt.video.currentTime;
            },
            update_duration: () => {
                document.querySelector("fluent-slider.time").max = dt.video.duration;
            },
            update_current_time: (e) => {
                if(!dt.controls.time.ignore_change_event){
                    dt.video.currentTime = document.querySelector("fluent-slider.time").value;
                } else {
                    dt.controls.time.ignore_change_event = false;
                }
            },
            start_timer : () => {
                dt.controls.time.timer = setInterval(dt.controls.time.update, 750);
            },
            stop_timer: () => {
                clearInterval(dt.controls.time.timer);
            }
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
    dt.video.addEventListener("loadedmetadata", dt.controls.time.update_duration);
    dt.video.addEventListener("play", dt.controls.time.start_timer);
    dt.video.addEventListener("pause", dt.controls.time.stop_timer);
    document.querySelector("fluent-slider.time").addEventListener("change", dt.controls.time.update_current_time);
    dt.render.player(url_parameters.get("id"));
    let controls = document.querySelector(".controls");
    controls.querySelector(".play").addEventListener("click", dt.controls.play);
    controls.querySelector(".pip").addEventListener("click", dt.controls.pip);
});