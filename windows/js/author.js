"use strict";

var dv = {
    type: "author",
    embed: false,
    window_id: -1,
    author: "",
    response: {},
    render: async (author) => {
        dv.response = await dv.backend.get_author(author);
        document.querySelector("img.banner").src = dv.response.banner;
        document.querySelector("img.author").src = dv.response.thumbnail;
        document.querySelector("div.author").innerText = dv.response.name;
        if(dv.response.verified) {
            document.querySelector("div.author").setAttribute("verified", true);
        };
        document.querySelector("div.followers").innerText = dv.response.followers + " Followers";

        let videos = dv.response.videos;
        let div_videos = document.querySelector("div.videos");
        for(let video_index in videos){
            let video = videos[video_index];
            console.log(video);
            let video_tag = document.createElement("video-preview");
            video_tag.title = video.title;
            video_tag.duration = video.duration;
            video_tag.thumbnail = video.thumbnail;
            video_tag.author_verified = video.author_verified;
            video_tag.author = video.author;
            video_tag.published = video.published;
        div_videos.append(video_tag);
        };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dv.window_id = url_parameters.get("wid");
    dv.author = url_parameters.get("id");
    if(dv.window_id < 0){
        dv.window_id = Date.now();
    }
    dv.controller.init();
    dv.embed = url_parameters.get("embed")=="true";
    if(!dv.embed){
        document.body.setAttribute("seperate", true);
    }
    dv.apply_styles();
    dv.broadcast.init();

    window.addEventListener("scroll", () => {
        document.body.style.setProperty('--scroll-x', window.scrollY + "px");
    });

    dv.render(dv.author);
});
