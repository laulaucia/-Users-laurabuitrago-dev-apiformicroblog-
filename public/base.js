console.log("Sanity Check: JS is working!");

$(document).ready(function(){



var deleteButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
var blogpost = {text: $('#new-blog-post').val()};
//adding a new post div aka submission but first checking if the form is empty
  $('#new-blog-post').submit(function (e) {
    e.preventDefault();
    $.post("api/posts", $(this).serialize(), function(response){
    	if($('#post-content').val().length>0){
	  	var postContent = $("#post-content").val();
	  	var newPost = '<li class="list-group-item alert">'+postContent+ deleteButton+'</li>';
	  	$('#posts').prepend(newPost);
	  	// clearing form on submit
	  	$( '#new-blog-post' ).each(function(){
	  		console.log(this);
    		this.reset();});
	  	updateCounter();
		}

	});

});

updateCounter();

$(document).on("click", "button.close", function(){
	console.log("click heard");
	updateCounter();

});
});
 var updateCounter = function(){
  	$('#counter').html($("ul li").length);
  	};


 function deleteBlogPost(context) {
   console.log('context in blogpost: ', context);
   // context is the button that was clicked
	 var blogpostId = $(context).attr("button.close");
	 console.log(blogpostId);
	 var blogpostId = $(context).data().id;
   $.ajax({
     url: '/api/blogpost/' + blogpostId,
     type: 'DELETE', });
 });