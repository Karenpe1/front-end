var carruselWidht= $('.carousel-inner')[0].scrollWidth;
var carWidth= $('.carousel-item').width();

var scrollPosition=0;

$('.carousel-control-next').on('click',function(){
    if(scrollPosition<(carruselWidht-(carWidth*4))){
        scrollPosition= scrollPosition + carWidth;
        $('.carousel-inner').animate({scrollLeft: 
        scrollPosition},500);
    }
    
});
$('.carousel-control-prev').on('click',function(){
    if(scrollPosition>0){
        scrollPosition= scrollPosition - carWidth;
        $('.carousel-inner').animate({scrollLeft: 
        scrollPosition},500);
    }
    
});