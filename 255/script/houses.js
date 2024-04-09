$(document).ready(function(){
    $("body").hide().fadeIn(2000);
    $('h4, p').each(function(i) {
        $(this).delay(400 * i).slideDown(500);
    });
    $('h4').hover(function() {
        $(this).animate({color: '#0D6217'}, 'slow');
    }, function() {
        $(this).animate({color: '#AAAAAA'}, 'slow');
    });
    $('img, .vidcon').animate({opacity: 1}, 'slow');
});



$(document).ready(function(){
// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
        $('#btt').fadeIn();
    } else {
        $('#btt').fadeOut();
    }
});

// Click event to scroll to top
$('#btt').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});
});


