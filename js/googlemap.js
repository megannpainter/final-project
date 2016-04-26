$(document).ready(function(){
    initMap();

});

//--help via: https://github.com/katherineboliek/paris-beirut/blob/master/js/paris_map.js
            var map;
            var myLatLng = {lat: 36.149815, lng: -111.936813};
            
            var desertView = {lat:36.045059, lng: -111.826074};
            var navPoint = {lat:36.038742, lng: -111.837341};
            var mathPoint = {lat: 36.061923, lng: -112.107767};
            var yavPoint = {lat: 36.066238, lng: -112.116637};
            var brightAngel = {lat:36.057450, lng: -112.143602};
            var lookStudio = {lat:36.058031, lng: -112.14136};
            var morPoint = {lat: 36.005443, lng:-111.924271};
            var pointImp = {lat: 36.293976, lng:-111.973900};
            var capeRoyal = {lat: 36.117317, lng:-111.950018};
            var hermitRest ={lat: 36.061251, lng: -112.212361};
            var tusaRuins = {lat: 36.013712, lng:-111.865709};
       
       
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          scrollwheel:false,
          labels: true
          });
// -------------DESERT VIEW WATCHTOWER---------------
    var marker = new google.maps.Marker({
          position: desertView,
          map: map,
          title: 'Desert View Watchtower'
        });
        var desertString = '<div id="content">'+
                '<h1 class="infobox-heading">Desert View Watchtower</h1>'+
                '<div class="body-content col-xs-8">'+
                '<h4>This 70 foot watchtower is one of the most recognized architectural pieces along the Grand Canyon and was constructed in 1932.  Inside the tower is a lookout point as well as a recently renovated Grand Canyon Association bookshop. </h4>'+
                '</div>'+
                '<div class="col-xs-4">'+
                '<img src="img/desert-view-tower.jpg" alt="navajo point" class="google-pic">'+
                //https://www.flickr.com/photos/grand_canyon_nps/4690626735
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
    var marker2 = new google.maps.Marker({
          position: navPoint,
          map: map,
          title: 'Navajo Point'
        });
        var navString = '<div id="content">'+
            '<h1 class="infobox-heading">Navajo Point</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>Navajo Point is the highest lookout on the South Rim, with a view of the Colorado River running through the canyon.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/navajo-point.jpg" alt="navajo point" class="google-pic">' +
            //http://www.cynic.org.uk/photos/USA2007/MonumentValley/
            '</div>'+
            '</div>';
            
    var infowindow2 = new google.maps.InfoWindow({
            content: navString, 
            position: navPoint,
          });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
        });
    
    
// -------------MATHER POINT---------------
    var marker3 = new google.maps.Marker({
          position: mathPoint,
          map: map,
          title: 'Mather Point'
        });
        //http://grandcanyonhistory.clas.asu.edu/sites_rimviewpoints_matherpoint.html    
        var mathString = '<div id="content">'+
            '<h1 class="infobox-heading">Mather Point</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>Mather Point was named after Stephen Mather, the first director of the National Parks Service.  Looking towards the North Rim, viewers can see for 10 miles across to the other side from Mather Point</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/mather-point.jpg" alt="mather point" class="google-pic"' +
            //https://commons.wikimedia.org/wiki/File:Grand_Canyon-Mather_point.jpg
            '</div>'+
            '</div>';
            
    var infowindow3 = new google.maps.InfoWindow({
            content: mathString, 
            position: mathPoint,
          });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
        });
    
    
// -------------BRIGHT ANGEL---------------
    var marker4 = new google.maps.Marker({
          position: brightAngel,
          map: map,
          title: 'Bright Angel'
        });
        var brightString = '<div id="content">'+
            '<h1 class="infobox-heading">Bright Angel Trailhead</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>This trail is considered the premeir trail of the Grand Canyon National Park.  The trail was originally created along the Bright Angel Fault, a natural fault line and cliff in the surface of the earth.  Native Americans who inhabited the Grand Canyon used the trail for millenia.  Today it has the highest amount of rest houses and drinking points, making it popular for those who trek down into the canyon.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/bright-angel.jpg" alt="bright angel point" class="google-pic"' +
//https://upload.wikimedia.org/wikipedia/commons/b/b6/Gran_Ca%C3%B1%C3%B3n_desde_Bright_Angel_Point._26.jpg
            '</div>'+
            '</div>';
            
    var infowindow4 = new google.maps.InfoWindow({
            content: brightString, 
            position: brightAngel,
          });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
        });


// -------------LOOKOUT STUDIO---------------
    var marker5 = new google.maps.Marker({
          position: lookStudio,
          map: map,
          title: 'Lookout Studio'
        });
        var lookString = '<div id="content">'+
            '<h1 class="infobox-heading">Lookout Studio</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>Designed by Mary Colter, Lookout Studio was designed by Mary Colter and opened in 1914.  Native stone made up the shelter to look like a natural part of the Grand Canyon.  The original building has since been redesigned and rebuilt, yet the view remains just as beautiful.  </h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/lookout-studio.jpg" alt="lookout studio" class="google-pic">' +
            '</div>'+
            '</div>';
            
    var infowindow5 = new google.maps.InfoWindow({
            content: lookString, 
            position: lookStudio,
          });
    marker5.addListener('click', function() {
        infowindow5.open(map, marker5);
        });
    
    
