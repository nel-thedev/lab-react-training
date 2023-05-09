import React from 'react';

const Random = ({ min, max }) => {
  let random;

  random = Math.round(Math.random() * (max - min) + min);

  return (
    <div>
      Random between {min} and {max} is {random}
    </div>
  );
};

export default Random;
