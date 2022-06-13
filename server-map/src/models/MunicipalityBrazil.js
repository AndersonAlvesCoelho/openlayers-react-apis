import { Model, DataTypes, UUIDV4 } from "sequelize";

class MunicipalityBrazil extends Model {
  static init(sequelize) {
    super.init(
    
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
        },
        geom: DataTypes.GEOMETRY("multipolygon", 4674),
        cd_mun: DataTypes.STRING(7),
        nm_mun: DataTypes.STRING(60),
        sigla: DataTypes.STRING(2),
        area_km2: DataTypes.NUMBER,
      },
      {
        sequelize,
        timestamps: false,
        schema: "public",
        tableName: "municipality_brazil",
      }
    );

    return this;
  }
}

export default MunicipalityBrazil;