// -------------MORAN POINT---------------
    var marker6 = new google.maps.Marker({
          position: morPoint,
          map: map,
          title: 'Moran Point'
        });
        var morString = '<div id="content">'+
            '<h1 class="infobox-heading">Moran Point</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>There are clear distinctions between the layered paleozoic rocks, grand canyon supergroup and vishnu basement rocks at Moran Point.  These different layers of rocks are more distinctive at either sunrise or sunset.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/moran-point.jpg" alt="moran-point" class="google-pic">' +
            //https://commons.wikimedia.org/wiki/Grand_Canyon
            '</div>'+
            '</div>';
            
    var infowindow6 = new google.maps.InfoWindow({
            content: morString, 
            position: morPoint,
          });

    marker6.addListener('click', function() {
        infowindow6.open(map, marker6);
        });
    
    
// -------------POINT IMPERIAL---------------
    var marker7 = new google.maps.Marker({
          position: pointImp,
          map: map,
          title: 'Point Imperial'
        });
        var impString = '<div id="content">'+
            '<h1 class="infobox-heading">Point Imperial</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>As the highest point on the North Rim, Point Imperial overlooks the Painted Desert and Marble Canyon.  There are layers of both black and red block that aren&#8217t visible at Point Imperial that are not visible at many of the other lookouts.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/point-imp.jpg" alt="point imperial" class="google-pic">' +
            //https://www.flickr.com/photos/alanenglish/3855143236
            '</div>'+
            '</div>';
            
    var infowindow7 = new google.maps.InfoWindow({
            content: impString, 
            position: pointImp,
          });

    marker7.addListener('click', function() {
        infowindow7.open(map, marker7);
        });
    
    
// -------------CAPE ROYAL---------------
    var marker8 = new google.maps.Marker({
          position: capeRoyal,
          map: map,
          title: 'Cape Royal'
        });
        var capeString = '<div id="content">'+
            '<h1 class="infobox-heading">Cape Royal</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>This area is popular for both sunrises and sunsets because it has brilliant views of the east and west.  Grand Canyon visitors can also see the Desert View Watchtower across the canyon on the South Rim.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/cape-royal.jpg" alt="cape royal" class="google-pic">' +
        //https://commons.wikimedia.org/wiki/File:Cape_Royal,_Grand_Canyon._20.jpg
            '</div>'+
            '</div>';
            
    var infowindow8 = new google.maps.InfoWindow({
            content: capeString, 
            position: capeRoyal,
          });

    marker8.addListener('click', function() {
        infowindow8.open(map, marker8);
        });
    
// -------------HERMITS REST---------------
    var marker9 = new google.maps.Marker({
          position: hermitRest,
          map: map,
          title: 'Hermit&#8217s Rest'
        });
        var hermString = '<div id="content">'+
            '<h1 class="infobox-heading">Hermit&#8217s Rest</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>Hermit&#8217s Rest is at the beginning of Hermit Road (which is closed from December 1st to February 28th), used to be called West Rim Drive.  This road has some of the best views of the Canyon including, Hopi Point and Pima Point.  The road is inaccessible by private vehicles and only by commercial tour buses or the free park shuttle bus.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/hermits-rest.jpg" alt="hermits rest" class="google-pic">' +
        //https://www.flickr.com/photos/grand_canyon_nps/6148640234
            '</div>'+
            '</div>';
            
    var infowindow9 = new google.maps.InfoWindow({
            content: hermString, 
            position: hermitRest,
          });

    marker9.addListener('click', function() {
        infowindow9.open(map, marker9);
        });
    
    
// -------------TUSAYAN RUINS---------------
    var marker10 = new google.maps.Marker({
          position: tusaRuins,
          map: map,
          title: 'Tusayan Ruins'
        });
        var tusaString = '<div id="content">'+
            '<h1 class="infobox-heading">T</h1>'+
            '<div class="body-content col-xs-8">'+
            '<h4>This site contains ruins from an 800-year-old small Ancestral Puebloan village.  It includes a pueblo with a living area, storage rooms and a room used for religious rituals.</h4>'+
            '</div>'+
            '<div class="col-xs-4">' +
            '<img src="img/tusa-ruins.jpeg" alt="tusayan ruins" class="google-pic">' +
        //https://www.flickr.com/photos/alanenglish/744003702
            '</div>'+
            '</div>';
            
    var infowindow10 = new google.maps.InfoWindow({
            content: tusaString, 
            position: tusaRuins,
          });

    marker10.addListener('click', function() {
        infowindow9.open(map, marker10);
        });
    

}











