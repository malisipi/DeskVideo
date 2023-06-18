"use strict";

dv.mobile = !!navigator.userAgentData?.mobile || navigator.userAgent.includes("Mobile");
dv.network_saving = navigator.connection?.type == "cellular";
dv.__parse_time = (the_time) => {
    let splited_time = the_time.split(":");
    let parsed_time = Number(splited_time[0]) * 60;
    parsed_time = (parsed_time + Number(splited_time[1])) * 60;
    let [seconds, mseconds] = splited_time[2].split(".");
    parsed_time += Number(seconds) + (Number(mseconds) / 1000);
    return parsed_time;
};
dv.__get_text_content = (html) => {
    return new DOMParser()
            .parseFromString(html.replaceAll("<br>", "\n").replace(">", ">&nbsp;"), "text/html")
                .documentElement.textContent;
}
dv.apply_styles = async () => {
    let accent_color = await dv.storage.conf.get("accent-color");
    if(!!accent_color){
        document.body.style.setProperty("--accent-color", accent_color);
    }
    if(dv.type == "main"){
        if(await dv.storage.conf.get("custom-background")==1){
            let params = await dv.storage.conf.get("custom-background-data");
            document.body.setAttribute("custom-background", true);
            document.body.querySelector("img.background").src = dv.backend.get_random_image(
                Math.round(window.devicePixelRatio * screen.width),
                Math.round(window.devicePixelRatio * screen.height),
                "wolves");
        }
    }
};
dv.controller = {
    titlebar: null,
    taskbar_id: NaN,
    init: () => {
        dv.controller.titlebar = parent.document.querySelector("iframe[src*=\""+document.location.pathname?.split("/")?.at(-1)+"\"][src*=\""+dv.window_id+"\"]")?.parentElement?.shadowRoot?.querySelector(".app-titlebar");
    },
    title: (title) => {
        if (!!dv.controller.titlebar) {
            dv.controller.titlebar.querySelector(".app-titlebar--title").innerText = title;
        }
        document.title = title;
    },
    close: () => {
        if (!!dv.controller.titlebar) {
            dv.controller.titlebar.querySelector(".app-titlebar--close").click();
        }
        /*if(!!dv.controller.taskbar_id >= 0){
            window.top.document.querySelector("app-taskbar").remove_window(dv.controller.taskbar_id);
        }*/
        window.close();
    }
};
dv.open = {
    video: async (id, title = "", external_file = false, file = null) => {
        let window_id = Date.now();
        let window_url = "./windows/player.html?wid=" + window_id + "&title=" + encodeURIComponent(title);

        let window_core = null;
        if(external_file){
            window_url += "&external_file=true";
        } else {
            window_url += "&id=" + id;
        }

        if(!dv.force_window){
            dv.hide_all();
            let video_window = document.createElement("app-window");
            video_window.title = title;
            video_window.className = "video";
            document.body.append(video_window);
            window_core = document.createElement("iframe");
            window_core.src = window_url + "&embed=true";
            dv.init.window(video_window);
            video_window.onminimize = (_window=video_window, _title=title) => {
                document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            video_window.append(window_core);
        } else {
            window_core = window.open(window_url + "&embed=false", "_blank", "popup=yes");
        }

        if(external_file){
            if(window_core.tagName?.toLowerCase() == "iframe"){
                window_core = window_core.contentWindow;
            }

            window_core.addEventListener("DOMContentLoaded", (event, _window_core = window_core, _file = file) => {
                _window_core.dv.render.player(_file);
            });
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
                window.top.document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    window.top.document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            list_window.append(iframe);            
        } else {
            if (await dv.storage.conf.get("floating-list") == 1 && 'documentPictureInPicture' in window) {
                const pip_window = await documentPictureInPicture.requestWindow({width: 300, height: 800});
                pip_window.document.write((await (await fetch("list.html")).text()));
                pip_window.document.write("<window_id>" + window_id + "</window-id>");
                pip_window.document.write("<script src=\"./js/wpip-init.js\"></script>");
            } else {
                window.open(window_url.replace("./windows/", "") + "&embed=false", "_blank", "popup=yes");
            }
        }
    },
    comments: async (window_id = dv.window_id, title = "Comments") => {
        let window_url = "./windows/comments.html?wid="+window_id;

        if(dv.embed){
            window.top.dv.hide_all();
            let comment_window = document.createElement("app-window");
            comment_window.title = title;
            comment_window.className = "comments";
            window.top.document.body.append(comment_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            window.top.dv.init.window(comment_window);
            comment_window.onminimize = (_window=comment_window, _title=title) => {
                window.top.document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    window.top.document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            comment_window.append(iframe);            
        } else {
            window.open(window_url.replace("./windows/", "") + "&embed=false", "_blank", "popup=yes");
        }
    },
    settings: async (title = "Settings") => {
        let old_settings_controller = window.top.document.querySelector("app-window.settings")?.querySelector("iframe")?.contentWindow?.dv?.controller;
        if(await dv.storage.conf.get("disable-windowed-mode") == 1) {
            if(old_settings_controller != undefined){
                old_settings_controller?.close();
                return;
            };
        } else {
            old_settings_controller?.close();
        };

        let window_id = Date.now();
        let window_url = "./windows/settings.html?wid="+window_id;

        if(!dv.force_window){
            window.top.dv.hide_all();
            let settings_window = document.createElement("app-window");
            settings_window.title = title;
            settings_window.className = "settings";
            window.top.document.body.append(settings_window);
            let iframe = document.createElement("iframe");
            iframe.src = window_url + "&embed=true";
            window.top.dv.init.window(settings_window);
            settings_window.onminimize = (_window=settings_window, _title=title) => {
                document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
                    __window.removeAttribute("minimized");
                    document.querySelector("app-taskbar").remove_window(_id);
                });
            }
            settings_window.append(iframe);
        } else {
            window.open(window_url + "&embed=false", "_blank", "popup=yes");
        }
    }
}

dv.dialog = {
    elements: {
        host: null,
        text: null
    },
    close: () => {
        dv.dialog.elements.host.close()
    },
    init: () => {
        if (dv.dialog.elements.host == null) {
            dv.dialog.elements.host = document.createElement("dialog");
            dv.dialog.elements.text = document.createElement("div");
            dv.dialog.elements.text.className = "content";
            dv.dialog.elements.host.append(dv.dialog.elements.text);
            let controls = document.createElement("div");
            controls.className = "controls";
            dv.dialog.elements.host.append(controls);
            let ok_button = document.createElement("button");
            ok_button.addEventListener("click", dv.dialog.close)
            ok_button.innerText = "OK";
            controls.append(ok_button);
            document.body.append(dv.dialog.elements.host);
        }
    },
    alert: (text) => {
        dv.dialog.init();
        dv.dialog.elements.text.innerText = text;
        dv.dialog.elements.host.show();
    }
}

dv.broadcast = {
    channel: new BroadcastChannel("deskvideo"),
    listener: (e) => {
        if (location.origin!=e.origin) return;

        console.log(e.data);
        switch (e.data.type){
            case "player_close": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "list" || dv.type == "comments") {
                        dv.controller.close();
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
                    }
                }
                break;
            }
            case "list_init": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "list") {
                        dv.controller.close();
                    } else if (dv.type == "player"){
                        dv.render.list();
                    };
                };
                break;
            }
            case "comments_update": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "comments"){
                        dv.load(e.data.id);
                    }
                }
                break;
            }
            case "comments_init": {
                if(dv.window_id == e.data.wid){
                    if(dv.type == "comments") {
                        dv.controller.close();
                    } else if (dv.type == "player"){
                        dv.render.comments();
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