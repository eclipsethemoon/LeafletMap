var planes = [
		["7C6B07", -40.99497, 174.50808]
		, ["7C6B38", -41.30269, 173.63696]
		, ["7C6CA1", -41.49413, 173.5421]
		, ["7C6CA2", -40.98585, 174.50659]
		, ["C81D9D", -40.93163, 173.81726]
		, ["C82009", -41.5183, 174.78081]
		, ["C82081", -41.42079, 173.5783]
		, ["C820AB", -42.08414, 173.96632]
		, ["C820B6", -41.51285, 173.53274]
	];
var coolPlaces = new L.LayerGroup();
L.marker([-41.29042, 174.78219]).bindPopup('Te Papa').addTo(coolPlaces), L.marker([-41.29437, 174.78405]).bindPopup('Embassy Theatre').addTo(coolPlaces), L.marker([-41.2895, 174.77803]).bindPopup('Michael Fowler Centre').addTo(coolPlaces), L.marker([-41.28313, 174.77736]).bindPopup('Leuven Belgin Beer Cafe').addTo(coolPlaces), L.polyline([
    [-41.28313, 174.77736]
    , [-41.2895, 174.77803]
    , [-41.29042, 174.78219]
    , [-41.29437, 174.78405]
    ]).addTo(coolPlaces);
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>'
    , thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    , osmAttrib = '&copy; ' + osmLink + ' Contributors'
    , landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png'
    , thunAttrib = '&copy; ' + osmLink + ' Contributors & ' + thunLink;
var osmMap = L.tileLayer(osmUrl, {
        attribution: osmAttrib
    })
    , landMap = L.tileLayer(landUrl, {
        attribution: thunAttrib
    });
var map = L.map('map', {
    layers: [osmMap]
}).setView([-41.3058, 174.82082], 14);
//mapLink ='<a href="http://openstreetmap.org">OpenStreetMap</a>';
var baseLayers = {
    "OSM Mapnik": osmMap
    , "Landscape": landMap
};
var overlays = {
    "Interesting places": coolPlaces
};
L.control.layers(baseLayers, overlays).addTo(map);
//
// var marker = L.marker([-41.3058, 174.82082],
// {
// 	clickable: true,
// 	title: 'Hover text',
// 	keyboard: true
// }
// 	)
// 	.addTo(map)
// 	.bindPopup("<b>Te Papa</b><br>Museum of New Zealand.")
// 	.openPopup();
for (var i = 0; i < planes.length; i++) {
    marker = new L.marker([planes[i][1], planes[i][2]]).bindPopup(planes[i][0]).addTo(map);
}
var polyline = L.polyline(
		[[-40.99497, 174.50808]
			, [-41.30269, 173.63696]
			, [-41.49413, 173.5421]
			, [-40.98585, 174.50659]
			, [-40.93163, 173.81726]
			, [-41.5183, 174.78081]
			, [-41.42079, 173.5783]
			, [-42.08414, 173.96632]
			, [-41.51285, 173.53274]], {
        color: 'red'
        , weight: 10
        , opacity: .7
        , dashArray: '20,15'
        , lineJoin: 'round'
    }).addTo(map);