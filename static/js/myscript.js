var map;
var styles = [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];
// Added some Assains Creed Style B)
var markers = [];
var locations = [
  { title: 'Doon International School', position: {lat: 30.689363, lng:76.721244},
    info: 'Doon International School, established in 1993, today teaches over 5000 students from its three campuses at Mohali and Dehradun. Keen and active minds are encouraged to think, analyse, create and express, preparing good citizens and leaders for tomorrow.'},
  { title: 'Subway', position: {lat: 30.684673, lng:76.721315},
    info: 'Subway is a privately held American fast food restaurant franchise that primarily sells submarine sandwiches (subs) and salads.' },
  { title: 'Army Law College', position: {lat: 30.686335, lng: 76.720674},
    info: 'The Army Institute of Law (AIL) was established in July 1999 by the Indian Army under the aegis of the Army Welfare Education Society (AWES) at its interim location at Patiala. In July 2003, the Institute shifted to Sector 68, Mohali. On December 1, 2003, the Mohali Campus was inaugurated by H.E. Dr. APJ Abdul Kalam, the then President of India.' },
  { title: 'La Pinoz Pizza', position: {lat: 30.6803042, lng:76.7245245},
    info: 'The best and cheapest Local Pizza Place, Come And Enjoy' },
  { title: 'Punjab Cricket Assosiation Stadium', position: {lat: 30.6904364, lng:76.7367425},
    info: 'The Punjab Cricket Association IS Bindra Stadium is a cricket ground located in Mohali, near Chandigarh. It is popularly referred to as the Mohali Stadium. The stadium is home to the Punjab team. The construction of the stadium took around ₹ 25 crore and 3 years to complete. The stadium has an official capacity of 26,950 spectators. The stadium was designed by Arun Loomba and Associates, Panchkula and constructed by R.S. Construction Company, Chandigarh.' }
];

function initMap() {
  var icon = {
    url: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Azure-icon.png",
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // ancho
  };
  var highIcon =  {
    url:"http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Pink-icon.png",
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // ancho
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.683983, lng: 76.721708},
    zoom: 15,
    styles: styles
  });
 //Markers
  var infoWindows = new google.maps.InfoWindow();

  var bounds = new google.maps.LatLngBounds(); // Declaring bounds
  for (var i = 0; i < locations.length; i++) {
    var position = locations[i].position;
    var title = locations[i].title;
    var info = locations[i].info;
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      icon: icon,
      animation: google.maps.Animation.DROP,
      customInfo: info,
      optimized: false
    });
    markers.push(marker);
    bounds.extend(marker.position); //Extends the bounds
    populateFunction(marker, infoWindows);
    mouseOverFunc(marker);
    mouseOutFunc(marker);
  }
  function populateFunction(marker, infoWindows){
    marker.addListener('click', function() {
      populateInfoWindow(this, infoWindows);
    });
  }

  function mouseOverFunc(marker){
    marker.addListener('mouseover', function(){
      this.setIcon(highIcon);
      this.setAnimation(google.maps.Animation.BOUNCE);
    });
  }

  function mouseOutFunc(marker){
    marker.addListener('mouseout', function(){
      this.setIcon(icon);
      this.setAnimation(null);
    });
  }
}



//InfoWindow Content is in this function
 function populateInfoWindow(marker, infowindow){
   if(infowindow.marker != marker)
   {
     wikiInfo(marker);
     infowindow.marker = marker;
     infowindow.setContent('<div>'+'<h3 style="color:blue;">'+ marker.title +'</h3>'+ '<br>' + marker.customInfo+ '<ul id="wiki-container">'+'</ul>'+ '</div>');
     infowindow.open(map, marker);
     infowindow.addListener('closeclick',function(){
     infowindow.setMarker = null;
     vm.wikiLinks.removeAll(); //To Clear List when close os pressed
    });
   }
}

//search marker
function search(choice){
  for (var i = 0; i < markers.length; i++) {
    if(i == choice)
    {
      return markers[i];
    }
  }
}


//Model for knockout
var ViewModel = function(){
  this.loc = ko.observableArray(locations);

  this.spotMarker = function() {
    var s = document.getElementById('spot-choosed');
    var choice = s.selectedIndex;
    markerSelected = search(choice);
    markerSelected.setAnimation(google.maps.Animation.BOUNCE);
    var infoWindows=new google.maps.InfoWindow();
    populateInfoWindow(markerSelected, infoWindows);
  };

  this.wikiArticle = ko.observable("");
  this.wikiLinks = ko.observableArray();

  this.showMarkers = function() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
  };

  this.hideMarkers = function() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  };

  this.zoomToArea = function() {
      var geocoder = new google.maps.Geocoder();
      var address = document.getElementById('area-text').value;
      if (address === '') {
        window.alert('You must enter an area, or address.');
      } else {
        geocoder.geocode(
          { address: address,
            componentRestrictions: {locality: 'Mohali'}
          }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              map.setZoom(15);
            } else {
              window.alert('We could not find that location - try entering a more' +
                  ' specific place.');
            }
          });
      }
  };
};

var vm = new ViewModel();

ko.applyBindings(vm);

// load wikipedia data
function wikiInfo(marker){
  var wikiElem;
  var name = marker.title.replace(/ /g,'_');
  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ name +'&format=json&callback=wikiCallback';
  var wikiRequestTimeout = setTimeout(function(){
      return 'failed to get wikipedia resources'
  }, 8000);

  $.ajax({
      url: wikiUrl,
      dataType: "jsonp",
      jsonp: "callback",
      success: function( response ) {
        console.log(response);
        vm.wikiArticle(response[2][2]);
          var articleList = response[1];
          for (var i = 0; i < articleList.length; i++) {
              var articleStr = articleList[i];
              var url = 'http://en.wikipedia.org/wiki/' + articleStr;
              var article = {
                url: url,
                articleStr: articleStr
              }
            //  vm.wikiLinks.push(url);
              vm.wikiLinks.push(article);
          }

          clearTimeout(wikiRequestTimeout);
      }
  });
};
