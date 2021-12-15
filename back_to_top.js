$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>90){
            $("#backToTop").fadeIn();
        }
        else{
            $("#backToTop").fadeOut();
        }
        
    });

    $("#backToTop").click(function(){
        $("html,body").animate({scrollTop:0},300);
        return false;
    });
});