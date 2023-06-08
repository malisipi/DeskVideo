"use strict";

dt.mobile = !!navigator.userAgentData?.mobile;
dt.network_saving = navigator.connection?.type == "cellular";
dt.open = {
    video: async (id, title = "", popup = false) => {
        let window_id = Date.now();
        let window_url = "./windows/player.html?wid="+window_id+"&id="+id+"&title="+encodeURIComponent(title);

        if(!popup && !dt.force_window){
            dt.hide_all();
            let video_window = document.createElement("app-window");
            video_window.title = title;
            video_window.className = "video";
            document.body.append(video_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            dt.init.window(video_window);
            video_window.onminimize = (_window=video_window, _title=title) => {
                document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            video_window.append(iframe);
        } else {
            window.open(window_url + "&embed=false", "_blank", "popup=yes");
        }
    },
    list: async (window_id = dt.window_id, title = "Playlist") => {
        let window_url = "./windows/list.html?wid="+window_id;

        if(dt.embed){
            window.top.dt.hide_all();
            let list_window = document.createElement("app-window");
            list_window.title = title;
            list_window.className = "list";
            window.top.document.body.append(list_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            window.top.dt.init.window(list_window);
            list_window.onminimize = (_window=list_window, _title=title) => {
                document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            list_window.append(iframe);
        } else {
            if ('documentPictureInPicture' in window) {
                const pip_window = await documentPictureInPicture.requestWindow({width: 300, height: 800});
                pip_window.document.write((await (await fetch("list.html")).text()));
                pip_window.document.write("<script>dt.window_id="+window_id+";dt.init();</script>");
            } else {
                window.open(window_url.replace("./windows/", "") + "&embed=false", "_blank", "popup=yes");
            }
        }
    },
}

dt.broadcast = {
    channel: new BroadcastChannel("desktube"),
    listener: (e) => {
        if (location.origin!=e.origin) return;

        console.log(e.data);
        switch (e.data.type){
            case "player_close": {
                if(dt.window_id == e.data.wid){
                    if(dt.type == "list") {
                        window.close();
                        location.href = "data:text/html,Die!"
                    }
                }
                break;
            }
            case "player_next": {
                if(dt.window_id == e.data.wid){
                    if(dt.type == "player") {
                        dt.render.player(e.data.video_id);
                    }
                }
                break;
            }
            case "list_update": {
                if(dt.window_id == e.data.wid){
                    if(dt.type == "list"){
                        dt.render.list(e.data.list);
                        break;
                    }
                }
            }
            case "list_init": {
                if(dt.window_id == e.data.wid){
                    if(dt.type == "list") {
                        window.close();
                        location.href = "data:text/html,Die!"
                    } else if (dt.type == "player"){
                        dt.render.list();
                    };
                };
            }
        }
    },
    post: (e) => {
        dt.broadcast.channel.postMessage(e);
    },
    init: ()=>{
        dt.broadcast.channel.onmessage = dt.broadcast.listener;
    }
};