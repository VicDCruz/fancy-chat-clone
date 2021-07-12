import React from 'react';

const Header = () => (
  <div className="glass flex border-b-2 px-5 py-5 sticky top-0 bg-white items-center">
    <h2 className="w-full">Group Chat</h2>
    <div className="flex gap-4">
      <p className="caption px-3 py-2 text-secondary-800 hover:bg-secondary-400 hover:text-secondary-900 bg-secondary-300 rounded-md">
        Messages
      </p>
      <p className="caption px-3 py-2 text-secondary-800 hover:bg-secondary-400 hover:text-secondary-900 bg-secondary-300 rounded-md">
        Participants
      </p>
    </div>
  </div>
);

export default Header;
