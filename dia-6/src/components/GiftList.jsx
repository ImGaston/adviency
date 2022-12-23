import React from 'react';

const GiftList = ({ regalos, removeGift }) => {
  return (
    <>
      {regalos.map((regalos) => {
        return (
          <li
            key={regalos.id}
            className='flex flex-row justify-between pb-2'
          >
            <p>{regalos.regalo} </p>
            <button
              className='cursor-pointer rounded-sm bg-red-300 px-1 text-center font-bold text-white hover:bg-red-700'
              onClick={() => removeGift(regalos)}
            >
              x
            </button>
          </li>
        );
      })}
    </>
  );
};

export default GiftList;
