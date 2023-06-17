"use strict";

var dv = {
    type: "splited-player",
    embed: false,
    view_id: -1,
    features: {
        splited_playing: {}
    },
    init: async () => {
        document.addEventListener("contextmenu", e => {
            e.preventDefault();
            return false;
        });
    
        let url_parameters = new URLSearchParams(window.location.search);
        dv.view_id = url_parameters.get("view");
    
        if(await dv.storage.conf.get("use-custom-screen-config") == -1 
            && "getScreenDetails" in window){
                dv.features.splited_playing.screens = (await window.getScreenDetails()).screens;
        } else {
            let screen_conf = await dv.storage.conf.get("screen-config");
            dv.features.splited_playing.screens = JSON.parse(screen_conf);
        };
    
        dv.features.splited_playing.screen = dv.features.splited_playing.screens[dv.view_id];
        let canvas = document.querySelector("canvas");
        canvas.width = dv.features.splited_playing.screen.width;
        canvas.height = dv.features.splited_playing.screen.height;
        dv.features.splited_playing.canvas_ctx = canvas.getContext("2d");
        document.body.addEventListener("click", () => {
            document.body.requestFullscreen()
        });
        document.body.addEventListener("contextmenu", event => {
            event.preventDefault();
            return false
        });
    }
};

document.addEventListener("DOMContentLoaded", dv.init);