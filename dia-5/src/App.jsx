import { useState } from 'react';
import bgImage from './assets/bg-image.jpg';

let nextId = 4;

function App() {
  const listado = [
    { id: 1, gift: 'Ganar el mundial' },
    { id: 2, gift: 'Tiny House' },
    { id: 3, gift: 'Camiseta de Argentina' },
  ];

  const [gift, setGift] = useState('');
  const [gifts, setGifts] = useState(listado);

  const removeAll = () => {
    setGifts([]);
  };

  const addGift = () => {
    setGift('');
    setGifts([...gifts, { id: nextId++, gift: gift }]);
  };

  const removeGift = (regalos) => {
    console.log('chau regalo');
    setGifts(gifts.filter((regalo) => regalo.id !== regalos.id));
  };

  return (
    <main
      className='flex h-screen flex-col items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='h-max w-2/3 rounded-3xl border border-gray-100 bg-gray-600 bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter'>
        <h1 className='mb-4 pt-2 text-center text-4xl font-bold text-white'>
          Regalos:
        </h1>
        <ul className='px-2'>
          {gifts.map((regalos) => {
            return (
              <li
                key={regalos.id}
                className='flex flex-row justify-between py-1 pl-2'
              >
                <p className='pr-2 font-bold text-white'>{regalos.gift}</p>
                <button
                  className='rounded-2xl bg-red-300 p-1 text-center font-bold text-white hover:bg-red-700'
                  onClick={() => removeGift(regalos)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <div className='flex flex-col items-center justify-center pb-4'>
          <input
            type='text'
            value={gift}
            className='m-2 border px-2'
            onChange={(event) => setGift(event.target.value)}
          />
          <button
            type='button'
            className='rounded-xl bg-green-800 py-3 px-4 font-bold text-white'
            onClick={() => addGift()}
          >
            Agregar regalo
          </button>
        </div>
        <div className='flex flex-col items-center pb-4'>
          <button
            onClick={() => removeAll()}
            className='rounded-xl border-2 border-red-300 bg-red-300 px-4 py-2 font-bold text-white hover:border-2 hover:border-white hover:bg-red-700'
          >
            Eliminar todos
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
