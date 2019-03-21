const PARENT_ROW = ".row.merch-row";

const ApplPlugin = ($ctn) => {
    $ctn.slick(
        {
            arrows: true
        }
    );
};//функція, що підключає плагін slick до елементів

    $(window).on('load', function () {
        var $preloader = $('#prldr'),
            $svg_anm = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.fadeOut('slow');
	}// end on load
