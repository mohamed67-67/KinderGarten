$(document).ready(function () {
    $(window).scroll(function () {
        
        
        if(scrollY > 20) {
            $('.navbar').css('backgroundColor', ' #5DA271');
            $('.navbar-brand').css('color', 'white');
            $('.nav-link').css('color', 'white');
            $('.navbar').css('borderRadius','0 0 15px 15px');

        } else {
            $('.navbar').css('backgroundColor', 'transparent');
            $('.navbar-brand').css('color', '#D4A0A7');
            $('.nav-link').css('color', '#D4A0A7');
        }
        
    });

    $('.navbar-toggler-icon').click(function () { 

        $('.nav-link').css('color', 'white');
        $('.navbar-collapse').css({
            backgroundColor: '#5DA271',
            borderRadius: '0 0 15px 15px',
            padding: '5px'
        });
        
    });





});