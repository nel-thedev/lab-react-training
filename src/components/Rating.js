import React from 'react';

const Rating = ({ children }) => {
  return (
    <div>
      {'🤩'.repeat(Math.round(children))}
      {'😭'.repeat(5 - Math.round(children))}
    </div>
  );
};

export default Rating;
