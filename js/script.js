$( function () {
    $('#hide').click(function() {
        $('#hide_show').hide(1000);
    });
    $('#show').click(function() {
        $('#hide_show').show(1000);
    });
    $('#toggle').click(function() {
        $('#hide_show').toggle(1000);
    });
    $('#fadeIn').click(function() {
        $('#fade').fadeIn(1000);
    });
    $('#fadeOut').click(function() {
        $('#fade').fadeOut(1000);
    });
    $('#fadeToggle').click(function() {
        $('#fade').toggle(1000);
    });
    $('#fadeTo').click(function() {
        $('#fade').fadeTo(1000,0.5);
    });
    $('#animate').click(function () {
        $('#anim').animate({
           width: '500px',
           height:'500px'
        },3000)
    })
    $('#stop').click(function () {
        $('#anim').stop();
    })

})