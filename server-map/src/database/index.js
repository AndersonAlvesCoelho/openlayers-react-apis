import { Sequelize } from "sequelize";
import dbConfig from "../config/database";
import CitiesBrazil from "../models/CitiesBrazil";
import MunicipalityBrazil from "../models/MunicipalityBrazil";
import RegionBrazil from "../models/RegionBrazil";
import StatesBrazil from "../models/StatesBrazil";

const modelLearningGeoDb = [
  //public
  CitiesBrazil,
  MunicipalityBrazil,
  RegionBrazil,
  StatesBrazil,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // MODELO DO BANCO DE DADOS
    const learningGeoDb = new Sequelize(dbConfig["development"]);
    modelLearningGeoDb
      .map((model) => model.init(learningGeoDb))
      .map((model) => {
        if (model.associate) model.associate(learningGeoDb.models);
        return model;
      });
  }
}

export default new Database();
