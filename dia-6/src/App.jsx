import { useState } from 'react';
import EmptyList from './components/EmptyList';
import Form from './components/Form';
import GiftList from './components/GiftList';
import bgImage from './assets/bg-image.jpg';

let setId = 3;

const listado = [
  { id: 1, regalo: 'Ganar la copa' },
  { id: 2, regalo: 'Camiseta selección ⭐️⭐️⭐️' },
];

function App() {
  const [gift, setGift] = useState('');
  const [gifts, setGifts] = useState(listado);

  const addGift = () => {
    if (!gift.length) {
      console.log('escribi algo amigo');
    } else {
      setGift('');
      setGifts([
        ...gifts,
        {
          id: setId++,
          regalo: gift,
        },
      ]);
    }
  };

  const removeAll = () => {
    setGifts([]);
  };

  const removeGift = (regalos) => {
    setGifts(gifts.filter((regalo) => regalo.id !== regalos.id));
  };

  return (
    <main
      className='flex h-screen flex-col items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='h-max w-2/3 rounded-3xl border border-gray-100 bg-gray-600 bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter'>
        <h1 className='mt-2 text-center text-3xl font-bold text-white'>
          Regalos:
        </h1>
        <ul className='m-auto w-3/4 sm:w-2/4'>
          {!gifts.length && <EmptyList />}
          {gifts.length > 0 && (
            <GiftList
              regalos={gifts}
              removeGift={removeGift}
            />
          )}
        </ul>
        <Form
          gift={gift}
          setGift={setGift}
          addGift={addGift}
        />
        <div className='flex flex-col items-center pb-4'>
          <button
            onClick={() => removeAll()}
            className='rounded-2xl bg-red-300 py-2 px-4 font-bold text-white hover:bg-red-700'
          >
            Eliminar todos
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
