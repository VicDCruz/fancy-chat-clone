import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import FileType from './fileType';

const FileTypes = props => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center">
      <p className="w-full text-gray-400 caption">File type</p>
      <Icon type="options" size="small" />
    </div>
    <FileType
      iconType="folder"
      color="primary"
      name="Documents"
      description="algo"
    />
    <FileType
      iconType="photo"
      color="secondary"
      name="Photos"
      description="algo"
    />
    <FileType
      iconType="photo"
      color="tertiary"
      name="Movies"
      description="algo"
    />
    <FileType iconType="emoji" name="Other" description="algo" />
  </div>
);

FileTypes.propTypes = {};

export default FileTypes;
