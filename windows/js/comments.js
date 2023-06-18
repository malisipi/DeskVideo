var dv = {
    type: "comments",
    window_id: -1,
    id: -1,
    embed: false,
    comments: null,
    response: null,
    load: async (id = false) => {
        dv.comments = document.querySelector(".comments");
        if(!id){
            dv.response = await dv.backend.get_video_comments(dv.id, dv.response?.continuation);
            dv.response.id = id;
        } else {
            dv.id = id;
            dv.comments.innerHTML = "";
            dv.response = await dv.backend.get_video_comments(dv.id);
            dv.response.id = id;
        };
        if(dv.response.disabled) {
            console.warn("Comments Disabled");
        } else {
            for(comment_index in dv.response.list){
                let comment = dv.response.list[comment_index];
                let container = document.createElement("div");
                container.className = "comment";
                dv.comments.append(container);
                let thumbnail = document.createElement("img");
                thumbnail.className = "thumbnail";
                thumbnail.setAttribute("draggable", false);
                thumbnail.src = comment.author_thumbnail;
                container.append(thumbnail);
                let content = document.createElement("div");
                content.innerText = dv.__get_text_content(comment.content);
                container.append(content);
            };
        };
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let url_parameters = new URLSearchParams(window.location.search);
    dv.window_id = url_parameters.get("wid");
    if(dv.window_id == -1){
        window.close();
    };
    dv.controller.init();
    dv.embed = url_parameters.get("embed")=="true";
    dv.apply_styles();
    document.querySelector("button").addEventListener("click", () => {
        dv.load();
    });

    dv.broadcast.init();    
    dv.broadcast.post({
        type: "comments_init",
        wid: dv.window_id
    });

    if(!dv.embed){
        document.body.setAttribute("seperate", true);
    };
});