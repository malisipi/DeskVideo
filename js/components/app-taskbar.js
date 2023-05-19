"use strict";

customElements.define('app-taskbar',

class extends HTMLElement {
    #root;
    #start_button;
    #search_button;
    #windows;

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

        this.#windows = document.createElement("div");
        this.#windows.className = "windows"
        this.#root.append(this.#windows);

        let style = document.createElement("style");

        style.textContent = `
        :host {
            position: fixed;
            display: block;
        	left: 0px;
            width: 100%;
            height: 30px;
            background: #cccccc;
            --color: #222222;
            --dark-images: 0;
        }

        .root {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;

            .windows {
                width: 100%;
                -webkit-app-region: drag;
                app-region: drag;
            }

            & button {
                width: 40px;
                height: inherit;
                background: none;
                border: none;
                color: var(--color);
                
                &:hover {
                    background: #fff2
                }

                & img {
                    filter: invert(var(--dark-images));
                }
            }
        }

        :host([position="top"]){
        	top: 0px;
        }

        :host([position="bottom"]){
        	bottom: 0px;
        }
        `;
        
        this.shadowRoot.append(style);
    }
    
    connectedCallback() {
        let start_image = document.createElement("img")
        start_image.src = this.getAttribute("start");
    	this.#start_button.append(start_image);
    	this.removeAttribute("start");

    	let search_image = document.createElement("img")
        search_image.src = this.getAttribute("search");
    	this.#search_button.append(search_image);
    	this.removeAttribute("search");
    }
}

);
