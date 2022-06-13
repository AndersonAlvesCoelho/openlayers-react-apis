import { useEffect } from "react";
import { Map as olMap, View as olView } from "ol";
import { Tile } from "ol/layer";
import { OSM } from "ol/source";
import { transform } from "ol/proj";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Feature from "ol/Feature";
import { LineString, Point, Polygon } from "ol/geom";
import GeoJSON from "ol/format/GeoJSON";

import api from "../services/api";
import { insertingProjection } from "./utils/utils";
import styleLayers from "./utils/styleLayers";

import "ol/ol.css";
import "./style.css";

export default function Map() {
  // CRIANDO OS PONTOS, LINHA E POLYGONOS - COM SEUS STYLOS
  const vectorSource = new VectorSource();
  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: (feature) => styleLayers[feature.get("name")], // IMPORTAÇÃO DO STYLES
  });

  const vectorSourceStatesBrazil = new VectorSource();
  const vectorLayerStatesBrazil = new VectorLayer({
    source: vectorSourceStatesBrazil,
    style: () => styleLayers['feature_states_brazil'], // IMPORTAÇÃO DO STYLES
  });

  const featurePotion = [
    new Feature({
      geometry: new Point(transform([-60.5, -15.5], "EPSG:4326", "EPSG:3857")),
      name: "danger",
    }),
    new Feature({
      geometry: new Point(transform([-60.5, -10.5], "EPSG:4326", "EPSG:3857")),
      name: "warning",
    }),
  ];
  // vectorSource.addFeatures(featurePotion);

  //INSERINDO A PROJETÇÃO EM CADA PONTO DA LINHA
  const pointsLine = insertingProjection([
    [-65.5, -8.0],
    [-70.0, -8.0],
    [-60.5, -20.0],
  ]);

  const featurePointsLine = [
    new Feature({
      geometry: new LineString(pointsLine),
      name: "line",
    }),
  ];
  // vectorSource.addFeatures(featurePointsLine);

  //INSERINDO A PROJETÇÃO EM CADA PONTO DA POLYGNO
  const pointsPolygon = insertingProjection([
    [-50.5, -8.0],
    [-40.5, -8.0],
    [-40.5, -15.0],
    [-50.5, -15.0],
  ]);

  const featurePointsPolygon = [
    new Feature({
      geometry: new Polygon([pointsPolygon]),
      name: "polygon",
    }),
  ];
  // vectorSource.addFeatures(featurePointsPolygon);

  // PEGANDO PONTOS DA CIDADES DO BRASIL - REQUEST GET
  function getCitiesBrazil() {
    api
      .get("cities_brazil")
      .then((res) => {
        const featuresCitiesBrazil = [];

        res.data.forEach((element) => {
          const { geom } = element || {};
          const { coordinates } = geom || {};

          const pointCitiesBrazil = transform(
            coordinates,
            "EPSG:4326",
            "EPSG:3857"
          );

          const featureCitiesBrazil = new Feature({
            geometry: new Point(pointCitiesBrazil),
            name: "cities",
          });

          featuresCitiesBrazil.push(featureCitiesBrazil);
        });

        vectorSource.addFeatures(featuresCitiesBrazil);
      })
      .catch((error) => {
        const { response: err } = error;
        const message =
          err && err.data ? err.data.message : "Erro desconhecido";
        console.log("message ", message);
      });
  }

  // PEGANDO OS LIMITES DOS ESTADOS BRASILEIROS
  function getStatesBrazil() {
    api
      .get("features_states_brazil")
      .then((res) => {
        console.log("res.data ", res.data);
        const statesBrazil = new GeoJSON({
          featureProjection: "EPSG:3857",
        }).readFeatures(res.data);

        vectorSourceStatesBrazil.addFeatures(statesBrazil);
      })
      .catch((error) => {
        const { response: err } = error;
        const message =
          err && err.data ? err.data.message : "Erro desconhecido";
        console.log("message ", message);
      });
  }

  const startMap = () => {
    const map = new olMap({
      target: "ol-map",
      layers: [
        new Tile({
          source: new OSM(),
        }),
        vectorLayer,
        vectorLayerStatesBrazil,
      ],
      view: new olView({
        center: transform([-60.3319245, -15.2533513], "EPSG:4326", "EPSG:3857"),
        zoom: 4,
      }),
    });

    map.once("rendercomplete", () => {
      getCitiesBrazil();
      getStatesBrazil();
    });
  };

  useEffect(() => startMap(), []);

  return <div id="ol-map" className="ol-map"></div>;
}
