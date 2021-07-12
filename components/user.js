import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Icon from './icon';

const IMAGE_SIZES = {
  small: { width: 25, height: 25 },
  regular: { width: 43, height: 43 },
  big: { width: 65, height: 65 },
};

const ORIENTATIONS = ['horizontal', 'vertical'];

function User({
  name = '',
  imageUrl = '',
  orientation = ORIENTATIONS[0],
  size = 'regular',
  description = '',
}) {
  const direction = orientation === ORIENTATIONS[0] ? 'flex-row' : 'flex-col';
  const imageSize = IMAGE_SIZES[size];
  return (
    <div className={`flex ${direction} gap-4 items-center`}>
      {imageUrl ? (
        <div className="w-max">
          <Image
            className="rounded-full"
            src={imageUrl}
            alt="Image profile"
            width={imageSize.width}
            height={imageSize.height}
          />
        </div>
      ) : (
        <div className="border border-primary-300 bg-primary-100 rounded-full w-min">
          <Icon type="user" color="primary" size={size} disableBackground />
        </div>
      )}
      <div
        className={`flex flex-col gap-1 ${
          orientation === ORIENTATIONS[1] ? 'text-center' : ''
        }`}
      >
        {orientation === ORIENTATIONS[0] ? <p>{name}</p> : <h2>{name}</h2>}
        {description && <p className="text-gray-400 caption">{description}</p>}
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  orientation: PropTypes.oneOf(ORIENTATIONS),
  size: PropTypes.oneOf(Object.keys(IMAGE_SIZES)),
  description: PropTypes.string,
};

export default User;
