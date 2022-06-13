import { Model, DataTypes, UUIDV4 } from "sequelize";

class RegionBrazil extends Model {
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
      },
      {
        sequelize,
        timestamps: false,
        schema: "public",
        tableName: "region_brazil",
      }
    );

    return this;
  }
}

export default RegionBrazil;
