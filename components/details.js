import React from 'react';
import Icon from './icon';
import User from './user';
import Divider from './divider';
import FileTypes from './details/fileTypes';

const Details = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3 py-4">
      <Icon size="small" type="right" />
      <h2>Shared files</h2>
    </div>
    <Divider />
    <User
      name="Real estate deals"
      description="10 members"
      orientation="vertical"
      size="big"
    />
    <FileTypes />
  </div>
);

export default Details;
