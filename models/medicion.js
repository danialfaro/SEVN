import { DataTypes } from "sequelize"
import db from '../db/sequelize.db'

const Medicion = db.define('medicion', {
  sensor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter a sensor'
      }
    }
  },
  valor: {
    type: DataTypes.INTEGER,
  },
  lat: {
    type: DataTypes.INTEGER
  },
  lon: {
    type: DataTypes.INTEGER
  }
}, 
{
  tableName: "mediciones"
});

export default Medicion;