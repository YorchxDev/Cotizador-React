
import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Background from './components/Background';
import Spinner from './components/Spinner';


function App() {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // Mostrar componente de forma condicional

  // Mostrar Spinner
  let componente;
  if(cargando) {
    componente = <Spinner/>
  }
  else if(total === 0) {
    componente = <Mensaje />
  }
  else {
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
    />
  }

  return (
    <Fragment>
      <Background />
      <Header
        titulo="Cotizador de prestamos"
      />
      <div className='container'>
      <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
      />

      <div className='mensajes'>
      {componente}
      </div>
      
      </div>
    </Fragment>
  );

}

export default App;
