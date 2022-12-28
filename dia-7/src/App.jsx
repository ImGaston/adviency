import { useState } from 'react';
import RemoveAll from './components/RemoveAll';
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
          {gifts.length > 0 && <GiftList regalos={gifts} />}
        </ul>
        <Form />
        <RemoveAll />
      </div>
    </main>
  );
}

export default App;
