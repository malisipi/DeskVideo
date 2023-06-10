"use strict";

dv.mobile = !!navigator.userAgentData?.mobile;
dv.network_saving = navigator.connection?.type == "cellular";
dv.__parse_time = (the_time) => {
    let splited_time = the_time.split(":");
    let parsed_time = Number(splited_time[0]) * 60;
    parsed_time = (parsed_time + Number(splited_time[1])) * 60;
    let [seconds, mseconds] = splited_time[2].split(".");
    parsed_time += Number(seconds) + (Number(mseconds) / 1000);
    return parsed_time;
};
dv.open = {
    video: async (id, title = "", popup = false) => {
        let window_id = Date.now();
        let window_url = "./windows/player.html?wid="+window_id+"&id="+id+"&title="+encodeURIComponent(title);

        if(!popup && !dv.force_window){
            dv.hide_all();
            let video_window = document.createElement("app-window");
            video_window.title = title;
            video_window.className = "video";
            document.body.append(video_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            dv.init.window(video_window);
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
    list: async (window_id = dv.window_id, title = "Playlist") => {
        let window_url = "./windows/list.html?wid="+window_id;

        if(dv.embed){
            window.top.dv.hide_all();
            let list_window = document.createElement("app-window");
            list_window.title = title;
            list_window.className = "list";
            window.top.document.body.append(list_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            window.top.dv.init.window(list_window);
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
                pip_window.document.write("<window_id>" + window_id + "</window-id>");
                pip_window.document.write("<script src=\"./js/wpip-init.js\"></script>");
            } else {
                window.open(window_url.replace("./windows/", "") + "&embed=false", "_blank", "popup=yes");
            }
        }
    },
}

dv.broadcast = {
    channel: new BroadcastChannel("deskvideo"),
    listener: (e) => {
        if (location.origin!=e.origin) return;

        console.log(e.data);
        switch (e.data.type){
            case "player_close": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "list") {
                        window.close();
                        location.href = "data:text/html,Die!"
                    }
                }
                break;
            }
            case "player_next": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "player") {
                        dv.render.player(e.data.video_id);
                    }
                }
                break;
            }
            case "list_update": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "list"){
                        dv.render.list(e.data.list);
                        break;
                    }
                }
            }
            case "list_init": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "list") {
                        window.close();
                        location.href = "data:text/html,Die!"
                    } else if (dv.type == "player"){
                        dv.render.list();
                    };
                };
            }
        }
    },
    post: (e) => {
        dv.broadcast.channel.postMessage(e);
    },
    init: ()=>{
        dv.broadcast.channel.onmessage = dv.broadcast.listener;
    }
};