import { Model, DataTypes, UUIDV4 } from "sequelize";

class StatesBrazil extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
        },
        geom: DataTypes.GEOMETRY("multipolygon", 4674),
        nome: DataTypes.STRING,
        sigla: DataTypes.STRING,
        regiao_id: DataTypes.STRING(21),
        codigo_ibg: DataTypes.STRING(21),
      },
      {
        sequelize,
        timestamps: false,
        schema: "public",
        tableName: "states_brazil",
      }
    );

    return this;
  }
}

export default StatesBrazil;
