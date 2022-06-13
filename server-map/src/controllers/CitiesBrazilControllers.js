import CitiesBrazil from "../models/CitiesBrazil";

class CitiesBrazilControllers {
  async index(_, res) {
    try {
      const data = await CitiesBrazil.findAll();
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
      FROM (SELECT guuid, geom, name FROM cities_brazil) as t`;

      const data = await CitiesBrazil.sequelize.query(query, {
        model: CitiesBrazil,
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

export default new CitiesBrazilControllers();
