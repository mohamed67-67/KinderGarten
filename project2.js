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

        if(scrollY > 120){
            $('.about2').css('animation', 'swipe 1s ease forwards');
            $('.about1').css('animation', 'appear 1s ease forwards');
        }else {
            $('.about2').css('animation','swipee 1s ease forwards');
            $('.about1').css('animation', 'disappear 1s ease forwards');
        }

        if(scrollY > 1500) {
            $('.fa-arrow-up').removeClass('inv');
        }else{
            $('.fa-arrow-up').addClass('inv');
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
    
                 //navigation buttons //

                 

        
        $('[title="home"]').click(function () { 
            $(window).scrollTop(0);
         });
        $('.fa-arrow-up').click(function () { 
            $(window).scrollTop(0);
         });
    
        $('[title="about"]').click(function () { 
           $(window).scrollTop(470);
        });
        
        $('[title="service"]').click(function () { 
           $(window).scrollTop(1100);
        });
        $('[title="contact-us"]').click(function () { 
           $(window).scrollTop(1850);
        });
    
     


    
                //abous US Gallery//



    $('[alt="about-img"]').on('click', function () {
        $(this).toggleClass('zoom');
    });


    $('[alt="about-img"]').on('mouseleave', function () {
        $(this).removeClass('zoom');
    });




              // Services cards Slides //


    
    $('[title="card1"]').on('click', function () {
        $('[title="card11"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card11"]').slideUp(500);
    });

    
    $('[title="card2"]').on('click', function () {
        $('[title="card22"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card22"]').slideUp(500);
    });


    $('[title="card3"]').on('click', function () {
        $('[title="card33"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card33"]').slideUp(500);
    });


    $('[title="card4"]').on('click', function () {
        $('[title="card44"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card44"]').slideUp(500);
    });


    $('[title="card5"]').on('click', function () {
        $('[title="card55"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card55"]').slideUp(500);
    });


    $('[title="card6"]').on('click', function () {
        $('[title="card66"]').slideToggle(500);
    });
    $('.card').on('mouseleave', function () {
        $('[title="card66"]').slideUp(500);
    });




    
                //Pop Up animation//




     $('.close').click(function () { 
          $('.pop-ups').css({
              animation: 'PopUp 1.4s ease reverse forwards'
          });
      
          $('section').css({
              filter: 'blur(0px)'
          })
      });
     
     
     $('[title="team"]').click(function () { 
          $('#team').css({
              animation: 'PopUp 1.4s ease  both'
          });
      
          $('section').css({
              filter: 'blur(3px)'
          })
      });
     
     
     $('[title="what-we-offer"]').click(function () { 
          $('#what-we-offer').css({
              animation: 'PopUp 1.4s ease  both'
          });
      
          $('section').css({
              filter: 'blur(3px)'
          })
      });
     
     $('[title="daily-routine"]').click(function () { 
          $('#daily-routine').css({
              animation: 'PopUp 1.4s ease  both'
          });
      
          $('section').css({
              filter: 'blur(3px)'
          })
      });
     
     $('[title="curiculum"]').click(function () { 
          $('#curiculum').css({
              animation: 'PopUp 1.4s ease  both'
          });
          $('section').css({
              filter: 'blur(3px)'
          })
      });
         
    $('[title="Fees"]').click(function () { 
       $('#Fees').css({
        animation: 'PopUp 1.4s ease  both'
       });
       $('section').css({
           filter: 'blur(3px)'
       })
    });
     
    $('[title="our-home"]').click(function () { 
       $('#our-home').css({
           animation: 'PopUp 1.4s ease  both'
       });
       $('section').css({
           filter: 'blur(3px)'
       })
    });
         
         
});
    