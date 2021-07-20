import { Server } from 'socket.io';

// https://stackoverflow.com/a/62547135
function ioHandler(req, res) {
  if (!res.socket.server.io) {
    console.info('== First use, starting socket.io ==');
    const io = new Server(res.socket.server);
    io.on('connect', socket => {
      console.log(socket.id);
    });

    res.socket.server.io = io;
  } else console.log('socket.io already running');
  res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default ioHandler;
