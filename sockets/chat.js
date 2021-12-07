module.exports = (io, socket) => {
    socket.on('new user', (username) => {
        console.log(`${username} has joined the chat!`);
        io.emit('new user', username);
    });

    socket.on('new message', (data)=>{
        console.log(`${data.sender}: ${data.message}`);
        io.emit('new message', data);
    })
}