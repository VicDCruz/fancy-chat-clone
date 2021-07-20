import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import Header from './messages/header';
import History from './messages/history';
import MessageBox from './messages/messageBox';

const Messages = () => {
  useEffect(() => {
    fetch('api/socketio').finally(() => {
      const socket = io('/api/socket');
      socket.on('connect', () => console.log(`Connected to ${socket.id}`));
    });
  }, []);
  return (
    <div className="relative">
      <Header />
      <History />
      <MessageBox />
    </div>
  );
};

export default Messages;
