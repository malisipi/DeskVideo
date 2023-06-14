"use strict";

var dv = {
    type: "list",
    embed: false,
    window_id: -1,
    render: {
        list: (video_list) => {
            dv.videos.innerHTML = "";
            for(let video_index in video_list){
                let rs_video = video_list[video_index];
                console.log(rs_video);
                let video = document.createElement("video-preview");
				video.title = rs_video.title;
				video.author = rs_video.author;
                video.thumbnail = rs_video.thumbnail;
				video.live = rs_video.length == 0;
				video.time = rs_video.length;
				video.onvideo = (id = rs_video.id) => {
					dv.broadcast.post({
                        type: "player_next",
                        wid: dv.window_id,
                        video_id: id
                    });
				}
				/*video.onauthor = (id = rs_video.author_id) => {
					dv.open.channel(id);
				}*/
                dv.videos.append(video);
            }
        }
    },
    init: () => {
        dv.videos = document.querySelector(".videos");
    
        dv.broadcast.init();    
        dv.broadcast.post({
            type: "list_init",
            wid: dv.window_id
        });
    
        if(!dv.embed){
            document.body.setAttribute("seperate", true);
            window.resizeTo(350, window.outerHeight);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dv.window_id = url_parameters.get("wid");
    if(dv.window_id == -1){
        window.close();
    };
    dv.controller.init();
    dv.embed = url_parameters.get("embed")=="true";
    dv.apply_styles();
    dv.init();
});
