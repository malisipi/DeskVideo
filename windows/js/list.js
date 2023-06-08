"use strict";

let dt = {
    type: "list",
    embed: false,
    window_id: -1,
    render: {
        list: (video_list) => {
            dt.videos.innerHTML = "";
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
					dt.broadcast.post({
                        type: "player_next",
                        wid: dt.window_id,
                        video_id: id
                    });
				}
				/*video.onauthor = (id = rs_video.author_id) => {
					dt.open.channel(id);
				}*/
                dt.videos.append(video);
            }
        }
    },
    init: () => {
        dt.videos = document.querySelector(".videos");
    
        dt.broadcast.init();    
        dt.broadcast.post({
            type: "list_init",
            wid: dt.window_id
        });
    
        if(!dt.embed){
            document.body.setAttribute("seperate", true);
            window.resizeTo(350, window.outerHeight);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dt.window_id = url_parameters.get("wid");
    if(dt.window_id == -1){
        window.close();
    };
    dt.embed = url_parameters.get("embed")=="true";
    dt.init();
});