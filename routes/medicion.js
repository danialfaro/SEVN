import express from 'express';
const router = express.Router();

// importar el controller de Mediciones
import MedicionesController from '../controllers/mediciones';

// Post medicion
router.post('/mediciones', MedicionesController.guardarMedicion);

// Get medicion con parametro id
router.get('/mediciones/:id', MedicionesController.obtenerMedicionPorId);

// Get todas las mediciones
router.get('/mediciones', MedicionesController.obtenerMediciones);

// Delete medicion con parametro id
router.delete('/mediciones/:id', MedicionesController.borrarMedicionPorId);

// Exportamos la configuración del router para la app de express
module.exports = router;