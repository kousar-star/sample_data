var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });
var format_lines_2 = new ol.format.GeoJSON();
var features_lines_2 = format_lines_2.readFeatures(json_lines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lines_2.addFeatures(features_lines_2);
var lyr_lines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lines_2, 
                style: style_lines_2,
                popuplayertitle: "lines",
                interactive: true,
                title: '<img src="styles/legend/lines_2.png" /> lines'
            });

lyr_OSMStandard_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_lines_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_buildings_1,lyr_lines_2];
lyr_buildings_1.set('fieldAliases', {'id': 'id', 'people': 'people', 'floors': 'floors', });
lyr_lines_2.set('fieldAliases', {'id': 'id', });
lyr_buildings_1.set('fieldImages', {'id': '', 'people': '', 'floors': '', });
lyr_lines_2.set('fieldImages', {'id': '', });
lyr_buildings_1.set('fieldLabels', {'id': 'no label', 'people': 'no label', 'floors': 'no label', });
lyr_lines_2.set('fieldLabels', {'id': 'no label', });
lyr_lines_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});