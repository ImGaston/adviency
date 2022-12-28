import React from 'react';

const Form = () => {
  return (
    <div className='flex flex-col items-center justify-center pb-4'>
      <input
        className='m-2 rounded-2xl border py-2 pl-2'
        // value={gift}
        type='text'
        // onChange={(event) => setGift(event.target.value)}
      ></input>
      <button
        className='rounded-2xl bg-green-700 py-2 px-4 font-bold text-white'
        type='button'
        // onClick={() => addGift()}
      >
        Agregar regalo
      </button>
    </div>
  );
};

export default Form;
