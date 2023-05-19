"use strict";

dt.broadcast = {
    channels: {
        host: new BroadcastChannel("host"),
        clients: new BroadcastChannel("clients")
    },
    listeners: {
        clients: (e) => {
            if(location.origin!=e.origin) return;

            if (e.data.type == "host_shutdown"){
                window.close();
                location.href = "data:text/html, Host was closed!";
            }
        }
    },
    post: (event, target = dt.broadcast.channels.host) => {
        target.postMessage(event);
    }
}