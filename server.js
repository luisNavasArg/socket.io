const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
    // res.send('OK')
})
httpServer.listen(3000,()=>{
    console.log(`Ejecutando en el puerto 3000`);
})
io.on('connection',(socket)=>{
    console.log('Usuario Conectado');
})