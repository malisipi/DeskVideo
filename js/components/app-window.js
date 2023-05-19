"use strict";

customElements.define('app-window',

class extends HTMLElement {
    #icons = { // https://www.npmjs.com/package/@fluentui/svg-icons - MIT License
        minimize: "data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z'/%3E%3C/svg%3E",
        maximize: "data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7zm0 1h7c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5z'/%3E%3C/svg%3E",
        restore: "data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.08 4c.21-.58.77-1 1.42-1H10a3 3 0 013 3v3.5c0 .65-.42 1.2-1 1.41V6a2 2 0 00-2-2H5.08z'/%3E%3Cpath d='M4.5 5h5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 11.5v-5C3 5.67 3.67 5 4.5 5zm0 1a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z'/%3E%3C/svg%3E",
        close: "data:image/svg+xml,%0A%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.59 2.72l.06-.07a.5.5 0 01.63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 01.7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 01-.7-.7L7.29 8 2.65 3.35a.5.5 0 01-.06-.63l.06-.07-.06.07z'/%3E%3C/svg%3E",
    }
    #root;
    #titlebar;
    #titlebar_title;
    #control_events = {
        minimize: () => {
            this.setAttribute("minimized", true);
        },
        maximize: () => {
            this.style.transitionDuration = "250ms";
            this.setAttribute("maximized", true);
        },
        restore: () => {
            this.removeAttribute("maximized");
            setTimeout(() => {
                this.style.transitionDuration = "0ms";
            }, 250);
        },
        close: () => {
            this.remove();
        }
    }

    #set_movable = (__host) => {
        this.#titlebar.onmousedown = function(e, _host = __host) {
            if(__host.hasAttribute("maximized")) return;
            window.__app_window_pointer_x = e.clientX;
            window.__app_window_pointer_y = e.clientY;
            document.body.setAttribute("dragging","true");
            document.onmouseup = function(){
                document.onmouseup = null;
                document.onmousemove = null;
                document.body.removeAttribute("dragging");
            };
            document.onmousemove =  function(e, host = _host) {
                const pointer_x_move = window.__app_window_pointer_x - e.clientX;
                const pointer_y_move = window.__app_window_pointer_y - e.clientY;
                window.__app_window_pointer_x = e.clientX
                window.__app_window_pointer_y = e.clientY;
                host.style.top = (host.offsetTop - pointer_y_move) + 'px';
                host.style.left = (host.offsetLeft - pointer_x_move) + 'px';
            };
        };

        this.#titlebar.ontouchstart = function(e, _host = __host) {
            if(__host.hasAttribute("maximized")) return;
            window.__app_window_pointer_x = e.touches[0].clientX;
            window.__app_window_pointer_y = e.touches[0].clientY;
            document.body.setAttribute("dragging","true");
            document.ontouchend = function(){
                document.ontouchend = null;
                document.ontouchmove = null;
                document.body.removeAttribute("dragging");
            };
            document.ontouchmove =  function(e, host = _host) {
                const pointer_x_move = window.__app_window_pointer_x - e.touches[0].clientX;
                const pointer_y_move = window.__app_window_pointer_y - e.touches[0].clientY
                window.__app_window_pointer_x = e.touches[0].clientX
                window.__app_window_pointer_y = e.touches[0].clientY;
                host.style.top = (host.offsetTop - pointer_y_move) + 'px';
                host.style.left = (host.offsetLeft - pointer_x_move) + 'px';
            };
        };
    }

    set title(source) {
        this.#titlebar_title.innerText = source;
    };

    set extra(source) {
        let titlebar_control = this.shadowRoot.querySelector(".app-titlebar--extra");
        titlebar_control.style.maskImage = "url(\""+source+"\")";
        titlebar_control.style.webkitMaskImage = "url(\""+source+"\")";
        titlebar_control.style.display = "block";
    }

    set onextra(source) {
        let titlebar_control = this.shadowRoot.querySelector(".app-titlebar--extra");
        titlebar_control.addEventListener("click", (e, _source=source, _this=this) => {
            _source(_this);
        });
    }

    set onminimize(source) {
    	let titlebar_control = this.shadowRoot.querySelector(".app-titlebar--minimize");
    	titlebar_control.addEventListener("click", (e, _source=source, _this=this) => {
    	    _source(_this);
    	});
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});

        this.#root = document.createElement("div");
        this.#root.className = "root";
        this.shadowRoot.append(this.#root);

        this.#titlebar = document.createElement("div");
        this.#titlebar.className = "app-titlebar";
        this.#root.append(this.#titlebar);

        this.#set_movable(this);

        this.#titlebar_title = document.createElement("div");
        this.#titlebar_title.className = "app-titlebar--title";
        this.#titlebar_title.innerText = "app-window"
        this.#titlebar.append(this.#titlebar_title);

        let titlebar_controls = document.createElement("div");
        titlebar_controls.className = "app-titlebar--controls"
        this.#titlebar.append(titlebar_controls);

        ["extra","minimize","maximize","restore","close"].forEach(e => {
            let titlebar_control = document.createElement("div");
            titlebar_control.className = "app-titlebar--"+e;
            titlebar_control.style.maskImage = "url(\""+this.#icons[e]+"\")";
            titlebar_control.style.webkitMaskImage = "url(\""+this.#icons[e]+"\")";
            titlebar_control.style.maskRepeat = "no-repeat";
            titlebar_control.style.webkitMaskRepeat = "no-repeat";
            titlebar_control.style.maskPosition = "center";
            titlebar_control.style.webkitMaskPosition = "center";
            titlebar_control.setAttribute("draggable", false);
            titlebar_control.addEventListener("click", this.#control_events[e]);
            titlebar_controls.append(titlebar_control);
        })

        let window_contents = document.createElement("div");
        window_contents.className = "app-content";
        this.#root.append(window_contents);
        
        window_contents.append(document.createElement('slot'));

        let style = document.createElement("style");

        style.textContent = `
        :host {
            position: fixed;
            display: block;
            width: 400px;
            height: 200px;
            background: #cccccc;
            resize: both;
            overflow: hidden;
            border-radius: 10px 10px 5px 5px;
            box-shadow: 2px 2px 4px 2px #000000;
            --titlebar-color: #eeeeee;
            --titlebar-controls-color: #111111;
            --maximized-left: 0px;
            --maximized-right: 0px;
            --maximized-bottom: 0px;
            --maximized-top: 0px;
        }

        .root {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }

        .app-titlebar{
            width: 100%;
            height: 30px;
            background: var(--titlebar-color);
            border-radius: 5px 5px 0 0;
            box-sizing: border-box;
            display: flex;
            box-sizing: border-box;
            padding: 0 0 0 8px;
            justify-content: space-between;
            position: absolute;
            user-select: none;
            color: var(--titlebar-controls-color);
        }

        .app-titlebar--title {
            display: flex;
            align-items: center;
            height: 28px;
            transform: translate(0, 1px);
            overflow: hidden;
            white-space: nowrap;
        }

        .app-titlebar--controls {
            display: flex;
            align-items: center;
        }

        .app-titlebar--minimize, .app-titlebar--maximize, .app-titlebar--restore, .app-titlebar--close, .app-titlebar--extra {
            background-color: var(--titlebar-controls-color);
            height: 16px;
            width: 50px;
        }

        .app-content {
            position: absolute;
            top: 30px;
            left: 0px;
            width: 100%;
            height: 100%;
        }

        :host([maximized]){
            top: var(--maximized-top) !important;
            left: var(--maximized-left) !important;
            width: calc(calc(100% - var(--maximized-left)) - var(--maximized-right)) !important;
            height: calc(calc(100% - var(--maximized-top)) - var(--maximized-bottom)) !important;
            border-radius: 0px;
        }

        :host([maximized]) .app-titlebar {
            border-radius: 0px;
        }

        .app-titlebar--restore, .app-titlebar--extra {
            display: none;
        }

        :host([maximized]) .app-titlebar--restore{
            display: block;
        }

        :host([maximized]) .app-titlebar--maximize{
            display: none;
        }

        :host([minimized]){
            display: none;
        }
        `;
        
        this.shadowRoot.append(style);
    }
    
    connectedCallback() {
        if(this.hasAttribute("title"))
            this.#titlebar_title.innerText = this.getAttribute("title");
    }
}

);
