(function ($) {
    $(document).ready(function () {


        $('.slider').cycle({
            fx: 'fade',
            timeout: 0,
            height: 'auto',
            pause: '',
            next: '.comments'
        });

        $('.frm form').validate();
        $('.frmW form').validate();
        $('.second form').validate();
        $('.feedback form').validate();

        $(".fancybox").fancybox();
        //$(".iframe").fancybox();


        // Grab the current date
        var currentDate = new Date();

        // Set some date in the future

        var futureDate = new Date(2014, 06, 14, 00, 00, 00);

        // Calculate the difference in seconds between the future and current date
        var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
        if (diff < 0) diff = 0;

        //Instantiate a coutdown FlipClock
       var clock = $('.clock').FlipClock(diff, {
    //    clockFace: 'DailyCounter',
       language: 'ru',
        countdown: true
        });
    });
})(jQuery);

(function ($) {
    $(document).ready(function(){
        $('a[href*=youtube]').each(function () {
            // convert youtube swf href to embed for iframe
            var thisHref = this.href.replace(new RegExp("watch\\?v=", "i"), 'embed/').replace(new RegExp("&", "i"), '?');
            // bind fancybox to each anchor
            $(this).fancybox({
                "padding": 0,
                "type": 'iframe',
                // add trailing parameters to href (wmode)
                "href" : thisHref+"&amp;wmode=opaque"
            }); // fancybox
        }); // each
    }); // ready
})(jQuery);



