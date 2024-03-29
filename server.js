const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./src/router/index');
const path = require('path') 
const cors = require('cors') 
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./src/middlewares/error-middleware');

const socketController = require('./src/controllers/socket-controller');


require('dotenv').config()


app.use(express.json());

app.use(express.urlencoded({ extended: true }));     
app.use(cors());
app.use(cookieParser());
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use('/', router);
app.use(express.static(path.join(__dirname, 'src')));

app.use(errorMiddleware);


const http = require('http').createServer(app);
const io = require('socket.io')(http);
socketController(io);


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))




http.listen(process.env.PORT, () => {
    console.log("Server started on localhost:" + process.env.PORT);
})