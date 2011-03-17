// jQuery documents
$(document).ready(function(){
 fetchRepos();
 fetchTweets();
});

// JS Functions
function fetchTweets(username){
  if (typeof username  == "undefined" || username == "") { username = "DrkStrife" };
  
  $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name='+ username+'&callback=?', function(json) { //get information about the user
    for(var x in json){
     $('#tweets').append("<p>"+json[x].text+"</p>"); 
    }
  });

}

function fetchRepos(username) {
  if (typeof username == "undefined" || username == "") { username = "marka2g"};
  
  $.getJSON('http://github.com/api/v1/json/'+ username+'?callback=?', function(json) { //get information about the user
    for(var x in json['user']['repositories']){
     $('#repos').append("<p><a href=\""+json['user']['repositories'][x].url+"\">"+json['user']['repositories'][x].name+"</a></p>"); 
    }
  });
}