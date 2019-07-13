$(document).ready(function(){

    $('.navbar__item a').on("click", function(e) {
        scrollPage($(this));
        e.preventDefault();
    });

    function scrollPage(link) {
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top 
        }, 1000);

        if (link.attr('href') == '#about') {
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top  + 80
            }, 1000);
        }

        if (link.attr('href') == '#order') {
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top  - 150
            }, 1000);
        }

        if (link.attr('href') == '#programm') {
            $('html, body').stop().animate({
                scrollTop: $(link.attr('href')).offset().top  + 30
            }, 1000);
        }
    };

// burgerMenu

    function burgerMenu(selector){
        let menu = $(selector);
        let button = menu.find('.burger-menu__button');
        let links = menu.find('.burger-menu__link');
        let overlay = menu.find('.burger-menu__overlay');

        button.on('click', (e)=> {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', function(e) {
            e.preventDefault();
            toggleMenu();
            scrollPage($(this));
        });

        overlay.on('click', () => toggleMenu());

        function toggleMenu(){
            menu.toggleClass('navbar__burger-menu--active')
            button.toggleClass('burger-menu__button--active')
            button.toggleClass('burger-menu__button')
            menu.toggleClass('navbar__burger-menu')

            if (menu.hasClass('navbar__burger-menu--active')) {
                $('.main-page').css('overflow', 'hidden');
            }
            else {
                $('.main-page').css('overflow', 'visible');
            }
        }
    }
//  - BurgerMenu
// Modal
    function modul(selector) {
        let btn = $(selector);
        let modulOverlay = $('.modul__overlay');
        let modulPopup = $('.modul__popup');
        let modulClose = $('.popup__close, .popup-form__btn');

        
        btn.on('click', function(e) {
            e.preventDefault();
            toggleModul();    
        });

        modulOverlay.on('click', function(e) {
            e.preventDefault();
            toggleModul();    
        });

        modulClose.on('click', function(e) {
            e.preventDefault();
            toggleModul();    
        });

        function toggleModul(){
            modulOverlay.toggleClass('modul__overlay--active');
            modulPopup.toggleClass('modul__popup--active')
        }
    };
    
// -Modal
    burgerMenu('.navbar__burger-menu');
    modul('.btn');

    
});