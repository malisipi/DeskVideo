"use strict";

var dt = {
    response: {},
    video: null,
    embed: false,
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
    },
    features: {
        use_video_ratio: {
            timer: null,
            old_size: [0,0],
            listener: () => {
                if(dt.features.use_video_ratio.old_size[1] == window.outerHeight){
                    window.resizeTo(window.outerWidth, window.outerWidth / dt.video.videoWidth * dt.video.videoHeight);
                } else if (dt.features.use_video_ratio.old_size[0] == window.outerWidth) {
                    window.resizeTo(window.outerHeight / dt.video.videoHeight * dt.video.videoWidth, window.outerHeight);
                }
                dt.features.use_video_ratio.old_size = [window.outerWidth, window.outerHeight];
            },
            register: () => {
                if(dt.embed) return;
                    window.onresize = function(){
                    clearTimeout(dt.features.use_video_ratio.timer);
                    dt.features.use_video_ratio.timer = setTimeout(dt.features.use_video_ratio.listener, 225);
                };
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    dt.broadcast.channels.clients.onmessage = dt.broadcast.listeners.clients;
    dt.visibility.register();
    let url_parameters = new URLSearchParams(window.location.search);
    if(url_parameters.get("embed") == "true"){
    	dt.embed = true;
    	document.body.setAttribute("embed", true)
    };

    // fix fluent-select WindowControlsOverlay bug
    let styl = document.createElement("style");
    styl.innerHTML = `.listbox{app-region:no-drag;-webkit-app-region:no-drag;}`;
    document.querySelector("fluent-select").shadowRoot.append(styl);

    dt.video = document.querySelector("video");
    dt.video.addEventListener("loadedmetadata", dt.controls.time.update_duration);
    dt.video.addEventListener("play", dt.controls.time.start_timer);
    dt.video.addEventListener("pause", dt.controls.time.stop_timer);
    document.querySelector("fluent-slider.time").addEventListener("change", dt.controls.time.update_current_time);
    dt.render.player(url_parameters.get("id"));
    let controls = document.querySelector(".controls");
    controls.querySelector(".play").addEventListener("click", dt.controls.play);
    controls.querySelector(".pip").addEventListener("click", dt.controls.pip);

    dt.features.use_video_ratio.register();
    
    window.addEventListener("beforeunload", function(e){
        dt.broadcast.post({type:"close", id:0});
    }, false);
});
