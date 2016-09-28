var main = function(){
    $(".icon-menu").click(function(){
        $(".menu").animate({
            left:'0px'
        },500);
        
        $("body").animate({
            left:'285px'
        },500);
    
    });
    
    $(".icon-close").click(function(){
        $(".menu").animate({
            left:'-285px'
        },500);
       
        $("body").animate({
            left:'0px'
        },500);
    });
};

$(document).ready(main);