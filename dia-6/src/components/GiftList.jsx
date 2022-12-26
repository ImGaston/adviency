import React from 'react';

const GiftList = ({ regalos, removeGift }) => {
  return (
    <>
      {regalos.map((regalos) => {
        return (
          <li
            key={regalos.id}
            className='flex flex-row justify-between py-1 pl-2'
          >
            <p className='pr-2 font-bold text-white'>{regalos.regalo} </p>
            <button
              className='cursor-pointer rounded-2xl bg-red-300 p-1 text-center font-bold text-white hover:bg-red-700'
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
