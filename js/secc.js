/*global console*/
$(function(){
    
   var winh =$(window).height(),
       navh =$(".navbar").innerHeight(),
       upperh =$(".upper-bar").innerHeight();
    
    $('.slider').height(winh - (navh + upperh));
    $('.carousel-item').height(winh - (navh + upperh));
    
    //Starting hundle scroll up
    $(".fa-chevron-up").fadeOut();
    $(window).scroll(function(){
         var  scrollup =$(window).scrollTop();
        if(scrollup < 600){
            $(".fa-chevron-up").fadeOut(1000);
        }
        else{
            $(".fa-chevron-up").fadeIn(1000);
        }
    });
    
    $(".fa-chevron-up").click(function(){ 
        $("html,body").animate({ scrollTop : 0 }, 800);
        
    });
    
    //Ending hundle scroll up
    
// handle scroll to add posts after clicking 
    $(".postadded").click(function(){
        $("body,html").animate({ scrollTop : $(".addpost").offset().top }, 1000);
    
    });

// handle scroll to add video after clicking 
    $(".postadded").next().click(function(){
        $("body,html").animate({ scrollTop : $(".addvideo").offset().top }, 1000);
    });
    
    
 // handle update for video slider
 $(".ssvv").click(function(e){
     e.preventDefault();
     $(".item .update-data").removeClass("dis-hid");
     $(".item form h2").addClass("dis-hid");
 });


 $(".ok-bu").click(function(e){
     e.preventDefault();
     $(".item form h2").removeClass("dis-hid");
     $(".item .update-data").addClass("dis-hid");
 });
    
    
    //handle make title gallary middle
    
    $(".mycirtifi .imgcontainer").mouseover(function(){
        $(this).find(".a0").removeClass("dis-hid"); 
    });
    $(".mycirtifi .imgcontainer").mouseleave(function(){
        $(this).find(".a0").addClass("dis-hid"); 
    });
    
    
    
    
    // handl buttom in navbar
    
//      var serviceh =$(".services").offset().top;
//    $(".upper-bar .up-analysis button").click(function(){
//        $("html,body").animate({ scrollTop : serviceh }, 800);
//    });
    
    //trigger mixitup plugin
    
    $("#services").mixItUp();
    /**/
    
    $(".sheffle span").click(function(){
       $(this).addClass("activee").siblings().removeClass("activee");
      });
    
    
//    
//    $(".collapse ul nav-item").click(function(){
//       $(this).addClass("mymainactives").siblings().removeClass("mymainactives");
//      });

    
// =================================== slider ================================
    //starting all video slider
    
$(".appear").fadeOut();
$(".askServices > button").on("click",function(){
   $(".appear").fadeToggle(); 
}); 
    
    
    
}); 



 
        
    