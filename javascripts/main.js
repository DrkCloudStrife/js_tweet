// jQuery documents
$(document).ready(function(){
  fetchTweets();
});

// JS Functions
function fetchTweets(username){
  if (typeof username  == "undefined" || username == null) { username = "DrkStrife" };
  
  $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?screen_name="+username,function(data){
    $("#tweets").html(data)
  });

}