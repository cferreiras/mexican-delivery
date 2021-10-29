
function initMap()  {
  var cordinates = {lat: -23.55615, lng: -46.65814};
  
  var mapa = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cordinates 
  });

  var marker = new google.maps.Marker({
    position: cordinates,
    map: mapa,
    title: 'El Taco'
  });
}
