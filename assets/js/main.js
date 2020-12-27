$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $("#header").removeClass("py-3");
  } else {
    $("#header").addClass("py-3");
  }
});
