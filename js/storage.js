"use strict";

dv.storage = {
    keys: {
        likes: "dv|likes",
        conf: "dv|conf"
    },
    like: {
        get: async (id, only_state = false, c = true) => {
            try {
                let likes = await idbKeyval.get(dv.storage.keys.likes);
                if(only_state) {
                    return !!(likes[id]);
                }
                return likes[id];
            } catch {
                if(!c) return;
                await idbKeyval.set(dv.storage.keys.likes, {});
                return dv.storage.like.get(id, false);
            }
        },
        set: async (id, state, properties = {title: "<Null>", author:"<Author>", thumbnail:"", time:0}) => {
            let likes = await idbKeyval.get(dv.storage.keys.likes);
            if(state){
                likes[id] = properties;
            } else {
                delete likes[id];
            }
            await idbKeyval.set(dv.storage.keys.likes, likes);
        },
        list: async () => {
            return Object.keys(await idbKeyval.get(dv.storage.keys.likes));
        }
    },
    conf: {
    	get: async (id) => {
    		try {
    			let conf = await idbKeyval.get(dv.storage.keys.conf);
    			return conf[id];
    		} catch {
    		    await idbKeyval.set(dv.storage.keys.conf, {});
    			return dv.storage.conf.get(id);
    		}
    	},
    	set: async (id, value) => {
    		try {
    			let conf = await idbKeyval.get(dv.storage.keys.conf);
    			conf[id] = value;
    			await idbKeyval.set(dv.storage.keys.conf, conf);
    		} catch {
    		    await idbKeyval.set(dv.storage.keys.conf, {});
    			return dv.storage.conf.set(id, value);
    		}
    	}
    }
};
