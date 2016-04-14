// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?display=touch&client_id=1305ecaf399a47aa9941e7cfb970e8ae&redirect_uri=http://steventking.com/apps/instagram&response_type=token 

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
	
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/tags/grandcanyon/media/recent?access_token=248660894.aee21ef.0cb44e17e81547ef994d0de5ff989bbc&callback=?"
	var insta = ""
	var access_token = location.hash.split('=')[1];
	
		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});
				
		
		function parseData(json){
			console.log(json);
			
			var i = 0;
			
			$.each(json.data,function(i,data){
				var date = new Date(data.created_time * 1000);
				var day = date.getDay();
				
//				calculates the time since the tweet was created

				//loop
						insta += '<div class="instagram-loop">'
						//
						////row
						insta += '<div class="row row-nomargin">'
						//
						////user information
						insta += '<div class="col-md-12 col-xs-2 col2insta">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">'
						insta += '<img width="40px" class="instagram-profilepictures" src="' + data.user.profile_picture + '">'
						insta += '<br></a></div>'
						//
						////user name
						insta += '<div class="col-md-7 col-xs-7 instagram-username-div"'
						insta += '<p class="instagram-username">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username + '</a></p>'
						insta += '</div>'
						//
						////date
						insta += '<div class="col-md-3 col-xs-3 col2insta instagram-date-div">'
						insta += '<div class="clock"></div>'

						insta += '</div>'
						//
						////end row
						insta += '</div>'
						//
						////image and link
						insta += '<a target="_blank" href="' + data.link + '">'
						insta += '<img width="100%" class="instagram-image" src ="' + data.images.low_resolution.url + '">'
						insta += '</a>'

						////likes and caption
						insta += '<div class="instagram-caption-div">'
						insta += '<div class="heart"></div>' + data.likes.count
						insta += '<br><div class="chatbubble"></div>'
						insta += '<span class="instagram-username-caption">'
						insta += '<a target="_blank" href="http://www.instagram.com/' + data.user.username + '">' + data.user.username + '</span></a>'
						insta += '<div class="hashtags">' + data.caption.text + '</div>'
						insta += '</div>'
						
						////end of loop
						insta += '</div>'
					
				});

			console.log(insta);
			$('#instagram').append(insta);

		}
           
 });
		
		
		
		
	

		
