var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AIRPORT_AR_50K_1 = new ol.format.GeoJSON();
var features_AIRPORT_AR_50K_1 = format_AIRPORT_AR_50K_1.readFeatures(json_AIRPORT_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIRPORT_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIRPORT_AR_50K_1.addFeatures(features_AIRPORT_AR_50K_1);
var lyr_AIRPORT_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIRPORT_AR_50K_1, 
                style: style_AIRPORT_AR_50K_1,
                popuplayertitle: 'AIRPORT_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/AIRPORT_AR_50K_1.png" /> AIRPORT_AR_50K'
            });
var format_BANGUNAN_AR_50K_2 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_2 = format_BANGUNAN_AR_50K_2.readFeatures(json_BANGUNAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_2.addFeatures(features_BANGUNAN_AR_50K_2);
var lyr_BANGUNAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_AR_50K_2, 
                style: style_BANGUNAN_AR_50K_2,
                popuplayertitle: 'BANGUNAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_2.png" /> BANGUNAN_AR_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AIRPORT_AR_50K_1.setVisible(true);lyr_BANGUNAN_AR_50K_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AIRPORT_AR_50K_1,lyr_BANGUNAN_AR_50K_2];
lyr_AIRPORT_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KOBDMI': 'KOBDMI', 'KDICAO': 'KDICAO', 'KDIATA': 'KDIATA', 'ELEVAS': 'ELEVAS', 'MAVBMI': 'MAVBMI', 'LGTBMI': 'LGTBMI', 'KATBMI': 'KATBMI', 'KLSBMI': 'KLSBMI', 'ADABMI': 'ADABMI', 'ADRBMI': 'ADRBMI', 'REMARK': 'REMARK', 'TIPAIP': 'TIPAIP', 'TIPLOK': 'TIPLOK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'RUNWAY': 'RUNWAY', 'PARK': 'PARK', 'LPG': 'LPG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AIRPORT_AR_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'KOBDMI': '', 'KDICAO': '', 'KDIATA': '', 'ELEVAS': '', 'MAVBMI': '', 'LGTBMI': '', 'KATBMI': '', 'KLSBMI': '', 'ADABMI': '', 'ADRBMI': '', 'REMARK': '', 'TIPAIP': '', 'TIPLOK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'RUNWAY': '', 'PARK': '', 'LPG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BANGUNAN_AR_50K_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AIRPORT_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'KOBDMI': 'inline label - always visible', 'KDICAO': 'inline label - always visible', 'KDIATA': 'inline label - always visible', 'ELEVAS': 'inline label - always visible', 'MAVBMI': 'inline label - always visible', 'LGTBMI': 'inline label - always visible', 'KATBMI': 'inline label - always visible', 'KLSBMI': 'inline label - always visible', 'ADABMI': 'inline label - always visible', 'ADRBMI': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'TIPAIP': 'inline label - always visible', 'TIPLOK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'RUNWAY': 'inline label - always visible', 'PARK': 'inline label - always visible', 'LPG': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_BANGUNAN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_AR_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});