var index = 0,
    owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
            slideBy: 3,
        },
        1000:{
            items:5,
            slideBy: 5,
        }
    }
})

$('.handle').on('click', function(){
    if ($(this).hasClass('handleNext'))
        $(this).prev().trigger('next.owl.carousel')
    else
        $(this).next().trigger('prev.owl.carousel')
})

$('.profile_list a').on('click', ()=>{
    $('body').css('overflow', 'auto')
    $('.profile').fadeOut(()=>{
        localStorage.setItem('logged', 'true');
        $('.profile').remove()
    })
})