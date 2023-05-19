"use strict";

customElements.define('app-taskbar',

class extends HTMLElement {
    #root;
    #start_button;
    #search_button;

    #get_event_handler = (function_name) => {
        let func = window;
        let path_list = function_name.split(".");
        for(let path_index in path_list){
            func = func[path_list[path_index]];
        }
        return func;
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.#root = document.createElement("div");
        this.#root.className = "root";
        this.shadowRoot.append(this.#root);

        this.#start_button = document.createElement("button");
        this.#start_button.addEventListener("click", ()=>{
        	this.#get_event_handler(this.getAttribute("onstart"))();
        })
        this.#root.append(this.#start_button);

        this.#search_button = document.createElement("button");
        this.#search_button.addEventListener("click", ()=>{
        	this.#get_event_handler(this.getAttribute("onsearch"))();
        })
        this.#root.append(this.#search_button);

        this.#root.append(document.createElement('slot'));

        let style = document.createElement("style");

        style.textContent = `
        :host {
            position: fixed;
            display: block;
        	left: 0px;
            width: 100%;
            height: 30px;
            background: #cccccc;
        }

        .root {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }

        :host([position="top"]){
        	top: 0px;
        }

        :host([position="bottom"]){
        	bottom: 0px;
        }

        button {
            width: 40px;
            height: 30px;
            background: none;
            border: none;
        }

        button:hover {
            background: #fff2
        }
        `;
        
        this.shadowRoot.append(style);
    }
    
    connectedCallback() {
    	this.#start_button.innerText = this.getAttribute("start");
    	this.removeAttribute("start");
    	this.#search_button.innerText = this.getAttribute("search");
    	this.removeAttribute("search");
    }
}

);
