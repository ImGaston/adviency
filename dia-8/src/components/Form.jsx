import React from 'react';

//TODO: Centrar el boton "agregar regalo"

const Form = ({ gift, setGift, addGift, amount }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center pb-4'>
        <input
          className=' rounded-2xl border py-2 pl-2'
          value={gift}
          type='text'
          onChange={(event) => setGift(event.target.value)}
          placeholder='Regalo'
        ></input>
        <input
          className=' ml-2 w-10 rounded-2xl border py-2 text-center'
          type='number'
        ></input>
      </div>
      <button
        className=' mb-2 rounded-2xl bg-green-700 py-2 px-4 font-bold text-white'
        type='button'
        onClick={() => addGift()}
      >
        Agregar regalo
      </button>
    </>
  );
};

export default Form;
