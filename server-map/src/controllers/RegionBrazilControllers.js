import RegionBrazil from "../models/RegionBrazil";

class RegionBrazilControllers {
  async index(_, res) {
    try {
      const data = await RegionBrazil.findAll();
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
      FROM (SELECT id, nome, sigla, ST_SimplifyPreserveTopology(geom, 0.1) FROM region_brazil) as t`;

      const data = await RegionBrazil.sequelize.query(query, {
        model: RegionBrazil,
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

export default new RegionBrazilControllers();
