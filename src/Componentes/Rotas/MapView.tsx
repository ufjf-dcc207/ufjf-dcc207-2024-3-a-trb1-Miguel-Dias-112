import Map from "ol/Map";
import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { Vector as VectorSource } from "ol/source";
import { Style, Stroke } from "ol/style";
import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";
import XYZ from "ol/source/XYZ";
import './MapView.css';
import { useEffect } from "react";

export function MapView({rota}: any) {
  useEffect(() => {
    // Configura o mapa
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: [-4827769.166891132, -2484616.878317465],
        zoom: 16.4,
      }),
    });

    
    // Coordenadas da rota
    const myTrip = rota
  
     // Cria a geometria da rota
     const route = new LineString(myTrip);

     // Cria uma feature para a linha
     const routeFeature = new Feature({
       geometry: route,
     });

    // Define o estilo da linha
    const routeStyle = new Style({
      stroke: new Stroke({
        color: "blue", // Cor da linha
        width: 4,        // Espessura da linha
      }),
    });

    // Aplica o estilo à feature
    routeFeature.setStyle(routeStyle);
  
    // Cria a camada vetorial com a linha
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [routeFeature],
      }),
    });
    // Adiciona a camada vetorial ao mapa
    map.addLayer(vectorLayer);
    return () => {
      map.setTarget(undefined);
    };
  }, []);
  return <div id="map" style={{ width: "100%", height: "500px" }} />;
}
