import React from 'react';

const GiftList = ({ regalos }) => {
  return (
    <ul>
      {regalos.map((regalos) => {
        return (
          <li
            key={regalos.id}
            className='pb-2'
          >
            {regalos.regalo}{' '}
            <button className='cursor-pointer rounded-sm bg-red-300 px-1 text-center font-bold text-white hover:bg-red-700'>
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default GiftList;
