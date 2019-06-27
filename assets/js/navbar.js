$(document).ready(function(){

    const height = $(window).scrollTop(); 
    
    console.log(height);

    if (height > 450) {
        $("nav").toggleClass("scrolled");
    }

    $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 450); 
    });
});

