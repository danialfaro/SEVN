// importar el modelo Medicion
import Medicion from '../models/Medicion'

import { io } from '../app'

module.exports = {
    
    //Guardar una medicion
     // medicion: { id, sensor, valor, lat, lon, createdAt, updatedAt }
    guardarMedicion(req, res) {

        Medicion.create({
            sensor: req.body.sensor,
            valor: req.body.valor,
            lat: req.body.lat,
            lon: req.body.lon
        }).then(medicionDB => {
            
            io.sockets.emit('nuevaMedicion', medicionDB.dataValues) //emite un evento a todos los sockets connectados, con los datos de la nueva medicion
            res.status(200).json(medicionDB);            

        }).catch(err => {
            res.status(500).json({
                mensaje: 'Ups! Algo ha fallado.',
                error: err
            })
        })

    },
    
    //Obtener una medicion
     // medicion: { id, sensor, valor, lat, lon, createdAt, updatedAt }
    obtenerMedicionPorId(req, res) {

        Medicion.findByPk(
            req.params.id
        ).then(medicionDB => {

            res.status(200).json(medicionDB);

        }).catch(err => {
            res.status(500).json({
                mensaje: 'Ups! Algo ha fallado.',
                error: error
            })
        })       

    },

    //Obtener todas las mediciones   
    // mediciones: [ { id, sensor, valor }, { id, sensor, valor } ]
    obtenerMediciones(req, res) {
        
        
        Medicion.findAll()
        .then(medicionesDB => {

            res.status(200).json(medicionesDB);

        }).catch(err => {
            res.status(500).json({
                mensaje: 'Ups! Algo ha fallado.',
                error: error
            })
        })       

    },

    //Borrar una medicion
    borrarMedicionPorId(req, res) {

        Medicion.destroy({ where: { id: req.params.id } })
        .then(medicionDB => {

            //io.sockets.emit('borradaMedicion', medicionDB.dataValues) //emite un evento a todos los sockets connectados, con los datos de la medicion borrada

            res.status(200).json(medicionDB);

        }).catch(err => {
            res.status(500).json({
                mensaje: 'Ups! Algo ha fallado.',
                error: error
            })
        })
    }

}