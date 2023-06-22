"use strict";

var dv = {
    type: "author",
    embed: false,
    window_id: -1,
    author: "",
    response: {},
    render: async (author) => {
        dv.resource = await dv.backend.get_author(author);
        document.querySelector("img.banner").src = dv.resource.banner;
        document.querySelector("img.author").src = dv.resource.thumbnail;
        document.querySelector("div.author").innerText = dv.resource.name;
        if(dv.resource.verified) {
            document.querySelector("div.author").setAttribute("verified", true);
        };
        document.querySelector("div.followers").innerText = dv.resource.followers + " Follower";
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
