$(document).ready(function(){
    initMap();

});

       function initMap() {
        
        
         var map;
         var myLatLng = {lat: 36.049567, lng: -111.987064};
         
         //variables for data
            var desertView = {lat:36.045059, lng: -111.826074};
            var navPoint = {lat:36.038742, lng: -111.837341};
            var mathPoint = {lat: 36.061923, lng: -112.107767};
            var yavPoint = {lat: 36.066238, lng: -112.116637};
            var brightAngel = {lat:36.057450, lng: -112.143602};
            var lookStudio = {lat:36.058031, lng: -112.14136};
            var morPoint = {lat: 36.005443, lng:-111.924271};    

         
 
 map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          scrollwheel:false
          
        });
// -------------DESERT VIEW WATCHTOWER---------------
    var marker = new google.maps.Marker({
          position: desertView,
          map: map,
          title: 'Desert View Watchtower'
        });
        var desertString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Desert View Watchtower</h1>'+
                '<div id="bodyContent">'+
                '<p>This 70 foot watchtower is one of the most recognized architectural pieces along the Grand Canyon and was constructed in 1932.  Inside the tower is a lookout point as well as a recently renovated Grand Canyon Association bookshop. </p>'+
                '</div>'+
                '</div>';
    var infowindow = new google.maps.InfoWindow({
            content: desertString, 
            position: desertView,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
    
// -------------NAVAJO POINT---------------
    var marker = new google.maps.Marker({
          position: navPoint,
          map: map,
          title: 'Navajo Point'
        });
        var navString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Navajo Point</h1>'+
            '<div id="bodyContent">'+
            '<p>Navajo Point is the highest lookout on the South Rim, witha view of the Colorado River running through the canyon.</p>'+
            //'<img src="img/navajo-point.jpg" alt="navajo point"'
            '</div>'+
            '</div>';
            
    var infowindow = new google.maps.InfoWindow({
            content: navString, 
            position: navPoint,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
    
// -------------MATHER POINT---------------
    var marker = new google.maps.Marker({
          position: yavPoint,
          map: map,
          title: 'Yavapai Point'
        });
        //http://grandcanyonhistory.clas.asu.edu/sites_rimviewpoints_matherpoint.html    
        var mathString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Mather Point</h1>'+
            '<div id="bodyContent">'+
            '<p>Mather Point was named after Stephen Mather, the first director of the National Parks Service.  Looking towards the North Rim, viewers can see for 10 miles across to the other side from Mather Point</p>'+
            //'<img src="img/mather-point.jpg" alt="navajo point"'
            '</div>'+
            '</div>';
            
    var infowindow = new google.maps.InfoWindow({
            content: mathString, 
            position: mathPoint,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
    
// -------------BRIGHT ANGEL---------------
    var marker = new google.maps.Marker({
          position: brightAngel,
          map: map,
          title: 'Bright Angel'
        });
        var brightString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bright Angel Trailhead</h1>'+
            '<div id="bodyContent">'+
            '<p>This trail is considered the premeir trail of the Grand Canyon National Park.  The trail was originally created along the Bright Angel Fault, a natural fault line and cliff in the surface of the earth.  Native Americans who inhabited the Grand Canyon used the trail for millenia.  Today it has the highest amount of rest houses and drinking points, making it popular for those who trek down into the canyon.</p>'+
            //'<img src="img/yavapai-point.jpg" alt="yavapai point"'
            '</div>'+
            '</div>';
            
    var infowindow = new google.maps.InfoWindow({
            content: brightString, 
            position: brightAngel,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });


// -------------LOOKOUT STUDIO---------------
    var marker = new google.maps.Marker({
          position: lookStudio,
          map: map,
          title: 'Lookout Studio'
        });
        var lookString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bright Angel Trailhead</h1>'+
            '<div id="bodyContent">'+
            '<p>This trail is considered the premeir trail of the Grand Canyon National Park.  The trail was originally created along the Bright Angel Fault, a natural fault line and cliff in the surface of the earth.  Native Americans who inhabited the Grand Canyon used the trail for millenia.  Today it has the highest amount of rest houses and drinking points, making it popular for those who trek down into the canyon.</p>'+
            //'<img src="img/yavapai-point.jpg" alt="yavapai point"'
            '</div>'+
            '</div>';
            
    var infowindow = new google.maps.InfoWindow({
            content: lookString, 
            position: lookStudio,
          });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
    
// -------------YAVAPAI POINT---------------
    var marker = new google.maps.Marker({
          position: morPoint,
          map: map,
          title: 'Moran Point'
        });
        var morString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Moran Point</h1>'+
            '<div id="bodyContent">'+
            '<p>There are clear distinctions between the layered paleozoic rocks, grand canyon supergroup and vishnu basement rocks at Moran Point.  These different layers of rocks are more distinctive at either sunrise or sunset.</p>'+
            //'<img src="img/yavapai-point.jpg" alt="yavapai point"'
            '</div>'+
            '</div>';
            
    var infowindow = new google.maps.InfoWindow({
            content: morString, 
            position: morPoint,
          });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
        });
    
       }

////icon web address: http://www.free-icons-download.net/icons/lookout-tower-icon-47234.html