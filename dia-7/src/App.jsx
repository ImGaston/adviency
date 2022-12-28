import { useState } from 'react';
import RemoveAll from './components/RemoveAll';
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

  return (
    <main className='h-screen w-full'>
      <div>
        <h1 className='text-center text-2xl font-bold'>Regalos:</h1>
        <ul></ul>
        <GiftList />
        <Form />
        <EmptyList />
        <RemoveAll />
      </div>
    </main>
  );
}

export default App;
