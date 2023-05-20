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
            document.querySelector("video").src = dt.response.sources.reverse()[0].url;
        }
    },
    visibility:{
        listener: () => {
            if(document.hidden){
                if(!dt.video.paused){
                    setTimeout(async () => {
                        console.log("1");
                        await dt.video.play();
                    }, 1000);
                    dt.controls.time.stop_timer();
                }
            } else {
                dt.controls.time.start_timer();
            }
        },
        register: () => {
            document.addEventListener("visibilitychange", dt.visibility.listener);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    dt.broadcast.channels.clients.onmessage = dt.broadcast.listeners.clients;
    dt.visibility.register();
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
    
    window.addEventListener("beforeunload", function(e){
        dt.broadcast.post({type:"close", id:0});
    }, false);
});
