import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import User from './user';
import Divider from './divider';
import SearchBar from './searchBar';
import ListChats from './chats/listChats';

const Chats = props => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col gap-3 sticky top-0 z-10 bg-white pb-2">
      <div className="flex items-center gap-3 py-4">
        <Icon size="small" type="left" />
        <h2>Chat</h2>
      </div>
      <Divider />
      <User
        name="Víctor Cruz"
        size="big"
        orientation="vertical"
        imageUrl={`/api/image`}
      />
      <SearchBar onSearch={text => console.log(text)} />
    </div>
    <ListChats
      chats={Array.from(Array(13), (_, index) => index + 1).map(element => ({
        username: `${element}`,
        imageUrl: `/api/image?random=${Math.round(Math.random() * 100)}`,
        description: `Descripción - ${element}`,
      }))}
    />
  </div>
);

Chats.propTypes = {};

export default Chats;
