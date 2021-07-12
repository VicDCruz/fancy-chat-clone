import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';
import User from './user';
import Divider from './divider';

const Chats = props => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Icon size="small" type="left" />
      <h2>Chat</h2>
    </div>
    <Divider />
    <User name="Víctor Cruz" orientation="vertical" />
  </div>
);

Chats.propTypes = {};

export default Chats;
