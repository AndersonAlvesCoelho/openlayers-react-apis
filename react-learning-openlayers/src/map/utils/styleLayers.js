import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style";

const styleLayers = {
  danger: new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({ color: "#F5363680" }),
      stroke: new Stroke({ color: "#F33636", width: 2 }),
    }),
  }),
  warning: new Style({
    image: new CircleStyle({
      radius: 5,
      fill: new Fill({ color: "#FFA20D80" }),
      stroke: new Stroke({ color: "#FFA20D", width: 2 }),
    }),
  }),
  cities: new Style({
    image: new CircleStyle({
      radius: 2,
      fill: new Fill({ color: "#70888A80" }),
      stroke: new Stroke({ color: "#70888A", width: 1 }),
    }),
  }),
  cities_icon: new Style({
    image: new Icon({
      scale: 0.03,
      src: require("../../assets/image/map-pin-light.png"),
    }),
  }),
  feature_states_brazil: new Style({
    stroke: new Stroke({ color: "blue", lineDash: [4], width: 2 }),
    fill: new Fill({ color: "rgba(0, 0, 255, 0.1" }),
  }),
  line: new Style({
    stroke: new Stroke({ color: "#00FF00", width: 2 }),
  }),
  ACRE: new Style({
    fill: new Fill({ color: "#D240FF80" }),
    stroke: new Stroke({ color: "#D240FF", width: 2 }),
  }),
};

export default styleLayers;
