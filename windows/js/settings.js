"use strict";

var dv = {
	add: (data) => {
		switch (data.type) {
			case "title": {
				let title = document.createElement("p");
				title.className = "title";
				title.innerText = data.title;
				document.body.append(title);
				break;
			}
			case "text": {
				let cont = document.createElement("div");
				cont.className = "container";
				document.body.append(cont);
				let title = document.createElement("div");
				title.innerText = data.title;
				title.title = data.description;
				cont.append(title);
				let input = document.createElement("input");
				input.value = data.default; // dv.conf.get
				cont.append(input);
				break;
			}
			case "bool": {
				let cont = document.createElement("div");
				cont.className = "container";
				document.body.append(cont);
				let title = document.createElement("div");
				title.innerText = data.title;
				title.title = data.description;
				cont.append(title);
				let input = document.createElement("input")
				input.type = "checkbox";
				input.indeterminate = data.indeterminable;
				input.checked = data.default == 1; // dv.conf.get
				cont.append(input);
				break;
			}
			case "color": {
				let cont = document.createElement("div");
				cont.className = "container";
				document.body.append(cont);
				let title = document.createElement("div");
				title.innerText = data.title;
				title.title = data.description;
				cont.append(title);
				let input = document.createElement("input")
				input.type = "color";
				input.value = data.default;
				cont.append(input);
				break;
			}
		}
	},
	init: async () => {
		let response = await fetch("../config.json");
		let conf = JSON.parse(await response.text());
		let topics = Object.keys(conf);
		for(let topic_index in topics){
			let topic = topics[topic_index];
			dv.add({
				"type": "title",
				"title": topic
			});
			let flags = conf[topic];
			for(let flag_index in flags){
				let flag = flags[flag_index];
				dv.add(flag);
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", dv.init);
