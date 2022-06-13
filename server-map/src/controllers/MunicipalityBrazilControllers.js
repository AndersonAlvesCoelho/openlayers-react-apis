import MunicipalityBrazil from "../models/MunicipalityBrazil";

class MunicipalityBrazilControllers {
  async index(_, res) {
    try {
      const data = await MunicipalityBrazil.findAll();
      return res.json(data);
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }

  async featuresCollection(_, res) {
    try {
      const query = `SELECT json_build_object(
        'type', 'FeatureCollection',
        'features', json_agg(ST_AsGeoJSON(t.*)::json)
      ) as features
      FROM (SELECT id, cd_mun, nm_mun, sigla, area_km2, ST_SimplifyPreserveTopology(geom, 0.1) FROM municipality_brazil) as t`;

      const data = await MunicipalityBrazil.sequelize.query(query, {
        model: MunicipalityBrazil, 
        raw: true,
      });

      return data.length !== 0 && data[0]["features"]
        ? res.json(data[0]["features"])
        : res.json({ message: "Nenhum dado encontrado!" });
    } catch (error) {
      res.status(400).json({ message: `Erro ao retornar os dados. ${error}` });
    }
  }
}

export default new MunicipalityBrazilControllers();
