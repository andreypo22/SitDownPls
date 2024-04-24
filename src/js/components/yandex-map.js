
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76074615, 37.61279303],
        zoom: 13,
    });
    myPlacemark = new ymaps.Placemark([55.76953767, 37.63990823],{
      hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/map-icon.svg',
        iconImageSize: [12, 12],
      });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('typeSelector');

    myMap.behaviors.disable('scrollZoom');


}

