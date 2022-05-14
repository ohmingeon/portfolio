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
        };
        if($(window).scrollTop()>=(windowheigh*1.5)){
            $("#intro2").css({
                "opacity": '0',
                "padding-top": '0',
                "width": '0'
            });
            $(".intro").remove("#intro1");
            $(".intro").remove("#intro2");
        };
        if($(window).scrollTop()>=(windowheigh*1.5)){
            
        };
    });
})