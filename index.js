$(".cover").on("click", function () {
  $("#mugshot")
    .css("opacity", "0.5")
    .slideUp(2000)
    .slideDown(1000);
  $("#title-heading")
    .css("color", "var(--main-peach)")
    .slideUp(1000)
    .slideDown(1000);
  $("#subtitle")
    .css("color", "var(--main-peach)")
    .slideUp(1000)
    .slideDown(1000);

});

//   $("#main-heading").on("click", function(){
//     $("#main-heading").slideToggle("slow").slideToggle("slow");
//   });
