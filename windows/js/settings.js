"use strict";

var dv = {
	__input_binder: (input, data) => {
		input.setAttribute("_conf", data.conf);
		input.setAttribute("_type", data.type);
		if(data.type == "bool") {
			if(data.indeterminable) {
				input.setAttribute("indeterminable", true);
			}
		}
		input.addEventListener("change", async (event) => {
			let element = event.target;
			let conf = element.getAttribute("_conf");
			let typ = element.getAttribute("_type");
			//let indeterminable = !!element.getAttribute("indeterminable");
			let value = element.value;
			if(typ == "bool"){
				if(element.checked){
					value = 1;
				} else {
					value = -1;
				}
			}
			await dv.storage.conf.set(conf, value);
		})
	},
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
				dv.__input_binder(input, data);
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
				dv.__input_binder(input, data);
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
				dv.__input_binder(input, data);
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
