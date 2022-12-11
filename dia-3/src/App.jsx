import { useState } from 'react';
// import reactLogo from './assets/react.svg';

let nextId = 4;

function App() {
  const listado = [
    {
      id: 1,
      name: 'Ganar mundial',
    },
    {
      id: 2,
      name: 'Tiny house',
    },
    {
      id: 3,
      name: 'Camiseta de la selección',
    },
  ];
  const [regalo, setRegalo] = useState('');
  const [regalos, setRegalos] = useState(listado);

  const agregarRegalo = (event) => {
    setRegalo(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className='App'>
      <header>
        <nav>
          <h2>Reloj de santa:</h2>
        </nav>
      </header>
      <main>
        <h1 className='text-4xl font-bold my-2'>Regalos:</h1>
        <ul>
          {regalos.map((regalos) => {
            return <li key={regalos.id}>{regalos.name}</li>;
          })}
        </ul>
        <div className='flex flex-col justify-center'>
          <input
            onChange={agregarRegalo}
            value={regalo}
            type='text'
            className='text-black border-2 my-2'
          />
          <button
            onClick={() => {
              setRegalo('');
              regalos.push({
                id: nextId++,
                name: regalo,
              });
            }}
            className='bg-emerald-800 text-white px-4 py-2 border-0 rounded-lg'
          >
            Agregar
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
