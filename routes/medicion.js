import express from 'express';
const router = express.Router();

// importar el modelo Medicion
import Medicion from '../models/Medicion';

// Agregar una Medicion
router.post('/mediciones', async(req, res) => {
  const body = req.body;  
  try {
    const medicionDB = await Medicion.create(body);
    res.status(200).json(medicionDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Get con parámetros
router.get('/mediciones/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const medicionDB = await Medicion.findByPk(_id);
    res.json(medicionDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Get con todos los documentos
router.get('/mediciones', async(req, res) => {
  try {
    const medicionDb = await Medicion.findAll();
    res.json(medicionDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Delete con parámetros
router.delete('/mediciones/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const medicionDb = await Medicion.destroy({ where: { id: _id } });
    res.json(medicionDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;