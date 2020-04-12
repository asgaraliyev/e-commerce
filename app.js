var gray = "#675f5c"
var lightgray = "#dbdad8"
var lightorange = "#eebaa2"
var orange = "#fc7233"
$(document).ready(function () {
  

  var searchwidth = $("#search-btn ").width();
  var middlepartwidth = $("nav .header .parts .middle ").width();
  var navheight = $("nav ").height();




  $("#search-input").css("padding-right", searchwidth + "px");



  $(".amoney").click(function () {

    $("#moneylist").slideToggle();
  });
  $(".alanguage").click(function () {

    $("#languagelist").slideToggle();
  });
  $("#search-input").change(
    async function () {

      $("#search-btn ").addClass("turnicon");
      await new Promise(resolve => setTimeout(resolve, 1000));
      $("#search-btn ").removeClass("turnicon");
    }
  );
  $("#search-input").focus(
    async function () {
      $("#search-btn ").addClass("turnicon");


      $("#search-area .list").css({
        "width": middlepartwidth + "px",
        "margin-top": navheight + "px",

      });
      $("#search-area .list li").css({
        "height": middlepartwidth * 30 / 100 + "px",
      });
     
      
      




      $(".search-bar .close-search").addClass("animation");
      $(".search-bar .close-search").css({
        "display": "block",
      });

      $("body").css({
        "overflow": "hidden",
      });
      $("#search-area ").slideDown(1000);
      $("#search-input ").css({
       
        "border-bottom": " 5px solid" + lightorange,
        "border-left": " 2px solid " + lightorange,
        "border-top": " 1px solid " + lightorange,
        "box-shadow": "0 0 5px  " + lightorange,
        
      });
      $("#search-btn ").css({
        "top": "-5px",
        "right": "-7px",
        "border": " none",
        "border-bottom": " 5px solid" + lightorange,
        "border-left": " 2px solid " + lightorange,
        "border-top": " 1px solid " + lightorange,
        "box-shadow": "0 0 5px  " + lightorange,
      });
      $("#search-area .list ul li .information h2 ").css({
        "font-size":middlepartwidth/70*2.5+"px",
      });
      $("#search-area .list ul li .information h3 ").css({
        "font-size":middlepartwidth/70*2.5+"px",
      });
      $("#search-area .list ul li .information .location-like").css(
        {
          "height":middlepartwidth * 23 / 350+"px",
        }
      );
      $("#search-area .list ul li .information .location-like div span").css(
        {
          "font-size":middlepartwidth/70*2.3+"px",
          "top":"5px",
        }
      );
      var listwidth=$("#search-area .list ul li ").width();
      $("#search-area .list ul li .photo").css(
        {
          "width":middlepartwidth * 23 / 120.5 + "px ",
          
        }
      );
      $("#search-area .list ul li .information").css({
        "width": listwidth-middlepartwidth * 23 / 120.5 + "px",
      });
      
      console.log(listwidth);


    await new Promise(resolve => setTimeout(resolve, 1000)); 
    $("#search-btn ").removeClass("turnicon");
  },

);
// yazma effekti search barda
async function yazmaeffetkti() {
  var cumleler = ["Iphone X", "Paltaryuyan", "BMW", "Qaz açarı"]
  currentcumle = ""
  for (var i = 0; i < cumleler.length; i++) {
    cumle = cumleler[i]
    for (var z = 0; z < cumle.length; z++) {
      currentcumle += cumle[z]
      await new Promise(resolve => setTimeout(resolve, 300));
      $("#search-input").attr("placeholder", currentcumle);
    }
    currentcumle = ""
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  yazmaeffetkti()
}
yazmaeffetkti() 
$("#close-search-area").click(
 async function () {

    $("#search-area").slideUp(1000);
    $(".search-bar .close-search").css({
      "display": "none",
    });
    $("#search-input ").val("");
    await new Promise(resolve => setTimeout(resolve, 1000));
    $("#search-btn ").css({
      "top": "0px",
      "right": "0px",
      "border": " none",

    });

$("#search-input ").css({
  "top": "0px",
  "right": "0px",
  "border": " 2px solid" +orange,
});
  }
);





});