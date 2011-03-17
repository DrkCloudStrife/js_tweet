// jQuery documents
$(document).ready(function(){
  fetchRepos();
  // fetchTweets();
});

// JS Functions
function fetchTweets(username){
  if (typeof username  == "undefined" || username == null) { username = "DrkStrife" };
  
  $.ajax({
      url: "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + username,
      type: "GET",
      dataType: "text",
      success: function(dat){
        var data = $.parseJSON($(dat.responseText).text().trim().replace(new RegExp("\\n|\\r|\\t","g"),''));
        $("#tweets").html(data);
      }
    });
        // $.get("http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + username,function(data){
 //          $("#tweets").html(data);
 //          },"json");

}

function fetchRepos(username) {
  if (typeof username == "undefined" || username == null) { username = "marka2g"};
  
  $.ajax({
    url: "http://github.com/api/v1/json/" + username,
    type: "GET",
    dataType: "JSON",
    success: function(dat){
      var data = $.parseJSON(dat);
      $("#repos").html(dat);
    }
  });
}