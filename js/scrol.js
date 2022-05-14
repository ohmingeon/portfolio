$(document).ready(function(){
    var windowheigh = window.innerHeight;
    $(window).scroll(function(){
        if ((windowheigh*1.2) >= $(window).scrollTop()){
            var opavalue = ((windowheigh*0.5)-$(window).scrollTop())/(windowheigh*0.5);
            $("#intro1").css({
                "opacity": opavalue,
                'padding-top': '40vh',
                "width": '100vw'
            });
            $(".introback").css({
                "opacity": opavalue
            });
            $("#intro2").css({
                "opacity": -opavalue
            });
            $("#left-text").css({
                "letter-spacing" : (-$(window).scrollTop()/(windowheigh*(8/85))),
                "opacity": opavalue
            });
            $("#left-img").css({
                "opacity": -(opavalue),
                "cursor": 'pointer'
            });
            $(".right-text").css({
                "transform" : "matrix(1,0,0,1,"+($(window).scrollTop())/(windowheigh/65)+",0)"
            });
            $(".scrollmenu").css({
                "transform" : "matrix(1,0,0,1,70,0)"
            });
            $(".about-main").css({
                "transform" : "matrix(1,0,0,1,0,0)"
            });
        };
        if (((windowheigh*1.2) <= $(window).scrollTop())&&($(window).scrollTop()<=(windowheigh*1.5))){
            var opavalue = (((windowheigh*1.2)-$(window).scrollTop())/(windowheigh*0.2))+1;
            $("#intro1").css({
                "opacity": '0',
                "padding-top": '0',
                "width": '0'
            });
            $(".introback").css({
                "opacity": '0'
            });
            $("#intro2").css({
                "opacity": opavalue,
                'padding-top': '40vh',
                "width": '100vw'
            });
            $("#left-text").css({
                "opacity": '0'
            });
            $("#left-img").css({
                "opacity": '1',
                'cursor': 'pointer'
            });
            $(".right-text").css({
                "transform" : "matrix(1,0,0,1,70,0)"
            });
            $(".scrollmenu").css({
                "transform" : "matrix(1,0,0,1,"+((((windowheigh*1.2)-$(window).scrollTop())/(windowheigh/215))+70)+",0)"
            });
            $(".about-main").css({
                "transform" : "matrix(1,0,0,1,0,"+(((windowheigh*1.2)-$(window).scrollTop())/(windowheigh/150))+")"
            });
        };
        if($(window).scrollTop()>=(windowheigh*1.5)){
            $(".scrollmenu").css({
                "transform" : "matrix(1,0,0,1,5,0)"
            });
            $(".about-main").css({
                "transform" : "matrix(1,0,0,1,0,-45)"
            });
            $("#intro2").css({
                "opacity": '0',
                "padding-top": '0',
                "width": '0'
            });
            $(".intro").remove("#intro1");
            $(".intro").remove("#intro2");
            $(".right-text").css({
                "transform" : "matrix(1,0,0,1,70,0)"
            });
            $("#left-text").css({
                "opacity": '0'
            });
            $("#left-img").css({
                "opacity": '1',
                'cursor': 'pointer'
            });
        };
        if($(window).scrollTop()>=(windowheigh*1.5)){
            
        };
    });
})