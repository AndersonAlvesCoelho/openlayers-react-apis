import express from "express";
import CitiesBrazilControllers from "./controllers/CitiesBrazilControllers";
import MunicipalityBrazilControllers from "./controllers/MunicipalityBrazilControllers";
import RegionBrazilControllers from "./controllers/RegionBrazilControllers";
import StatesBrazilControllers from "./controllers/StatesBrazilControllers";
const apiVersion = "/v1";

const routes = express.Router();

// ROTAS SEM AUTENTICAÇÃO
// -----------------------

routes.get(`${apiVersion}/cities_brazil`, CitiesBrazilControllers.index);
routes.get(`${apiVersion}/municipality_brazil`, MunicipalityBrazilControllers.index);
routes.get(`${apiVersion}/region_brazil`, RegionBrazilControllers.index);
routes.get(`${apiVersion}/states_brazil`, StatesBrazilControllers.index);

routes.get(`${apiVersion}/features_cities_brazil`, CitiesBrazilControllers.featuresCollection);
routes.get(`${apiVersion}/features_municipality_brazil`, MunicipalityBrazilControllers.featuresCollection);
routes.get(`${apiVersion}/features_region_brazil`, RegionBrazilControllers.featuresCollection);
routes.get(`${apiVersion}/features_states_brazil`, StatesBrazilControllers.featuresCollection);

export default routes;
