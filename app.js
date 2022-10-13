import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import db from './db/sequelize.db'



// Instanciamos el servidor
const app = express();


// Sequelize - se conecta a la base de datos o la inicia a partir de los modelos
db.sync()
    //db.sync({ force: true })
    .then(() => {
        //console.log("Synced db.");
        console.log("Drop and re-sync db."); //!!!!
    }).catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rutas
app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/medicion'));

// quito esto para que redirija directamente a Vue (public/)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Middleware para Vue.js router modo history
//const history = require('connect-history-api-fallback');
//app.use(history());
//app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
var server = app.listen(app.get('puerto'), () => {
    console.log('Server listening on port ' + app.get('puerto'));
});

//socket.io
import socketIO from 'socket.io'
const io = socketIO(server, {
    transports: ['polling'],
    cors: {
        cors: {
            origin: "http://localhost:3000"
        }
    }
})

io.on('connection', (socket) => {
    console.log('client is connected');
    
    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    })
})

export { io };