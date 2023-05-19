"use strict";

var dt = {
	killed_by_another_host: false,
	broadcast:{
		channels: {
			host: new BroadcastChannel("host"),
			clients: new BroadcastChannel("clients")
		},
		listeners: {
			host: (e) => {
				if (location.origin!=e.origin) return;

				if (e.data.type=="close"){
					console.warn("Close window:"+e.data.id);
				} else if (e.data.type=="host_search"){
					dt.broadcast.post({
						type: "host_shutdown"
					}, dt.broadcast.channels.host);
				} else if (e.data.type=="host_shutdown"){
					dt.killed_by_another_host = true;
					window.close();
					location.href = "data:text/html, Another host is already working!";
				}
			}
		},
		post: (event, target = dt.broadcast.channels.clients) => {
			target.postMessage(event);
		}
	},
	hide_all: skip => {
		let list = ["trends", "search"];
		for(let item_index in list){
			let item = list[item_index];
			if(item==skip) continue;
			if(document.body.hasAttribute(item)){
				document.body.removeAttribute(item);
			}
		}
	},
	toggle: {
		it: (item) => {
			if(document.body.hasAttribute(item)){
				document.body.removeAttribute(item);
			} else {
				document.body.setAttribute(item, true);
			}
		},
		trends: () => {
			dt.hide_all("trends");
			dt.toggle.it("trends");
		},
		search: () => {
			dt.hide_all("search");
			dt.toggle.it("search");
		}
	},
	open: {
		video: async (id, title="", popup=false) => {
			dt.hide_all();
			let video_window = document.createElement("app-window");
			video_window.title = title;
			video_window.className = "video";
			document.body.append(video_window);
			let iframe = document.createElement("iframe");
			iframe.src = "./windows/player.html?id="+id+"&embed=true";
			dt.init.window(video_window);
			video_window.onminimize = (_window=video_window, _title=title) => {
				document.querySelector("app-taskbar").new_window(title, (_id, __window=_window) => {
					__window.removeAttribute("minimized");
					document.querySelector("app-taskbar").remove_window(_id);
				});
			}
			video_window.append(iframe);
		}
	},
	render: {
		trends: async () => {
			let trends = document.querySelector(".dt-trends");
			let api = await video_backend.get_trending_videos();
			trends.innerHTML = "";
			api.forEach(video => {
				let vt = document.createElement("video-preview");
				vt.thumbnail = video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.onvideo = (id = video.id, title = video.title) => {
					dt.open.video(id, title);
				}
				vt.onauthor = (id = video.author_id) => {
					dt.open.channel(id);
				}
				trends.append(vt);
			});
		},
		search: async () => {
			let videos = document.querySelector(".dt-search").querySelector(".videos");
			let api = await video_backend.search_videos(document.querySelector("fluent-text-field.search").value);
			videos.innerHTML = "";
			api.forEach(video => {
				let vt = document.createElement("video-preview");
				vt.thumbnail = video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.onvideo = (id = video.id, title = video.title) => {
					dt.open.video(id, title);
				}
				vt.onauthor = (id = video.author_id) => {
					dt.open.channel(id);
				}
				videos.append(vt);
			});
		}
	},
	init:{
		taskbar: () => {
			let button = document.createElement("button");
			button.addEventListener("click",()=>{console.log('hi');})
			document.querySelector("app-taskbar").shadowRoot.querySelector(".root").append(button);

			let image = document.createElement("img");
			image.src = "./node_modules/@fluentui/svg-icons/icons/window_16_regular.svg";
			button.append(image);
		},
		window: (_window) => {
			_window.extra = "./node_modules/@fluentui/svg-icons/icons/window_16_regular.svg";
			_window.onextra = (__window) => {
				window.open(__window.querySelector("iframe").src, "_blank", "popup=yes");
				__window.remove();
			};
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	dt.broadcast.channels.host.onmessage = dt.broadcast.listeners.host;
	dt.init.taskbar();
	dt.render.trends();
	dt.broadcast.post({
		type: "host_search"
	}, dt.broadcast.channels.host);

    window.addEventListener("beforeunload", function(e){
        if(!killed_by_another_host) dt.broadcast.post({type:"host_shutdown"});
    }, false);
});
