"use strict";

var dt = {
    type: "player",
    response: {},
    video: null,
    embed: false,
    external_file: false,
    window_id: -1,
    trigger_close: true,
    controls: {
        play: ()=>{
            if(dt.video.paused){
                dt.video.play();
            } else {
                dt.video.pause();
            }
        },
        pip: (e) => {
            if(document.pictureInPictureElement){
                document.exitPictureInPicture();
            } else {
                dt.video.requestPictureInPicture();
            }
        },
        fullscreen: () => {
            if(document.fullscreenElement){
                document.exitFullscreen();
                screen.orientation.unlock();
            } else {
                document.body.requestFullscreen();
                screen.orientation.lock('landscape');
            }
        },
        playrate: (e) => {
            dt.video.playbackRate = Number(e.target.value);
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
    extended_controls: {
        update: {
            like: async (id) => {
                let like_button = document.querySelector(".extended-controls .like");
                if(await app_storage.like.get(id, true)){
                    like_button.setAttribute("true", true);
                } else {
                    if(like_button.hasAttribute("true")){
                        like_button.removeAttribute("true");
                    };
                };
            }
        },
        share: async () => {
            let share_url = location.href.replace("embed=true","embed=false");
            if("share" in navigator){
                await navigator.share({title:document.title, url:share_url})
            } else {
                await navigator.clipboard.writeText(share_url);
            }
        },
        like: async (e) => {
            if(Object.keys(dt.response).length == 0) return;
            if(e.target.hasAttribute("true")){
                await app_storage.like.set(dt.response.id, false);
            } else {
                await app_storage.like.set(dt.response.id, true, {
                    title: dt.response.title,
                    author: dt.response.author,
                    thumbnail: await imageToBase64(dt.response.thumbnail),
                    liked_time: Date.now()/1000
                }); /* data:image/png;base64,(content) */
            };

            await dt.extended_controls.update.like(dt.response.id);
        }
    },
    render:{
        player: async (id) => {
            if(typeof(id)=="string"){
                dt.response = await video_backend.get_video(id);
                if(dt.response.live){ 
                    console.warn("Live Videos is not supported atm!");
                };
                document.title = dt.response.title;
                document.querySelector("video").src = dt.response.sources.reverse()[0].url;
                document.querySelector(".info .name").innerText = dt.response.title;
                document.querySelector(".info div.author").innerText = dt.response.author;
                document.querySelector(".info img.author").src = dt.response.author_thumbnail;
                dt.extended_controls.update.like(id);

                dt.render.list();
            } else {

                // Create blob URL
                let file=await id.getFile()
                let file_arraybuffer = await file.arrayBuffer()
                let file_blob = new Blob([file_arraybuffer], { type: 'application/octet-stream' });
                let file_url = URL.createObjectURL(file_blob);

                document.querySelector("video").src = file_url; // blob
                let file_title = id.name.split(".")[0];
                document.title = file_title;
                document.querySelector(".info .name").innerText = file_title;
                document.querySelector(".info div.author").innerText = "Unknown";
                document.querySelector(".info img.author").src = "../node_modules/@fluentui/svg-icons/icons/person_16_regular.svg";
                document.querySelector(".info img.author").style.filter="invert(1)";
            }
        },
        list: () => {
            dt.broadcast.post({
                type: "list_update",
                wid: dt.window_id,
                list: dt.response.next_videos
            });
        }
    },
    visibility:{
        listener: () => {
            if(document.hidden){
                if(!dt.video.paused){
                    setTimeout(async () => {
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
                
                dt.features.use_video_ratio.old_size = [window.outerWidth, window.outerHeight];
                window.onresize = () => {
                    clearTimeout(dt.features.use_video_ratio.timer);
                    dt.features.use_video_ratio.timer = setTimeout(dt.features.use_video_ratio.listener, 225);
                };
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dt.external_file = url_parameters.get("external_file") == "true"
    dt.window_id = url_parameters.get("wid");
    if(!!dt.window_id){
        dt.window_id = Date.now();
    }
    let window_title = url_parameters.get("title");
    if(!!window_title) {
        document.title = window_title;
    } else {
        document.title = "Unknown";
    }

    if(url_parameters.get("embed") == "true"){
    	dt.embed = true;
    	document.body.setAttribute("embed", true);
    };

    dt.broadcast.init();
    dt.visibility.register();

    // fix fluent-select WindowControlsOverlay bug
    let fix_style = document.createElement("style");
    fix_style.innerHTML = `.listbox{app-region:no-drag;-webkit-app-region:no-drag;}`;
    document.querySelector("fluent-select").shadowRoot.append(fix_style);

    dt.video = document.querySelector("video");
    dt.video.addEventListener("loadedmetadata", dt.controls.time.update_duration);

    let controls = document.querySelector(".controls");
    
    // Play/Pause Button
    let play = controls.querySelector(".play");
    play.addEventListener("click", dt.controls.play);
    dt.video.addEventListener("play", (e, _play=play) => {
        _play.setAttribute("true", true);
        dt.controls.time.start_timer();
    });
    dt.video.addEventListener("pause", (e, _play=play) => {
        if(_play.hasAttribute("true")){
            _play.removeAttribute("true");
        }
        dt.controls.time.stop_timer();
    });
    
    // PiP button
    let pip = controls.querySelector(".pip");
    pip.addEventListener("click", dt.controls.pip);
    dt.video.addEventListener('leavepictureinpicture', (e, _pip=pip) => {
        if(_pip.hasAttribute("true")){
            _pip.removeAttribute("true");
        };
    });
    dt.video.addEventListener('enterpictureinpicture', (e, _pip=pip) => {
        _pip.setAttribute("true", true);
    });
    
    document.querySelector("fluent-slider.time").addEventListener("change", dt.controls.time.update_current_time);
    controls.querySelector(".fullscreen").addEventListener("click", dt.controls.fullscreen);
    controls.querySelector(".playrate").addEventListener("change", dt.controls.playrate);
    
    dt.features.use_video_ratio.register();

    window.addEventListener("unload", () => {
        if(dt.trigger_close){
            dt.broadcast.post({
                type: "player_close",
                wid: dt.window_id
            });
        }
    })
    
    // Video loading (from backend or local)
    
    let extended_controls = document.querySelector(".extended-controls");
    
    if(!dt.external_file) {
        extended_controls.querySelector(".like").addEventListener("click", dt.extended_controls.like);
        extended_controls.querySelector(".share").addEventListener("click", dt.extended_controls.share);
        extended_controls.querySelector(".list").addEventListener("click", () => { dt.open.list(); });
        
        dt.render.player(url_parameters.get("id"));
    } else {
        extended_controls.setAttribute("disabled", true);
        if("launchQueue" in window){
            window.launchQueue.setConsumer(
                async (handler)=>{
                    dt.render.player(handler.files[0]);
                }
            );
        }
    }
});
