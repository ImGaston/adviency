import { useState } from 'react';
// import reactLogo from './assets/react.svg'
//Imagenes en public -> src="/vite.svg" directamente
//Imagenes en assets -> src={reactLogo} importando
let nextId = 4;

function App() {
  const listado = [
    { id: 1, gift: 'Ganar el mundial' },
    { id: 2, gift: 'Tiny house' },
    { id: 3, gift: 'Camiseta de la selección' },
  ];

  const [gift, setGift] = useState('');
  const [gifts, setGifts] = useState(listado);

  return (
    <main>
      <div>
        <h1>Regalos:</h1>
        <ul>
          {gifts.map((regalos) => {
            return <li key={regalos.id}>{regalos.gift}</li>;
          })}
        </ul>
        <div>
          <input
            className='border'
            value={gift}
            onChange={(event) => setGift(event.target.value)}
          />
          <button
            onClick={() => {
              setGift('');
              setGifts([...gifts, { id: nextId++, gift: gift }]);
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
