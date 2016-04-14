$(document).ready(function(){
    initMap();

});

    


   
      function initMap() {
        
        
         var map;
         var myLatLng = {lat: 36.059351, lng: -112.109218};
         
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.SATELLITE  
        });
        
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'My House!'
        });
        
          //console.log(map);
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">My House!</h1>'+
            '<div id="bodyContent">'+
            '<p>If you look right here, this is my house. How crazy is that. The grass has not been mowed but we are getting someone to come cut the grass today.</p>'+
            '</div>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString, 
            position: myLatLng
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
      }