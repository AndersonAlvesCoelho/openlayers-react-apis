import { transform } from "ol/proj";
import api from "../../services/api";

//INSERINDO PROJEÇÃO NO PONTO
export const insertingProjection = (point) => {
  for (var i = 0; i < point.length; i++) {
    point[i] = transform(point[i], "EPSG:4326", "EPSG:3857");
  }
  return point;
};

