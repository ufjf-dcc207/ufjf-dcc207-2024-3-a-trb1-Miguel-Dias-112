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

export function MapView() {
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
    return () => {
      map.setTarget(undefined);
    };
  }, []);
  return <div id="map" style={{ width: "100%", height: "500px" }} />;
}
