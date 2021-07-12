import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const FileType = ({
  name = '',
  iconType = '',
  description = '',
  color = 'default',
}) => (
  <div className="flex gap-2 items-center">
    <Icon type={iconType} size="big" color={color} />
    <div className="flex flex-col w-full">
      <p>{name}</p>
      <p className="caption text-gray-400">{description}</p>
    </div>
    <Icon type="right" size="small" />
  </div>
);

FileType.propTypes = {
  name: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default FileType;
