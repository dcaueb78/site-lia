$(function () {
    animacao = true;
    var $svg = $('svg').drawsvg({
        duration: 500,
        stagger: 500,
        callback: animacao_linha()
    });
    $svg.drawsvg('animate');
});

function animacao_linha(){
    var width = screen.width;
    if(width<=489){
        $("#linha").animate({width: 200}, 2200 );
    }else if(width>490 && width<=767){
        $("#linha").animate({width: 300}, 2200 );
    }else if(width>=768 && width<=1000){
        $("#linha").animate({width: 400}, 2200 );
    }else{
        $("#linha").animate({width: 500}, 2200 );
    }
}
