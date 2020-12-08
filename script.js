$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").css("width", "100px");
});

$(".message-button").click(function() {
  let message = $("input").val();
  $(".message").append(message);
});

$(".name-button").click(function() {
  let name = $("input").val();
  $("h1").text("Hi, my name is " + name + " and I am a ghost");
});
