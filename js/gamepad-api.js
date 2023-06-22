"use strict";

dv.gamepad = {
    cursor: {
        obj: null,
        acceleration: {
            x: 0,
            y: 0,
            reset: () => {
                [dv.gamepad.cursor.acceleration.x, dv.gamepad.cursor.acceleration.y] = [0, 0];
            }
        },
        x: 200,
        y: 200,
        update: () => {
            dv.gamepad.cursor.x = Math.max(Math.min(window.innerWidth, dv.gamepad.cursor.x), 0);
            dv.gamepad.cursor.y = Math.max(Math.min(window.innerHeight, dv.gamepad.cursor.y), 0);
            dv.gamepad.cursor.obj.style.left = dv.gamepad.cursor.x + "px";
            dv.gamepad.cursor.obj.style.top = dv.gamepad.cursor.y + "px";
        },
        clickable: true,
        get_object: (x = dv.gamepad.cursor.x, y = dv.gamepad.cursor.y, doc = document) => {
            let object = doc.elementFromPoint(x, y);
            console.log(object);
            if(object.tagName.toLowerCase()=="iframe"){
                let cr = object.getBoundingClientRect();
                x = x - cr.x;
                y = y - cr.y;
                object = dv.gamepad.cursor.get_object(x, y, object.contentDocument);
            } else {
                if(object.shadowRoot != null) {
                    object = object.shadowRoot.elementFromPoint(x, y);
                };
            };
            if(!!object?.object){
                return object
            } else {
                return {
                    object: object,
                    x: x,
                    y: y
                }
            }
            
        },
        click: () => {
            let {object, x, y} = dv.gamepad.cursor.get_object();
            if(object.tagName.toLowerCase() == "input" && object.type == "text"){
                object.focus();
            } else if(object.tagName.toLowerCase() == "input" && object.type == "range"){
                let cr = object.getBoundingClientRect();
                object.value = (x - cr.left) / cr.width * (Number(object.max) - Number(object.min)) + Number(object.min);
                
                object.dispatchEvent(new Event("input", {
                    "bubbles": true,
                    "cancelable": true,
                    "value": object.value
                }));
            } else if (object.tagName.toLowerCase() == "select") {
                if(!object.multiple){
                    object.multiple = true;
                    object.setAttribute("multiple_gamepad", true);
                }
            } else if (object.tagName.toLowerCase() == "option") {
                let select = object.parentElement;
                if(select.hasAttribute("multiple_gamepad")){
                    select.multiple = false;
                    select.removeAttribute("multiple_gamepad");
                };
                select.value = object.value;
                select.dispatchEvent(new Event("change", {
                    "bubbles": true,
                    "cancelable": true,
                    "value": object.value
                }));
            } else {
                object.dispatchEvent(new Event("click", {
                    "bubbles": true,
                    "cancelable": true,
                    "x": x,
                    "y": y
                }));
            };
        },
        scroll: (way = 1, object) => {
            if(!object){ 
                object = dv.gamepad.cursor.get_object().object;
            };
            if(!(Object.entries(object.classList).map(e => e[1]).includes("gamepad-noscroll")) && object.scrollHeight > object.clientHeight) {
                object.scrollBy(0, 20 * way);
            } else {
                if(!!object.parentElement) {
                    dv.gamepad.cursor.scroll(way, object.parentElement);
                } else if(!!object?.getRootNode()?.host) {
                    dv.gamepad.cursor.scroll(way, object?.getRootNode()?.host);
                };
            };
        }
    },
    initialized: false,
    gamepad: null,
    init: () => {
        setInterval(dv.gamepad.updater, 30);
        dv.gamepad.initialized = true;
        dv.gamepad.cursor.obj = document.createElement("img");
        dv.gamepad.cursor.obj.className = "cursor";
        dv.gamepad.cursor.obj.src = "./assets/cursor.svg";
        document.body.append(dv.gamepad.cursor.obj);
    },
    maps: {
        ps4: {
            buttons: [
                ["button", 0],
                ["button", 1],
                ["button", 3],
                ["button", 2],
                ["button", 4],
                ["button", 5],
                ["button", 6],
                ["button", 7],
                ["button", 8],
                ["button", 9],
                ["button", 11],
                ["button", 12],
                ["axis", 7, -1],
                ["axis", 7, 1],
                ["axis", 6, -1],
                ["axis", 6, 1],
                ["button", 10]
            ]
        }
    },
    remap: () => {
        let unmapped_gamepad = dv.gamepad.gamepad;
        dv.gamepad.gamepad = {
            index: unmapped_gamepad.index,
            mapping: "standard",
            buttons: []
        };

        let unmapped_buttons = unmapped_gamepad.buttons;
        let unmapped_axes = unmapped_gamepad.axes;
        let button_map = dv.gamepad.maps.ps4.buttons;

        let __get_press_state = (button, button_map, unmapped_buttons, unmapped_axes) => {
            let instruction = button_map[button];
            if (instruction[0] == "button"){
                return unmapped_buttons[instruction[1]].pressed;
            } else { //axis
                return Math.round(unmapped_axes[instruction[1]]) == instruction[2];
            }
        }

        for(let button in button_map){
            dv.gamepad.gamepad.buttons = [...dv.gamepad.gamepad.buttons, {pressed: __get_press_state(button, button_map, unmapped_buttons, unmapped_axes)}]
        }
    },
    updater: () => {
        dv.gamepad.gamepad = navigator.getGamepads()[dv.gamepad.gamepad.index];
        if(dv.gamepad.gamepad.mapping != "standard"){
            dv.gamepad.remap();
        };
        for(let button in dv.gamepad.gamepad.buttons){
            if(dv.gamepad.gamepad.buttons[button].pressed){
                switch(button){
                    case "0": {
                        if(dv.gamepad.cursor.clickable) {
                            dv.gamepad.cursor.click();
                            dv.gamepad.cursor.clickable = false;
                            setTimeout(() => {
                                dv.gamepad.cursor.clickable = true;
                            }, 300);
                        }
                        break;
                    };
                    case "6": {
                        dv.gamepad.cursor.scroll(-1);
                        break;
                    };
                    case "7": {
                        dv.gamepad.cursor.scroll(1);
                        break;
                    };
                    case "12": {
                        dv.gamepad.cursor.y -= 5 + (++dv.gamepad.cursor.acceleration.y);
                        break;
                    }
                    case "13": {
                        dv.gamepad.cursor.y += 5 + (++dv.gamepad.cursor.acceleration.y)
                        break;
                    }
                    case "14": {
                        dv.gamepad.cursor.x -= 5 + (++dv.gamepad.cursor.acceleration.x)
                        break;
                    }
                    case "15": {
                        dv.gamepad.cursor.x += 5 + (++dv.gamepad.cursor.acceleration.x)
                        break;
                    }
                    default: {
                        console.log(button);
                    }
                };
                if(!(["12", "13", "14", "15"].includes(String(button)))){
                    dv.gamepad.cursor.acceleration.reset();
                }
                dv.gamepad.cursor.update();
            };
            if(!dv.gamepad.gamepad.buttons.map(e => e.pressed).includes(true)){
                dv.gamepad.cursor.acceleration.reset();
            }
        };
    },
    handler: event => {
        dv.gamepad.gamepad = event.gamepad;
        dv.gamepad.init();
    },
    register: () => {
        window.addEventListener("gamepadconnected", dv.gamepad.handler);
    }
};