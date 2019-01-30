var mapCanvas = document.getElementById("map");

function initMap(){

    var teslaOffice = new google.maps.LatLng(37.79102, -122.39916);

    var mapOptions = {

        center: teslaOffice,

        zoom: 17,

        disableDefaultUI: true,

        zoomControl: true,

        zoomControlOptions: {position: google.maps.ControlPosition.Right_CENTER}

    }

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var circle1 = new google.maps.Circle({

        center:teslaOffice,

        radius:60,

        strokeColor:"#FF0000",

        strokeOpacity:0,

        strokeWeight:2,

        fillColor:"#cc0000",

        fillOpacity:0.2,

    });

    var circle2 = new google.maps.Circle({

        center:teslaOffice,

        radius:30,

        strokeColor:"#FF0000",

        strokeOpacity:0,

        strokeWeight:2,

        fillColor:"#cc0000",

        fillOpacity:0.2

    });

    var circle3 = new google.maps.Circle({

        center:teslaOffice,

        radius:15,

        strokeColor:"#FF0000",

        strokeOpacity:0,

        strokeWeight:2,

        fillColor:"#cc0000",

        fillOpacity:1

    });

    circle1.setMap(map);

    circle2.setMap(map);

    circle3.setMap(map);

    var image =

        {url:"img/flagWhite.png",

            size : new google.maps.Size(20, 15),

            origin: new google.maps.Point(0, 0),

            anchor: new google.maps.Point(5,5),

            scaledSize: new google.maps.Size(13, 13)

        }

    var flag = new google.maps.Marker({

        position: teslaOffice,

        map: map,

        icon: image

    });

};

google.maps.event.addDomListener(window, 'load', initMap);



var button=document.getElementsByClassName('mapSwitch');

button[0].onclick = function(){

    if (button[0].innerHTML =='hide map'){

        mapCanvas.style.display='none';

        button[0].innerHTML = 'show map';

        button[0].classList.remove('pressed')}

    else{

        mapCanvas.style.display='block';

        button[0].innerHTML = 'hide map';

        button[0].className+=' pressed';};

}