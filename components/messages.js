import React from 'react';
import Header from './messages/header';
import History from './messages/history';
import MessageBox from './messages/messageBox';

const Messages = () => (
  <div className="relative">
    <Header />
    <History />
    <MessageBox />
  </div>
);

export default Messages;
