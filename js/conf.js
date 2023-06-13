"use strict";

dv.conf = {
	init: async () => {
	    let response = await fetch("./config.json");
	    let conf = JSON.parse(await response.text());
	    let topics = Object.keys(conf);
	    for(let topic_index in topics){
	            let topic = topics[topic_index];
	            let flags = conf[topic];
	            for(let flag_index in flags){
	                    let flag = flags[flag_index];
	                    if(await dv.storage.conf.get(flag.conf) == undefined){
	                    	dv.storage.conf.set(flag.conf, flag.default);
	                    }
	            }
	    }
	}
}
