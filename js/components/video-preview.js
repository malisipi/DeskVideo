"use strict";

customElements.define('video-preview',

class extends HTMLElement {
    #root;
    #title;
    #thumbnail;
    #author;
    #onvideo;
    #onauthor;
  
    set title(source) {
        this.#title.innerText = source;
    };
  
    set thumbnail(source) {
        this.#thumbnail.src = source;
    };

    set author(source) {
        this.#author.innerText = source;
    };

    set onvideo(source) {
        this.#onvideo = source;
    };

    set onauthor(source) {
        this.#onauthor = source;
    };

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.#root = document.createElement("div");
        this.#root.className = "root";
        this.#root.addEventListener("click", () => {
            this.#onvideo();
        });
        this.shadowRoot.append(this.#root);

        this.#thumbnail = document.createElement("img");
        this.#thumbnail.className = "thumbnail";
        this.#root.append(this.#thumbnail);

        this.#title = document.createElement("div");
        this.#title.className = "title";
        this.#root.append(this.#title);

        this.#author = document.createElement("div");
        this.#author.className = "author";
        this.#author.addEventListener("click", e => {
            this.#onauthor();
            e.stopPropagation();
        });
        this.#root.append(this.#author);

        let style = document.createElement("style");

        style.textContent = `
        :host {
            position: relative;
            display: block;
            width: 300px;
            height: 220px;
            background: #cccccc;
            color: #111111;
            border-radius: 5px;
        }

        .root {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }

        .thumbnail {
            position: absolute;
            left: 10px;
            top: 10px;
            width: calc(100% - 20px);
            height: calc(100% - 80px);
            border-radius: 5px;
            object-fit: cover;
        }

        .title {
            position: absolute;
            left: 10px;
            bottom: 40px;
            width: calc(100% - 20px);
            height: 20px;
            font-size: 16px;
            display: flex;
            align-items: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .author {
            position: absolute;
            left: 10px;
            bottom: 20px;
            width: calc(50% - 10px);
            height: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        `;
        
        this.shadowRoot.append(style);
    }
    
    connectedCallback() {}
}

);
