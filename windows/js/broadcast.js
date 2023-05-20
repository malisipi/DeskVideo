"use strict";

dt.broadcast = {
    channels: {
        host: new BroadcastChannel("host"),
        clients: new BroadcastChannel("clients")
    },
    listeners: {
        clients: (e) => {
            if(location.origin!=e.origin) return;
        }
    },
    post: (event, target = dt.broadcast.channels.host) => {
        target.postMessage(event);
    }
}