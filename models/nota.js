import { DataTypes } from "sequelize"
import db from '../db/sequelize.db'

const Nota = db.define('Nota', {
  titulo: DataTypes.STRING,
  texto: DataTypes.STRING,
}, 
{
  tableName: "notas"
});

export default Nota;