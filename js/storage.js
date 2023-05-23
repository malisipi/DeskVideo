"use strict";

let app_storage = {
    like: {
        get: async (id, only_state = false, c = true) => {
            try {
                let likes = await idbKeyval.get("dt|likes");
                if(only_state) {
                    return !!(likes[id]);
                }
                return likes[id];
            } catch {
                if(!c) return;
                await idbKeyval.set("dt|likes", {});
                return app_storage.like.get(id, false);
            }
        },
        set: async (id, state, properties = {title: "<Null>", author:"<Author>"}) => {
            let likes = await idbKeyval.get("dt|likes");
            if(state){
                likes[id] = properties;
            } else {
                delete likes[id];
            }
            await idbKeyval.set("dt|likes", likes);
        },
        list: async () => {
            return Object.keys(await idbKeyval.get("dt|likes"));
        }
    }
};