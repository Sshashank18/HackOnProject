const socket = (io) => {
    io.on("connection", socket => {
        socket.on('sharePen', data => {
            socket.broadcast.emit('getPen', data);
        });


        socket.on('shareEraser', data => {
            socket.broadcast.emit('getEraser', data);
        });

        socket.on('shareInput' ,data => {
            socket.broadcast.emit('getInput', data);
        });
        
        socket.on('shareTextEditor' ,data => {
            socket.broadcast.emit('getTextEditor', data);
        });
        socket.on('sendMessage', data => {
            socket.broadcast.emit('recieveMessage', data);
        });
    });
}

module.exports = {
    socket
}