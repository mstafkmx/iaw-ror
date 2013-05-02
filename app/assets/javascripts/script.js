$(document).ready(function(){
    $('#logo').addClass('animated fadeInLeftBig');
    $("#logoImage")
        .mouseover(function() {
            $(this).fadeOut("slow");
//            var src = $(this).attr("src").match(/[^\.]+/) + "Amazigh.png";
            var src = $(this).attr("src").replace(".png", "Amazigh.png");
            $(this).attr("src", src);
            $(this).fadeIn("slow");
        })
        .mouseout(function() {
            $(this).fadeOut("slow");
            var src = $(this).attr("src").replace("Amazigh.png", ".png");
            $(this).attr("src", src);
            $(this).fadeIn("slow");
        });
})


