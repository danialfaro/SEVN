import { DataTypes } from "sequelize"
import db from '../db/sequelize.db'

const Medicion = db.define('Medicion', {
  sensor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valor: DataTypes.INTEGER,
  lat: DataTypes.INTEGER,
  lon: DataTypes.INTEGER
}, 
{
  tableName: "mediciones"
});

export default Medicion;