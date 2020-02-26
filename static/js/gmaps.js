function initMap() {

    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": "-100"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "lightness": "30"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "lightness": "40"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Brooklyn Museum, NY', 40.671531, -73.963588],
        ['Brooklyn Public Library, NY', 40.672587, -73.968146],
        ['Prospect Park Zoo, NY', 40.665588, -73.965336]
    ];

    // Info window content
    var infoWindowContent = [
        ['<div class="mp-popup">' +
            '<div class="mpp-img">' +
            // '<div class="mpopUp-close"><i class="fa fa-times" aria-hidden="true"></i></div>' + 
            '<img src="~/assets"/img/blog/mpl-1.png" alt="">' +
            '</div>' +
            '<div class="mpp-text">' +
            '<div class="mpp-meta">' +
            '<p><span class="mpp-date">September 16, 2018</span> - <span class="mpp-category">Tips & Tricks</span></p>' +
            '</div>' +
            '<a href="#"><h4>Finding Love & Home in Tbilisi, Georgia</h4></a>' +
            '<p>Consectetur adipisicing elit, sed do mod tempor incididunt ut labore et dolore na aliqua. Ut enim ad minim......</p>' +
            '</div>' +
            '</div>'
        ],
        ['<div class="mp-popup">' +
            '<div class="mpp-img">' +
            // '<div class="mpopUp-close"><i class="fa fa-times" aria-hidden="true"></i></div>' + 
            '<img src="~/assets"/img/blog/mpl-1.png" alt="">' +
            '</div>' +
            '<div class="mpp-text">' +
            '<div class="mpp-meta">' +
            '<p><span class="mpp-date">September 16, 2018</span> - <span class="mpp-category">Tips & Tricks</span></p>' +
            '</div>' +
            '<a href="#"><h4>Finding Love & Home in Tbilisi, Georgia</h4></a>' +
            '<p>Consectetur adipisicing elit, sed do mod tempor incididunt ut labore et dolore na aliqua. Ut enim ad minim......</p>' +
            '</div>' +
            '</div>'
        ],
        ['<div class="mp-popup">' +
            '<div class="mpp-img">' +
            // '<div class="mpopUp-close"><i class="fa fa-times" aria-hidden="true"></i></div>' + 
            '<img src="~/assets"/img/blog/mpl-1.png" alt="">' +
            '</div>' +
            '<div class="mpp-text">' +
            '<div class="mpp-meta">' +
            '<p><span class="mpp-date">September 16, 2018</span> - <span class="mpp-category">Tips & Tricks</span></p>' +
            '</div>' +
            '<a href="#"><h4>Finding Love & Home in Tbilisi, Georgia</h4></a>' +
            '<p>Consectetur adipisicing elit, sed do mod tempor incididunt ut labore et dolore na aliqua. Ut enim ad minim......</p>' +
            '</div>' +
            '</div>'
        ]

    ];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    // Place each marker on the map  
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }

        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);

    });


}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);





$("#gmap").on('click', function() {
    $('.gm-style-iw').parent().addClass('gmap-we');
    var mpopupparent = $('.mp-popup').parent();
    $(mpopupparent.parent()).parent().addClass('mpUp-show');

    $('.gmap-wrapper .gm-style>div:first-child').addClass('gmap-w');
    $('.gmap-wrapper .gm-style .gmap-w>div:last-child').addClass('gmap-wr');
    $('.gmap-wrapper .gm-style .gmap-wr>div').addClass('gmap-ws');
    $('.gmap-wrapper .gm-style .gmap-ws>div:last-child').addClass('gmap-wt');
});