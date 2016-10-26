console.log("Hello");
function initMap() {
    var centerPosition = new google.maps.LatLng(0, 0);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: centerPosition
    });
}