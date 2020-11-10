$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()> 50){
      $("#myBtn").css("display", "block");
    } else {
      $("#myBtn").css("display", "none");
    }
  })
})

$(document).ready(function(){
  $('a[href*="#"]').on("click", function(event){
    if(this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        "linear",
        function(){
          window.location.hash = hash;
        }
      );
    }
  });
});