"use strict";

var dv = {
	type: "main",
	force_window: false,
	hide_all: skip => {
		let list = ["trends", "search", "liked"];
		for(let item_index in list){
			let item = list[item_index];
			if(item==skip) continue;
			if(document.body.hasAttribute(item)){
				document.body.removeAttribute(item);
			}
		}
	},
	toggle: {
		it: (item, cb=()=>{}) => {
			if(document.body.hasAttribute(item)){
				document.body.removeAttribute(item);
				cb(false);
			} else {
				document.body.setAttribute(item, true);
				cb(true);
			}
		},
		trends: () => {
			dv.hide_all("trends");
			dv.toggle.it("trends");
		},
		search: () => {
			dv.hide_all("search");
			dv.toggle.it("search");
		},
		liked: () => {
			dv.hide_all("liked");
			dv.toggle.it("liked", dv.render.liked);
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
				vt.live = video.live;
				vt.time = video.length;
				vt.author_verified = video.author_verified;
				vt.published = video.published;
				vt.onvideo = (id = video.id, title = video.title) => {
					dv.open.video(id, title);
				}
				vt.onauthor = (id = video.author_id) => {
					dv.open.channel(id);
				}
				trends.append(vt);
			});
		},
		search: async () => {
			let videos = document.querySelector(".dt-search").querySelector(".videos");
			let api = await video_backend.search_videos(document.querySelector("input.search").value, dv.network_saving);
			videos.innerHTML = "";
			api.forEach(video => {
				let vt = document.createElement("video-preview");
				vt.thumbnail = video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.live = video.live;
				vt.time = video.length;
				vt.author_verified = video.author_verified;
				vt.published = video.published;
				vt.onvideo = (id = video.id, title = video.title) => {
					dv.open.video(id, title);
				}
				vt.onauthor = (id = video.author_id) => {
					dv.open.channel(id);
				}
				videos.append(vt);
			});
		},
		liked: async (render) => {
			if(!render) return;
			let videos = document.querySelector(".dt-liked").querySelector(".videos");
			videos.innerHTML = "";
			let liked_videos = await app_storage.like.list();
			for(let video_index in liked_videos){
				let video_id = liked_videos[video_index];
				let video = await app_storage.like.get(video_id);
				let vt = document.createElement("video-preview");
				vt.thumbnail = "data:image/png;base64,"+video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.published = video.liked_time;
				vt.onvideo = (id = video_id, title = video.title) => {
					dv.open.video(id, title);
				}
				videos.append(vt);
			}
		},
		liked_filter: async () => {
			let dt_liked = document.querySelector(".dt-liked");
			let search = dt_liked.querySelector(".search");
			let videos = dt_liked.querySelector(".videos");
			videos.childNodes.forEach((element, index, list, search_value=search.value.toLocaleLowerCase().toLowerCase()) => {
				if(!element.getAttribute("title").toLocaleLowerCase().toLowerCase().includes(search_value)){
					element.setAttribute("hide", true);
				} else {
					if(element.hasAttribute("hide")) {
						element.removeAttribute("hide");
					}
				}
			});
		}
	},
	init:{
		taskbar: () => {
			let button = document.createElement("button");
			button.addEventListener("click", dv.toggle.liked);
			document.querySelector("app-taskbar").shadowRoot.querySelector(".root").append(button);

			let image = document.createElement("img");
			image.src = "./assets/fluent-icons/thumb_like_16_regular.svg";
			button.append(image);
		},
		window: (_window) => {
			if(!navigator.platform?.includes("Win")){
				_window.setAttribute("titlebar-style", "linux");
			}

			if(dv.mobile) return;
			_window.extra = "./assets/fluent-icons/window_new_16_regular.svg";
			_window.onextra = (__window) => {
				if(__window.classList[0] == "video"){
					__window.querySelector("iframe").contentWindow.dv.trigger_close = false;
				}
				window.open(__window.querySelector("iframe").src.replace("&embed=true","&embed=false"), "_blank", "popup=yes");
				__window.remove();
			};
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	video_backend.network_saving = dv.network_saving;
	
	dv.broadcast.init();
	dv.init.taskbar();
	dv.render.trends();

	let dt_search = document.querySelector(".dt-search");
	let dt_search_search = dt_search.querySelector("input.search");
	dt_search_search.addEventListener("change", dv.render.search);
	dt_search.querySelector("button").addEventListener("click", dv.render.search);

	let dt_liked = document.querySelector(".dt-liked");
	let dt_liked_search = dt_liked.querySelector("input.search");
	dt_liked_search.addEventListener("keypress", dv.render.liked_filter);
	dt_liked.querySelector("button").addEventListener("click", dv.render.liked_filter);
});
