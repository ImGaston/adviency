import { useState } from 'react';
import bgImage from './assets/bg-image.jpg';
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

  const handleRemove = (regalos) => {
    console.log('chau regalo ');
    setGifts(gifts.filter((a) => a.id !== regalos.id));
  };

  return (
    <main
      className='flex h-screen flex-col items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='h-max w-2/3 rounded-3xl border border-gray-100 bg-gray-600 bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter'>
        <h1 className='my-4 text-center text-4xl font-bold text-white'>
          Regalos:
        </h1>
        <ul>
          {gifts.map((regalos) => {
            return (
              <div
                key={regalos.id}
                className='flex flex-row justify-between pt-2'
              >
                <li className='pr-4 pl-4 text-lg font-bold text-white'>
                  {regalos.gift}
                </li>
                <span
                  className='p mr-4 self-center rounded-2xl bg-slate-200 p-1'
                  onClick={() => {
                    handleRemove(regalos);
                  }}
                >
                  {' '}
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <div className='flex flex-col items-center justify-center pt-4'>
          <input
            className='input my-4 h-10 w-2/3 border-2 pl-2 font-bold'
            value={gift}
            onChange={(event) => setGift(event.target.value)}
          />
          <button
            className='mb-4 rounded-lg border-0 bg-emerald-800 px-4 py-2 font-bold text-white'
            onClick={() => {
              if (gift == '') {
                console.log('no escribiste nada');
                document.querySelector('.input').className =
                  'input my-4 h-10 w-2/3 border-2 pl-2 font-bold border-rose-600';
              } else {
                setGift('');
                setGifts([...gifts, { id: nextId++, gift: gift }]);
              }
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
