import React from 'react';

const Form = ({ gift, setGift, addGift, amount }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center pb-4 pt-6'>
        <input
          className=' rounded-2xl border py-2 pl-2'
          value={gift[0]}
          type='text'
          onChange={(event) => setGift([event.target.value])}
          placeholder='Regalo'
        ></input>
        <input
          className=' ml-2 w-10 rounded-2xl border py-2 text-center'
          type='number'
          value={gift[1]}
          pattern='\d*'
          placeholder='U'
          onChange={(event) => setGift([...gift, event.target.valueAsNumber])}
        ></input>
      </div>
      <div className='justify-centerd flex flex-col items-center'>
        <button
          className=' mb-2 rounded-2xl bg-green-700 py-2 px-4 font-bold text-white'
          type='button'
          onClick={() => addGift()}
        >
          Agregar regalo
        </button>
      </div>
    </>
  );
};

export default Form;
