import React from 'react';

const RemoveAll = () => {
  return (
    <div className='flex flex-col items-center pb-4'>
      <button
        onClick={() => removeAll()}
        className='rounded-2xl bg-red-300 py-2 px-4 font-bold text-white hover:bg-red-700'
      >
        Eliminar todos
      </button>
    </div>
  );
};

export default RemoveAll;
