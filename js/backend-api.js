"use strict";

var video_backend = {
    host: "https://invidious.nogafa.org",
    get_trending_videos: async () => { // https://docs.invidious.io/api/#get-apiv1trending
        let tp_resource = await fetch(video_backend.host+"/api/v1/trending");
        let video_list = [];
        if(tp_resource.status == 200){
            let tp_video_list = await tp_resource.json();
            for(let video_index in tp_video_list){
                let video = tp_video_list[video_index];
                if(video.type != "video") continue;
                if(video.premium) continue;
                video_list.push({
                    author: video.author,
                    author_id: video.authorId,
                    author_verified: video.authorVerified,
                    description: video.description,
                    length: video.lengthSeconds,
                    live: video.liveNow || (video.lengthSeconds == 0),
                    title: video.title,
                    id: video.videoId,
                    published: video.published,
                    upcoming: video.isUpcoming,
                    views: video.viewCount,
                    thumbnail: video.videoThumbnails.reverse()[0].url
                });
            }
        } else {
            console.error(tp_resource.status);
        }
        return video_list;
    },
    get_video: async (id) => { // https://docs.invidious.io/api/#get-apiv1videosid
        let tp_resource = await fetch(video_backend.host+"/api/v1/videos/"+id);
        let video = {error:"#000"};
        if(tp_resource.status == 200){
            let tp_video = await tp_resource.json();
            //window.vi = tp_video;
            video = {
                author: tp_video.author,
                author_id: tp_video.authorId,
                author_thumbnail: tp_video.authorThumbnails[0].url,
                rating: {
                    allowed: tp_video.allowRatings,
                    likes: tp_video.likeCount,
                    dislikes: tp_video.dislikeCount
                },
                length: tp_video.length,
                description: tp_video.description,
                live: tp_video.liveNow,
                published: tp_video.published,
                upcoming: tp_video.isUpcoming,
                listed: tp_video.isListed,
                description: tp_video.description,
                family_friendly: tp_video.isFamilyFriendly,
                premium: tp_video.premium,
                paid: tp_video.paid,
                title: tp_video.title,
                next_videos: [],
                id: id,
                captions: [],
                keywords: tp_video.keywords,
                sources: [],
                views: tp_video.viewCount,
                thumbnail: tp_video.videoThumbnails.reverse()[0].url
            };
            
            let srcs = tp_video.formatStreams;
            
            for (let src_index in srcs){
            	let src = srcs[src_index];

            	video.sources.push({
            		url: src.url,
            		quality: src.qualityLabel
            	});
            }

            let next_videos = tp_video.recommendedVideos;
            for(let next_video_index in next_videos){
                let next_video = next_videos[next_video_index];
                video.next_videos.push({
                    author: next_video.author,
                    author_id: next_video.authorId,
                    length: next_video.lengthSeconds,
                    title: next_video.title,
                    id: next_video.videoId,
                    views: next_video.viewCount,
                    thumbnail: next_video.videoThumbnails.reverse()[0].url
                });
            }
        } else {
            console.error(tp_resource.status);
        }
        return video;
    },
    get_video_comments: async (id, continuation=null) => { // https://docs.invidious.io/api/#get-apiv1commentsid
    	let tp_resource = await fetch(video_backend.host+"/api/v1/comments/"+id);
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
    },
    search_videos: async (query) => { // https://docs.invidious.io/api/#get-apiv1search
    	let tp_resource = await fetch(video_backend.host+"/api/v1/search/?q="+query);
 	    let video_list = [];
 	    if(tp_resource.status == 200){
 	        let tp_video_list = await tp_resource.json();
 	        for(let video_index=0; video_index < tp_video_list.length; video_index+=1){
                let video = tp_video_list[video_index];
                if(video.type != "video") continue;
                if(video.premium) continue;
                video_list.push({
                    author: video.author,
                    author_id: video.authorId,
                    author_verified: video.authorVerified,
                    length: video.lengthSeconds,
                    live: video.liveNow || (video.lengthSeconds == 0),
                    title: video.title,
                    id: video.videoId,
                    published: video.published,
                    upcoming: video.isUpcoming,
                    views: video.viewCount,
                    thumbnail: video.videoThumbnails.reverse()[0].url
                });
            }
        } else {
            console.error(tp_resource.status);
 	    }
 	    return video_list;
    }
}