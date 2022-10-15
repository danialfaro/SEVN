import express from 'express';
const router = express.Router();

// importar el modelo Nota
import Nota from '../models/nota';

// Agregar una Nota
router.post('/notas', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Nota.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Get con parámetros
router.get('/notas/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await Nota.findByPk(_id);
    res.json(notaDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Get con todos los documentos
router.get('/notas', async(req, res) => {
  try {
    const notaDb = await Nota.findAll();
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

// Delete con parámetros
router.delete('/notas/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDb = await Nota.destroy({ where: { id: _id } });
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ups! Algo ha fallado.',
      error
    })
  }
});

module.exports = router;