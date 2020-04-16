const socket = (io) => {
    io.on("connection", socket => {
        socket.on('sharePen', data => {
            socket.broadcast.emit('getPen', data);
        });


        socket.on('shareEraser', data => {
            socket.broadcast.emit('getEraser', data);
        });
    });
}

module.exports = {
    socket
}