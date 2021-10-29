"use strict";

function initMap() {

 const map = new google.maps.Map(document.getElementById("map"), {
   zoom: 11,
   center: { lat: 37.4221, lng: -122.0841 },
   mapTypeControl: false,
   fullscreenControl: true,
   zoomControl: true,
   streetViewControl: true
 });
 const marker = new google.maps.Marker({map: map, draggable: false});
 const autocompleteInput = document.getElementById('id_address');
 const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
   fields: ["address_components", "geometry", "name"],
   types: ["address"],
 });
 autocomplete.addListener('place_changed', function () {
   marker.setVisible(false);
   const place = autocomplete.getPlace();
   if (!place.geometry) {
     // User entered the name of a Place that was not suggested and
     // pressed the Enter key, or the Place Details request failed.
     window.alert('No details available for input: \'' + place.name + '\'');
     return;
   }
   renderAddress(place);
   fillInAddress(place);
 });

 function fillInAddress(place) {  // optional parameter
  const addressNameFormat = {
    'street_number': 'short_name',
    'route': 'long_name',
    'administrative_area_level_2': 'long_name',
    'administrative_area_level_1': 'short_name',
    'sublocality_level_1' : 'long_name',
    'postal_code': 'short_name',
    'city' : 'long_name',
  };
  
  const getAddressComp = function (type) {
    for (const component of place.address_components) {
      if (component.types[0] === type) {
        return component[addressNameFormat[type]];
      }
    }
    return '';
  };
  document.getElementById('id_address').value =  getAddressComp('route');
  document.getElementById('id_number').value =  getAddressComp('street_number');
  document.getElementById('id_district').value =  getAddressComp('sublocality_level_1');
  document.getElementById('id_state').value =  getAddressComp('administrative_area_level_1');
  document.getElementById('id_city').value =  getAddressComp('administrative_area_level_2');
  document.getElementById('id_postal_code').value =  getAddressComp('postal_code');
}

  function renderAddress(place) {
   map.setCenter(place.geometry.location);
   marker.setPosition(place.geometry.location);
   marker.setVisible(true);
  }
 }