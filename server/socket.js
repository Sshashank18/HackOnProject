const socket = (io) => {
    io.on("connection", socket => {
        console.log(socket.id);
        socket.on('sharePen', data => {
            console.log(data);
        });


        socket.on('shareEraser', data => {
            console.log(data);
        });
    });
}

module.exports = {
    socket
}