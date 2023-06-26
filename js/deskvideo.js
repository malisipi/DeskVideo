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
			let trends = document.querySelector(".dv-trends");
			let api = await dv.backend.get_trending_videos();
			trends.innerHTML = "";
			api.forEach(video => {
				let vt = document.createElement("video-preview");
				vt.thumbnail = video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.live = video.live;
				vt.duration = video.duration;
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
			let videos = document.querySelector(".dv-search").querySelector(".videos");
			let api = await dv.backend.search_videos(document.querySelector("input.search").value, dv.network_saving);
			videos.innerHTML = "";
			api.forEach(video => {
				let vt = document.createElement("video-preview");
				vt.thumbnail = video.thumbnail;
				vt.title = video.title;
				vt.author = video.author;
				vt.live = video.live;
				vt.duration = video.duration;
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
			let videos = document.querySelector(".dv-liked").querySelector(".videos");
			videos.innerHTML = "";
			let liked_videos = await dv.storage.like.list();
			for(let video_index in liked_videos){
				let video_id = liked_videos[video_index];
				let video = await dv.storage.like.get(video_id);
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
			let dt_liked = document.querySelector(".dv-liked");
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
	file: {
		input: null,
		open: (file) => {
			dv.open.video(null, file.name.split(".")[0], true, {
				getFile: async (_file=file) => {
					return _file;
				},
				name: file.name
			});
		},
		load: () => {
			if(dv.file.input == null) {
				dv.file.input = document.createElement("input");
				dv.file.input.type = "file";
				dv.file.input.accept = "video/*";
				dv.file.input.addEventListener("change", event => {
					if(event.target.files.length > 0){
						dv.file.open(event.target.files[0]);
					};
				});
			};
			dv.file.input.click();
		}
	},
	init:{
		taskbar: () => {
			let new_button = (fn, img) => {
				let button = document.createElement("button");
				button.addEventListener("click", fn);
				let image = document.createElement("img");
				image.src = img;
				button.append(image);
				document.querySelector("app-taskbar").shadowRoot.querySelector(".root").append(button);
			}

			new_button(dv.file.load, "./assets/fluent-icons/folder_open_16_regular.svg");
			new_button(dv.toggle.liked, "./assets/fluent-icons/thumb_like_16_regular.svg");
			new_button(() => { dv.open.settings(); }, "./assets/fluent-icons/settings_16_regular.svg");
		},
		window: async (_window) => {
			if(await dv.storage.conf.get("disable-windowed-mode") == 1 || dv.gamepad.initialized) {
				if(_window.classList[0] == "video"){
					let old_video_window = document.querySelector("app-window.video");
					if(old_video_window != _window){
						old_video_window.remove();
					}
				};
				if(_window.classList[0] == "list" || _window.classList[0] == "comments"){
					let old_list_window = document.querySelector("app-window." + _window.classList[0]);
					if(old_list_window != _window){
						old_list_window.remove();
						_window.remove();
						return;
					}
				};
				_window.setAttribute("titlebar-style", "none");
			} else if (navigator.userAgentData?.platform == "macOS"
				|| navigator.userAgent.includes("Mac")
				|| navigator?.windowControlsOverlay?.getTitlebarAreaRect()?.x > 0
				|| await dv.storage.conf.get("left-win-controls") > 0){
					if(await dv.storage.conf.get("left-win-controls") != -1){
						_window.setAttribute("titlebar-style", "macos");
					} else {
						_window.setAttribute("titlebar-style", "linux");
					}
			} else if(navigator.userAgentData?.platform == "Linux" || navigator.userAgent.includes("Linux")){
				_window.setAttribute("titlebar-style", "linux");
			};

			if(!dv.mobile) {
				_window.extra = "./assets/fluent-icons/window_new_16_regular.svg";
				_window.onextra = (__window) => {
					let iframe = __window.querySelector("iframe").contentWindow;
					if(__window.classList[0] == "video"){
						iframe.dv.trigger_close = false;
					}
					let separate_window = window.open(iframe.location.href.replace("&embed=true","&embed=false"), "_blank", "popup=yes");
					if(__window.classList[0] == "video"){
						if(iframe.dv.file_pointer != null){
							let fp = iframe.dv.file_pointer;
							separate_window.addEventListener("DOMContentLoaded", (e, _fp = fp) => {
								separate_window.dv.render.player(_fp);
							});
						}
					}
					__window.remove();
				};
			}
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	dv.storage.conf.init();
	dv.backend.network_saving = dv.network_saving;
	dv.apply_styles();

	dv.broadcast.init();
	dv.init.taskbar();
	dv.render.trends();

	document.body.addEventListener("drop", async event => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		dv.file.open(file);
	}, false);
	document.body.addEventListener("dragover", event => {
		event.preventDefault();
	}, false);

	let dv_search = document.querySelector(".dv-search");
	let dv_search_search = dv_search.querySelector("input.search");
	dv_search_search.addEventListener("change", dv.render.search);
	dv_search.querySelector("button").addEventListener("click", dv.render.search);

	let dv_liked = document.querySelector(".dv-liked");
	let dv_liked_search = dv_liked.querySelector("input.search");
	dv_liked_search.addEventListener("keypress", dv.render.liked_filter);
	dv_liked.querySelector("button").addEventListener("click", dv.render.liked_filter);	

	(async () => {
		if(await dv.storage.conf.get("gamepad-support") == 1){
			dv.gamepad.register();
		};
	})();
});
