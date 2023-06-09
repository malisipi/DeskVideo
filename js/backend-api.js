"use strict";

var video_backend = {
    __host: "https://pipedapi.kavin.rocks",
    __get_fetch_policy: (reload) => {
        if(reload){
            return "reload";
        }
        return "force-cache";
    },
    __get_region: () => {
        return navigator.languages.filter(e => {
            return e.length==2
        })[0].toUpperCase()
    },
    network_saving: false,
    get_trending_videos: async (reload = false) => {
        let tp_resource = await fetch(video_backend.__host+"/trending?region="+video_backend.__get_region(), { cache: video_backend.__get_fetch_policy(reload) });
        console.log(tp_resource);
        let video_list = [];
        if(tp_resource.status == 200){
            let tp_video_list = await tp_resource.json();
            for(let video_index in tp_video_list){
                let tp_video = tp_video_list[video_index];
                let video = {
                    author: tp_video.uploaderName,
                    author_verified: tp_video.uploaderVerified,
                    description: tp_video.shortDescription,
                    length: tp_video.duration,
                    live: tp_video.duration == 0,
                    title: tp_video.title,
                    id: tp_video.url.replace("/watch?v=", ""),
                    published: tp_video.uploaded / 1000,
                    views: tp_video.views,
                    thumbnail: tp_video.thumbnail
                };
                video_list.push(video);
            }
        } else {
            console.error(tp_resource.status);
        }
        return video_list;
    },
    get_video: async (id, reload = false) => {
        let tp_resource = await fetch(video_backend.__host+"/streams/"+id, { cache: video_backend.__get_fetch_policy(reload) });
        let video = {error:"#000"};
        if(tp_resource.status == 200){
            let tp_video = await tp_resource.json();
            video = {
                lastest: reload,
                author: tp_video.uploader,
                author_id: tp_video.uploaderUrl.replace("/channel/",""),
                author_thumbnail: tp_video.uploaderAvatar,
                rating: {
                    allowed: true,
                    likes: tp_video.likes,
                    dislikes: tp_video.dislikes
                },
                length: tp_video.duration,
                description: tp_video.description,
                live: false,
                published: tp_video.uploadDate,
                upcoming: false,
                listed: true,
                description: tp_video.description,
                title: tp_video.title,
                next_videos: [],
                id: id,
                captions: [],
                sources: {
                    video: [],
                    audio: []
                },
                views: tp_video.views,
                thumbnail: tp_video.thumbnailUrl
            };
            
            let asrcs = tp_video.audioStreams;
            let vsrcs = tp_video.videoStreams;
            
            for (let src_index in asrcs){
            	let src = asrcs[src_index];

            	video.sources.audio.push({
            		url: src.url,
            		quality: src.quality
            	});
            }

            for (let src_index in vsrcs){
            	let src = vsrcs[src_index];

            	video.sources.video.push({
            		url: src.url,
            		quality: src.quality
            	});
            }
            
            let next_videos = tp_video.relatedStreams;
            for(let next_video_index in next_videos){
                let next_video = next_videos[next_video_index];
                if(next_video.type != "stream") continue;
                video.next_videos.push({
                    author: next_video.uploaderName,
                    author_id: next_video.uploaderUrl.replace("/channel/", ""),
                    length: next_video.duration,
                    title: next_video.title,
                    id: next_video.url.replace("/watch?v=", ""),
                    views: next_video.views,
                    thumbnail: next_video.thumbnail
                });
            }
        } else {
            console.error(tp_resource.status);
        }
        return video;
    },
    get_video_comments: async (id, continuation=null) => {
        /*
    	let tp_resource = await fetch(video_backend.__host+"/api/v1/comments/"+id, { cache: "force-cache" });
    	let comments = {};
    	if(tp_resource.status == 200){
    		let tp_comments = await tp_resource.json();
    		comments = {
    			count: tp_comments.commentCount,
    			list: [],
    			continuation: tp_comments.connuation,
    			id: tp_comments.videoId 
    		}
    		let tp_list = tp_comments.comments
    		for(let comment_index in tp_list){
    		let comment = tp_list[comment_index];
    			comments.list.push({
    				author: comment.author,
    				author_id: comment.authorId,
    				author_thumbnail: comment.authorThumbnails[0].url,
    				author_verified: comment.verified,
    				edited: comment.isEdited,
    				content: comment.content,
    				pinned: comment.isPinned,
    				sponsor: comment.isSponsor,
    				published: comment.published,
    				likes: comment.likeCount,
    				owner: comment.authorIsChannelOwner
    			});
    		}
    	} else {
    		console.error(tp_resource.status);
    	}
    	return comments;
        */
    },
    search_videos: async (query) => {
    	let tp_resource = await fetch(video_backend.__host+"/search?q="+encodeURIComponent(query)+"&filter=videos", { cache: "force-cache" });
 	    let video_list = [];
 	    if(tp_resource.status == 200){
 	        let tp_video_list = (await tp_resource.json()).items;
 	        for(let video_index=0; video_index < tp_video_list.length; video_index+=1){
                let video = tp_video_list[video_index];
                if(video.type != "stream") continue;
                if(video.premium) continue;
                video_list.push({
                    author: video.uploaderName,
                    author_id: video.uploaderUrl.replace("/channel/", ""),
                    author_verified: video.uploaderVerified,
                    length: video.duration,
                    live: video.duration == 0,
                    title: video.title,
                    id: video.url.replace("/watch?v=", ""),
                    published: video.uploaded / 1000,
                    upcoming: false,
                    views: video.views,
                    thumbnail: video.thumbnail
                });
            }
        } else {
            console.error(tp_resource.status);
 	    }
 	    return video_list;
    }
}