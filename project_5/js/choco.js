$('document').ready(function(){
    var startEvents = $('header');
    function addClass(){
        startEvents.addClass("anim");
    }
    $('body').click(function(){
      addClass();
        $('article').fadeIn("ease");
    });
    $(document).scroll(function(){
       var y = $(this).scrollTop();
       if (y>500){
           $('footer').fadeIn('ease');
       }else{$('footer').fadeOut('ease');}
    });
    $("footer").on("click",'a', function (){
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top},1000);
    });
})