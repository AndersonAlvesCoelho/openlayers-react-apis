import StatesBrazil from "../models/StatesBrazil";

class StatesBrazilControllers {
  async index(_, res) {
    try {
      const data = await StatesBrazil.findAll();
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
      FROM (SELECT id, nome, sigla, regiao_id, codigo_ibg, ST_SimplifyPreserveTopology(geom, 0.1) FROM states_brazil) as t`;

      const data = await StatesBrazil.sequelize.query(query, {
        model: StatesBrazil,
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

export default new StatesBrazilControllers();
