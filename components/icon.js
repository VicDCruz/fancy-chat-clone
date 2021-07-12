import React from 'react';
import PropTypes from 'prop-types';
import { icons } from '../constants';

const ICON_SIZES = {
  small: 'h-4 w-4',
  regular: 'h-6 w-6',
  big: 'h-9 w-9',
};

const COLORS = {
  default: {
    background: 'bg-transparent',
    backgroundHover: 'bg-gray-300',
    textColor: 'text-gray-500',
  },
  primary: {
    background: 'bg-primary-100',
    backgroundHover: 'bg-primary-300',
    textColor: 'text-primary-500',
  },
  secondary: {
    background: 'bg-secondary-100',
    backgroundHover: 'bg-secondary-300',
    textColor: 'text-secondary-500',
  },
  tertiary: {
    background: 'bg-tertiary-100',
    backgroundHover: 'bg-tertiary-300',
    textColor: 'text-tertiary-500',
  },
};

function getIcon(type = '', textColor = '', size = '') {
  return <div className={`${size} ${textColor}`}>{icons[type]}</div>;
}

const Icon = ({
  color = 'default',
  type = 'basic',
  size = 'regular',
  disablePadding = false,
  disableBackground = false,
}) => {
  const colorInfo = COLORS[color];
  const paddingSizes = { small: 'p-1', regular: 'p-2', big: 'p-3' };
  const background = !disableBackground
    ? `hover:${colorInfo.backgroundHover} ${colorInfo.background}`
    : '';
  return (
    <div
      className={`${
        !disablePadding && paddingSizes[size]
      } rounded-lg w-min ${background}`}
    >
      {getIcon(type, colorInfo.textColor, ICON_SIZES[size])}
    </div>
  );
};

Icon.propTypes = {
  color: PropTypes.oneOf(Object.keys(COLORS)),
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(ICON_SIZES)),
  disablePadding: PropTypes.bool,
  disableBackground: PropTypes.bool,
};

export default Icon;
