$("#dropdownBtn").click(function(){

  $("#myNavbar").toggleClass("nav-design");
  $("a.a-view").css("color","white");
  $(".viewbtn").toggleClass("afterdropnav-viewbtn");

  $("a.a-nav").css("color","white");
  $("a.a-nav").css("fontWeight","500");
  $("a.a-nav").css("fontSize","17px");

  $(".a-nav").click(function(){
    $(".a-nav").css("color","black");
  })

})
