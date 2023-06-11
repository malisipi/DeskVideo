"use strict";

var dv = {
    type: "player",
    response: {},
    video: null,
    audio: null,
    audio_only: false,
    embed: false,
    external_file: false,
    window_id: -1,
    trigger_close: true,
    controls: {
        play: () => {
            if(dv.video.paused){
                dv.video.play();
                if(dv.audio.getAttribute("src") != ""){
                    dv.audio.play();
                }
                dv.features.media_session.update();
                if ("mediaSession" in navigator) {
                    navigator.mediaSession.playbackState = 'playing';
                }
            } else {
                dv.video.pause();
                if(dv.audio.getAttribute("src") != ""){
                    dv.audio.pause();
                }
                if ("mediaSession" in navigator) {
                    navigator.mediaSession.playbackState = 'paused';
                }
            }
        },
        next: () => {
            let next_video_id = dv.response.next_videos[
                Math.round(
                    Math.random() * (Math.min(3, dv.response.next_videos.length)-1)
                )
            ].id;
            dv.render.player(next_video_id);
        },
        pip: () => {
            if(document.pictureInPictureElement){
                document.exitPictureInPicture();
            } else {
                dv.video.requestPictureInPicture();
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
            dv.video.playbackRate = Number(e.target.value);
            dv.audio.playbackRate = Number(e.target.value);
        },
        time: {
            timer: null,
            ignore_change_event: false,
            update: () => {
                dv.controls.time.ignore_change_event = true;
                document.querySelector("input.time").value = dv.video.currentTime;
                if(!dv.audio_only && dv.audio.getAttribute("src") != "" && Math.abs(dv.audio.currentTime-dv.video.currentTime) > 0.2){
                    if(navigator.userAgent.includes("Firefox")){
                        dv.video.currentTime = dv.audio.currentTime;
                    } else {
                        dv.audio.currentTime = dv.video.currentTime;
                    }
                }
            },
            update_duration: () => {
                document.querySelector("input.time").max = dv.video.duration;
            },
            update_current_time: (e) => {
                if(!dv.controls.time.ignore_change_event){
                    let new_time = document.querySelector("input.time").value;
                    dv.video.currentTime = new_time;
                    dv.audio.currentTime = new_time;
                } else {
                    dv.controls.time.ignore_change_event = false;
                }
            },
            start_timer : () => {
                dv.controls.time.stop_timer();
                dv.controls.time.timer = setInterval(dv.controls.time.update, 750);
            },
            stop_timer: () => {
                clearInterval(dv.controls.time.timer);
            }
        },
        audio_only: async () => {
            let the_time = dv.video.currentTime;
            dv.audio_only = !dv.audio_only;
            if(dv.audio_only){
                document.querySelector(".audio-only").setAttribute("true", true);
            } else {
                if(document.querySelector(".audio-only").hasAttribute("true"))
                    document.querySelector(".audio-only").removeAttribute("true");
            }
            await dv.render.player(dv.response.id);
            dv.video.currentTime = the_time;
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
                await navigator.clipboard?.writeText(share_url);
            }
        },
        like: async (e) => {
            if(Object.keys(dv.response).length == 0) return;
            if(e.target.hasAttribute("true")){
                await app_storage.like.set(dv.response.id, false);
            } else {
                await app_storage.like.set(dv.response.id, true, {
                    title: dv.response.title,
                    author: dv.response.author,
                    thumbnail: await imageToBase64(dv.response.thumbnail),
                    liked_time: Date.now()/1000
                }); /* data:image/png;base64,(content) */
            };

            await dv.extended_controls.update.like(dv.response.id);
        }
    },
    render:{
        player: async (id, reload=false) => {
            dv.subtitles.close();

            if(typeof(id)=="string"){ // if video backend
                dv.response = await video_backend.get_video(id, reload);
                
                document.title = dv.response.title;
                dv.video.src = "";
                dv.audio.src = "";
                document.querySelector("img.thumbnail").src = dv.response.thumbnail;

                if(dv.response.live){
                    dv.video.volume = 1;
                    if(Hls.isSupported()) {
                        let hls = new Hls();
                        hls.loadSource(dv.response.hls);
                        hls.attachMedia(dv.video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function() {
                            console.log("@Live");
                            video.play();
                        });
                    }
                } else {
                    if(!dv.audio_only) {
                        dv.video.volume = 0;
                        dv.video.src = dv.response.sources.video.reverse()[0].url;
                        dv.audio.src = dv.response.sources.audio.reverse()[0].url;
                        if(document.body.hasAttribute("audio_only")){
                            document.body.removeAttribute("audio_only");
                        }
                    } else {
                        dv.video.volume = 1;
                        dv.video.src = dv.response.sources.audio.reverse()[0].url;
                        if(!document.body.hasAttribute("audio_only")){
                            document.body.setAttribute("audio_only", true);
                        }
                    }
                }
                document.querySelector(".info .name").innerText = dv.response.title;
                document.querySelector(".info div.author").innerText = dv.response.author;
                document.querySelector(".info img.author").src = dv.response.author_thumbnail;
                dv.extended_controls.update.like(id);
                dv.features.media_session.metadata.title = dv.response.title;
                dv.features.media_session.metadata.artist = dv.response.author;
                if(dv.response.subtitles.length > 0) {
                    if(document.body.hasAttribute("no_subtitles")){
                        document.body.removeAttribute("no_subtitles");
                    }
                } else {
                    document.body.setAttribute("no_subtitles", true);
                }

                dv.render.list();
            } else { // if local

                // Create blob URL
                let file=await id.getFile()
                let file_arraybuffer = await file.arrayBuffer()
                let file_blob = new Blob([file_arraybuffer], { type: 'application/octet-stream' });
                let file_url = URL.createObjectURL(file_blob);

                dv.video.src = file_url; // blob
                let file_title = id.name.split(".")[0];
                document.title = file_title;
                document.querySelector(".info .name").innerText = file_title;
                document.querySelector(".info div.author").innerText = "Unknown";
                document.querySelector(".info img.author").src = "../node_modules/@fluentui/svg-icons/icons/person_16_regular.svg";
                document.querySelector(".info img.author").style.filter="invert(1)";
                dv.features.media_session.metadata.title = file_title;
                dv.features.media_session.metadata.artist = "Unknown";
            }
            dv.features.media_session.update();
        },
        list: () => {
            dv.broadcast.post({
                type: "list_update",
                wid: dv.window_id,
                list: dv.response.next_videos
            });
        }
    },
    visibility:{
        listener: () => {
            if(dv.audio_only) return;
            if(document.hidden){
                console.log("STATE: HIDDEN");
                dv.video.pause();
                dv.controls.time.stop_timer();
            } else {
                console.log("STATE: SHOW");
                dv.video.currentTime = dv.audio.currentTime;
                dv.video.play();
                dv.controls.time.start_timer();
            }
        },
        register: () => {
            if(dv.mobile)
                document.addEventListener("visibilitychange", dv.visibility.listener);
        }
    },
    features: {
        use_video_ratio: {
            timer: null,
            old_size: [0,0],
            listener: () => {
                if(dv.features.use_video_ratio.old_size[1] == window.outerHeight){
                    window.resizeTo(window.outerWidth, window.outerWidth / dv.video.videoWidth * dv.video.videoHeight);
                } else if (dv.features.use_video_ratio.old_size[0] == window.outerWidth) {
                    window.resizeTo(window.outerHeight / dv.video.videoHeight * dv.video.videoWidth, window.outerHeight);
                }
                dv.features.use_video_ratio.old_size = [window.outerWidth, window.outerHeight];
            },
            register: () => {
                if(dv.embed) return;
                
                dv.features.use_video_ratio.old_size = [window.outerWidth, window.outerHeight];
                window.onresize = () => {
                    clearTimeout(dv.features.use_video_ratio.timer);
                    dv.features.use_video_ratio.timer = setTimeout(dv.features.use_video_ratio.listener, 225);
                };
            }
        },
        next_video: () => {
            setTimeout(() => {
                if(dv.video.ended){
                    dv.controls.next();
                }
            }, 3000);
        },
        media_session: {
            register: () => {
                if ("mediaSession" in navigator) {
                    navigator.mediaSession.setActionHandler("play", dv.controls.play);
                    navigator.mediaSession.setActionHandler("pause", dv.controls.play);
                    navigator.mediaSession.setActionHandler('nexttrack', dv.controls.next);
                }
            },
            metadata: {
                title: "DeskVideo",
                artist: "Unknown"
            },
            update: () => {
                setTimeout(() => {
                    navigator.mediaSession.metadata = new MediaMetadata({});
                    if ("mediaSession" in navigator) {
                        navigator.mediaSession.metadata = new MediaMetadata({
                            title: dv.features.media_session.metadata.title,
                            artist: dv.features.media_session.metadata.artist
                        });
                    }
                }, 50);
            }
        }
    },
    subtitles: {
        load: {
            ttml: async (url = dv.response.subtitles[0].url) => {
                await dv.subtitles.close();
                let subtitles = (new DOMParser()).parseFromString(
                    await (
                        await fetch(url, {cache:"force-cache"})
                        ).text(),
                    "application/xml");

                let texts = subtitles.querySelectorAll("*[begin][end]");
                let track = dv.video.addTextTrack("captions");
                track.mode = "showing";

                for(let text_index = 0; text_index < texts.length; text_index++){
                    let text = texts[text_index];
                    let cue = new VTTCue(
                        dv.__parse_time(text.getAttribute("begin")),
                        dv.__parse_time(text.getAttribute("end")),
                        text.innerHTML
                    );
                    cue.line = -3;
                    track.addCue(cue);
                };

            },
        },
        close: async () => {
            if (dv.video.textTracks.length > 0) {
                dv.video.textTracks[dv.video.textTracks.length-1].mode = "disabled";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dv.external_file = url_parameters.get("external_file") == "true"
    dv.window_id = url_parameters.get("wid");
    if(!!dv.window_id){
        dv.window_id = Date.now();
    }
    let window_title = url_parameters.get("title");
    if(!!window_title) {
        document.title = window_title;
    } else {
        document.title = "Unknown";
    }

    if(url_parameters.get("embed") == "true"){
    	dv.embed = true;
    	document.body.setAttribute("embed", true);
    };

    dv.broadcast.init();
    dv.visibility.register();
    dv.features.media_session.register();

    dv.audio = document.querySelector("audio");
    dv.audio.addEventListener("canplay", dv.features.media_session.update);
    dv.video = document.querySelector("video");
    dv.video.addEventListener("canplay", dv.features.media_session.update);
    dv.video.addEventListener("loadedmetadata", dv.controls.time.update_duration);
    dv.video.addEventListener("ended", dv.features.next_video);
    dv.video.addEventListener('error', function() { 
        if(!dv.response.latest){
            dv.render.player(dv.response.id, true);
        }
    });

    let controls = document.querySelector(".controls");
    
    // Play/Pause Button
    let play = controls.querySelector(".play");
    play.addEventListener("click", dv.controls.play);
    dv.video.addEventListener("play", (e, _play=play) => {
        _play.setAttribute("true", true);
        dv.controls.time.start_timer();
    });
    dv.video.addEventListener("pause", (e, _play=play) => {
        if(_play.hasAttribute("true")){
            _play.removeAttribute("true");
        }
        dv.controls.time.stop_timer();
    });
    
    // PiP button
    let pip = controls.querySelector(".pip");
    pip.addEventListener("click", dv.controls.pip);
    dv.video.addEventListener('leavepictureinpicture', (e, _pip=pip) => {
        if(_pip.hasAttribute("true")){
            _pip.removeAttribute("true");
        };
    });
    dv.video.addEventListener('enterpictureinpicture', (e, _pip=pip) => {
        _pip.setAttribute("true", true);
    });
    
    document.querySelector("input.time").addEventListener("input", dv.controls.time.update_current_time);
    document.querySelector("input.time").addEventListener("mousedown", dv.controls.time.update_current_time);
    document.querySelector("input.time").addEventListener("touchstart", dv.controls.time.update_current_time);
    controls.querySelector(".fullscreen").addEventListener("click", dv.controls.fullscreen);
    controls.querySelector(".playrate").addEventListener("change", dv.controls.playrate);
    controls.querySelector(".audio-only").addEventListener("click", dv.controls.audio_only);
    controls.querySelector(".subtitles").addEventListener("click", () => {
        dv.subtitles.load.ttml();
    });

    dv.features.use_video_ratio.register();

    window.addEventListener("unload", () => {
        if(dv.trigger_close){
            dv.broadcast.post({
                type: "player_close",
                wid: dv.window_id
            });
        }
    });

    if(!dv.embed) document.body.setAttribute("seperate", true);
    
    // Video loading (from backend or local)
    
    let extended_controls = document.querySelector(".extended-controls");
    
    if(!dv.external_file) {
        extended_controls.querySelector(".like").addEventListener("click", dv.extended_controls.like);
        extended_controls.querySelector(".share").addEventListener("click", dv.extended_controls.share);
        extended_controls.querySelector(".list").addEventListener("click", () => { dv.open.list(); });
        
        dv.render.player(url_parameters.get("id"));
    } else {
        extended_controls.setAttribute("disabled", true);
        if("launchQueue" in window){
            window.launchQueue.setConsumer(
                async (handler) => {
                    dv.render.player(handler.files[0]);
                }
            );
        }
    }
});
