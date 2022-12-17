import { useState } from 'react';

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
    <main className='App'>
      <h1 className='text-4xl font-bold'>Regalos:</h1>
      <ul>
        {gifts.map((regalos) => {
          return (
            <li
              key={regalos.id}
              className='py-1'
            >
              {regalos.gift}{' '}
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
      <div>
        <input
          type='text'
          value={gift}
          className='m-2 border'
          onChange={(event) => setGift(event.target.value)}
        />
        <button
          type='button'
          className='rounded-xl bg-green-800 py-2 px-4 font-bold text-white'
          onClick={() => addGift()}
        >
          Agregar
        </button>
      </div>
      <button
        onClick={() => removeAll()}
        className='rounded-xl bg-red-300 py-2 px-4 text-center font-bold text-white hover:bg-red-700'
      >
        Eliminar todos
      </button>
    </main>
  );
}

export default App;
