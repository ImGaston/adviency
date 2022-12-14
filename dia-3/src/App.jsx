import { useState } from 'react';
import bgImage from './assets/bg-image.jpg';
// className='bg-fixed'
// style={{ backgroundImage: `url(${bgImage})` }}

//TODO: agregar estilos segun diseño anterior
//TODO: reloj de santa con los dias para navidad

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
  };

  return (
    <>
      <main
        className='bg-fixed h-screen flex flex-col justify-center items-center'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='w-2/3 h-max bg-gray-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
          <h1 className='text-4xl font-bold my-4 text-white text-center'>
            Regalos:
          </h1>
          <ul>
            {regalos.map((regalos) => {
              return (
                <li
                  key={regalos.id}
                  className='font-bold text-white pl-4'
                >
                  {regalos.name}
                </li>
              );
            })}
          </ul>
          <div className='flex flex-col justify-center items-center'>
            <input
              onChange={agregarRegalo}
              value={regalo}
              type='text'
              className='text-black border-2 my-4 w-2/3 h-10'
            />
            <button
              onClick={() => {
                setRegalo('');
                regalos.push({
                  id: nextId++,
                  name: regalo,
                });
              }}
              className='bg-emerald-800 text-white font-bold px-4 py-2 border-0 rounded-lg mb-4'
            >
              Agregar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
