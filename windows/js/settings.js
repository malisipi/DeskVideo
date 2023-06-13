"use strict";

var dv = {
	__input_element: (data) => {
		let container = document.createElement("div");
		container.className = "container";
		document.body.append(container);
		let title = document.createElement("div");
		title.innerText = data.title;
		title.title = data.description;
		container.append(title);
		let input = document.createElement("input");
		input.setAttribute("_conf", data.conf);
		input.setAttribute("_type", data.type);
		if(data.type == "bool") {
			if(data.indeterminable) {
				input.setAttribute("_indeterminable", true);
			}
		}
		input.addEventListener("change", async (event) => {
			let element = event.target;
			let conf = element.getAttribute("_conf");
			let typ = element.getAttribute("_type");
			let value = element.value;
			if(typ == "bool"){
				if(element.checked){
					value = 1;
				} else {
					value = -1;
				}
			}
			await dv.storage.conf.set(conf, value);
		});
		let input_container = document.createElement("div");
		input_container.className = "input";
		input_container.append(input);
		let revert = document.createElement("img");
		revert.setAttribute("draggable", false);
		revert.src = "../assets/fluent-icons/arrow_undo_16_regular.svg";
		revert.setAttribute("_conf", data.conf);
		revert.setAttribute("_default", data.default);
		revert.addEventListener("click", async (event) => {
			let conf = event.target.getAttribute("_conf");
			let _default = event.target.getAttribute("_default");
			await dv.storage.conf.set(conf, _default);
			let input = [... document.querySelectorAll("input")].filter(
				(element, _, __, _conf = conf) => {
					return element.getAttribute("_conf") == _conf;
				})[0];
			let type = input.getAttribute("_type");
			let indeterminable = input.getAttribute("_indeterminable");
			if(type == "bool"){
				if(indeterminable && _default == 0){
					input.indeterminate = true;
				} else {
					input.checked = _default == 1;
				}
			} else {
				input.value = _default;
			}
		});
		input_container.append(revert);
		container.append(input_container);
		return input;
	},
	add: async (data) => {
		switch (data.type) {
			case "title": {
				let title = document.createElement("p");
				title.className = "title";
				title.innerText = data.title;
				document.body.append(title);
				break;
			}
			case "text": {
				let input = dv.__input_element(data);
				input.value = await dv.storage.conf.get(data.conf) || data.default; // dv.conf.get
				break;
			}
			case "bool": {
				let input = dv.__input_element(data);
				input.type = "checkbox";
				input.indeterminate = data.indeterminable;
				let user_data = await dv.storage.conf.get(data.conf);
				input.checked = (user_data == undefined) ? data.default == 1 : user_data == 1;
				break;
			}
			case "color": {
				let input = dv.__input_element(data);
				input.type = "color";
				input.value = await dv.storage.conf.get(data.conf) || data.default;
				break;
			}
		}
	},
	init: async () => {
		dv.apply_styles();
		let response = await fetch("../config.json");
		let conf = JSON.parse(await response.text());
		let topics = Object.keys(conf);
		for(let topic_index in topics){
			let topic = topics[topic_index];
			await dv.add({
				"type": "title",
				"title": topic
			});
			let flags = conf[topic];
			for(let flag_index in flags){
				let flag = flags[flag_index];
				await dv.add(flag);
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", dv.init);
