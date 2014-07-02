$(function() {
    $('#jobs-nav li a').click(function(e) {
        var element = $(this).attr('href');
        e.preventDefault();
        $('#sub-jobs-nav').slideUp(400,function() {
            $('#sub-jobs-nav > *').css('display','none');
            $(element).css('display','block');
            $('#sub-jobs-nav').slideDown(400);
        });

    });
    $('#sub-jobs-nav')
})
