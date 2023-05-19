"use strict";

var dt = {
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
		video: async (id, title="") => {
			dt.hide_all();
			let video_window = document.createElement("app-window");
			video_window.title = title;
			document.body.append(video_window);
			let iframe = document.createElement("iframe");
			iframe.src = "./windows/player.html?id="+id+"&embed=true";
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
	}
};

document.addEventListener("DOMContentLoaded", () => {
	dt.render.trends();
});