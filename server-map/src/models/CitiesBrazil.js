import { Model, DataTypes, UUIDV4 } from "sequelize";

class CitiesBrazil extends Model {
  static init(sequelize) {
    super.init(
      {
        guuid: {
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: () => UUIDV4(),
        },
        geom: DataTypes.GEOMETRY,
        name: DataTypes.STRING,
      },
      {
        sequelize,
        timestamps: false,
        schema: "public",
        tableName: "cities_brazil",
      }
    );

    return this;
  }
}

export default CitiesBrazil;
