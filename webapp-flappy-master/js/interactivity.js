jQuery("#credits").on("click", function() {
var message = "Game created by Alexander!";alert(message);
jQuery("#credits").append(
  "<p>" + message + "</p>"
);
});
jQuery("#scoresbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>" +
 "<li>" + "?" + "</li>" +
 "<li>" + "Bob" + "</li>" +
 "<li>" + "!DGG!" + "</li>" +
 "</ul>"
 );
});
jQuery("#creditsbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<div><p>" + "Game created by Alexander!" + "</p></div>"
 );
});
jQuery("#helpbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>"
 + "<li>" + "Press SPACE to flap your wings" + "</li>"
 + "<li>" + "Avoid the incoming pipes" + "</li>"
 +"<li>" + "If you crash, just try again!" + "</li>"
 +"<li>" + "Enjoy!" + "</li>"
 + "</ul>"

 );
});
function registerScore(score) {
  var playerName = prompt("What is your name?");
  var scoreEntry = prompt("What's your score?");
}
