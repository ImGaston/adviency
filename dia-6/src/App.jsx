import { useState } from 'react';
import EmptyList from './components/EmptyList';
import Form from './components/Form';
import GiftList from './components/GiftList';

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
    <main className='flex h-screen flex-col items-center justify-center'>
      <h1 className='text-center text-3xl font-bold'>Regalos:</h1>
      <ul className='w-3/4 sm:w-2/4'>
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
      <button
        onClick={() => removeAll()}
        className='rounded-2xl bg-red-300 py-2 px-4 font-bold text-white hover:bg-red-700'
      >
        Eliminar todos
      </button>
    </main>
  );
}

export default App;
