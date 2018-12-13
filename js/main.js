$(document).ready(function () {

  console.log('scripts init');

    // Slider partners

    $(".slider_solutions").owlCarousel({
        items: 6,
        autoWidth:true
    });

    $(".slider_document").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: []
    });

    $(".slider_contract").owlCarousel({
        items: 6,
        margin:20,
        loop: true,
        autoWidth:true
    });

    $(".slider_contract_reviews").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: []
    });

    $(".slider_contract_examples").owlCarousel({
        items: 6,
        autoWidth:true
    });

    // Menu

    $('.button').on('click', function(){
        $('.menu').toggleClass('active');
    });

    // cont_menu

    $('.cont_menu ul li').on('click', function(){
        if ($(this).hasClass('active')) {
            $('.cont_menu ul').addClass('active');
        } else {
            $('.cont_menu ul').removeClass('active');
            $('.cont_menu ul li').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('.basic_specifications_slide a.basic_specifications_button').click(function(e) {
        e.preventDefault();
        if ($(this).parent().children('.basic_specifications_slide_cont').hasClass('show')) {
            $(this).parent().children('.basic_specifications_slide_cont').removeClass('show');
            $(this).parent().children('.basic_specifications_slide_cont').slideUp(350);
            $(this).parent().children('a.basic_specifications_button').removeClass('active');
        } else {
            $(this).parent().children('.basic_specifications_slide_cont').removeClass('show');
            $(this).parent().children('.basic_specifications_slide_cont').slideUp(350);
            $(this).parent().children('.basic_specifications_slide_cont').toggleClass('show');
            $(this).parent().children('.basic_specifications_slide_cont').slideToggle(350);
            $(this).parent().children('a.basic_specifications_button').addClass('active');
        }
    });

});