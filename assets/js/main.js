$('.as-panel-wrapper').hover(function(){
    $(this).find('.title-block').fadeIn(300);
},function(){
    $(this).find('.title-block').fadeOut(300);
});

$('.header-btn-recall').click(function(){
    $('.recall-wrapper').fadeIn(300);
});

$('.close-block').click(function(){
    $('.recall-wrapper').fadeOut(300);
});

$(document).mouseup(function(e){
    var recall = $('.recall-window');
    var state = $('.recall-wrapper').css('display');
    if(state == 'block'){
        if (!recall.is(e.target) && recall.has(e.target).length === 0 ){
            $('.recall-wrapper').fadeOut(300);
        }
    }
    
});

$('#recall-phone').inputmask("+7(999)-999-99-99");

$('#recall-window-time').inputmask("+7(999)-999-99-99");