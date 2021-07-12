import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Chat from './chat';

const ListChats = ({ chats = [] }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center">
      <p className="caption text-gray-400 w-full">Last chats</p>
      <div className="flex gap-2">
        <Icon type="plus" color="tertiary" size="small" />
        <Icon type="options" size="small" />
      </div>
    </div>
    <div className="flex flex-col">
      {chats.map(chat => (
        <Chat
          key={chat.username}
          username={chat.username}
          imageUrl={chat.imageUrl}
          description={chat.description}
        />
      ))}
    </div>
  </div>
);

ListChats.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default ListChats;
