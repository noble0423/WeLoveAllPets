// Scroll Effect

$(window).scroll(function() {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 855); 
    $(".dropdown-menu").toggleClass("scrolled", $(this).scrollTop() > 855);    
});

