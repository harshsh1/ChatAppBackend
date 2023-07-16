const { Socket } = require("dgram");
const express=require("express");
const http=require('http');
const Server=require("socket.io").Server;
const app=express();
const PORT=process.env.PORT || 5001

const server=http.createServer(app);
const io=new Server(server,{    // socket.io instance created 
    cors:{
        origin:"*"
    }
});

io.on("connection",(socket)=>{
    console.log("We are connected");  // When connected with Front-end
     
     socket.on("chat",chat=>{
        io.emit('chat',chat); //communicates chat information to other channels that are connected to the server
     })

    socket.on('disconnect',()=>{
        console.log('disconnected')

    })
})



server.listen(PORT,()=>console.log('Listening to port 5001'))