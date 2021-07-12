import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Icon from './icon';

const IMAGE_SIZES = {
  small: { width: 40, height: 40 },
  regular: { width: 70, height: 70 },
  big: { width: 100, height: 100 },
};

const ORIENTATIONS = ['horizontal', 'vertical'];

function User({
  name = '',
  imageUrl = '',
  orientation = ORIENTATIONS[0],
  imageSize = 'regular',
  description = '',
}) {
  const direction = orientation === ORIENTATIONS[0] ? 'flex-row' : 'flex-col';
  const size = IMAGE_SIZES[imageSize];
  return (
    <div className={`flex ${direction} gap-4 items-center`}>
      {imageUrl ? (
        <div className="w-max">
          <Image
            className="rounded-full"
            src={imageUrl}
            alt="Image profile"
            width={size.width}
            height={size.height}
          />
        </div>
      ) : (
        <div className="border rounded-full w-min">
          <Icon type="user" size={imageSize} disableBackground />
        </div>
      )}
      <div className={`flex ${direction} gap-1 text-center`}>
        <h2>{name}</h2>
        {description && <p className="text-gray-400 caption">{description}</p>}
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  orientation: PropTypes.oneOf(ORIENTATIONS),
  imageSize: PropTypes.oneOf(Object.keys(IMAGE_SIZES)),
  description: PropTypes.string,
};

export default User;
