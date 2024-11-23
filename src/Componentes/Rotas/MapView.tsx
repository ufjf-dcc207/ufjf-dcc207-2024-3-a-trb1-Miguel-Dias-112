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
import { useEffect, useRef } from "react";

export function MapView({ rota }: any) {
    const mapaRef = useRef<Map | null>(null);  // Armazena a referência do mapa
    const vectorLayerRef = useRef<VectorLayer<VectorSource<Feature<LineString>>> | null>(null);  // Armazena a referência da camada de vetor

    // Função que cria a rota no mapa
    function criaRota(map: Map, rota: number[][]) {
        // Cria a geometria da rota
        const route = new LineString(rota);
        const routeFeature = new Feature({
            geometry: route,
        });
        const routeStyle = new Style({
            stroke: new Stroke({
                color: "blue", // Cor da linha
                width: 4,      // Espessura da linha
            }),
        });
        routeFeature.setStyle(routeStyle);

        // Cria a camada de vetor para a rota
        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [routeFeature],
            }),
        });

        // Adiciona a camada de vetor no mapa
        map.addLayer(vectorLayer);

        // Armazena a camada de vetor para remoção futura
        vectorLayerRef.current = vectorLayer;
    }

    useEffect(() => {
        // Inicializa o mapa apenas uma vez
        const mapa = new Map({
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

        // Armazena a referência do mapa
        mapaRef.current = mapa;

        return () => {
            // Limpa o mapa ao desmontar o componente
            mapa.setTarget(undefined);
        };
    }, []);

    useEffect(() => {
        // Atualiza a rota sempre que a propriedade `rota` mudar
        if (mapaRef.current && rota) {
            // Se já houver uma camada de rota, removê-la
            if (vectorLayerRef.current) {
                mapaRef.current.removeLayer(vectorLayerRef.current);
            }
            // Cria a nova rota no mapa
            criaRota(mapaRef.current, rota);
            console.log(rota);
        }
        console.log(rota);
    }, [rota]);  // Dependência da propriedade `rota`

    return (
        <div className="map" id="map" style={{ width: "100%", height: "500px" }}>
        </div>
    );
}
