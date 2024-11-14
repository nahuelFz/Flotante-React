import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useResultados } from '../context/ResultadosContext';

const EncuestaDetalle = () => {
  const { id } = useParams();
  const { encuestaSeleccionada, seleccionarEncuesta } = useResultados();

  // Estado para almacenar la opción seleccionada
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  // Cargar la encuesta seleccionada cuando cambia el ID
  useEffect(() => {
    seleccionarEncuesta(parseInt(id));
    setOpcionSeleccionada(null); // Limpiar la opción seleccionada cuando se cambia de encuesta
  }, [id, seleccionarEncuesta]);

  if (!encuestaSeleccionada) {
    return <p>Cargando...</p>;
  }

  // Función que maneja la selección de una opción
  const manejarSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion); // Actualizamos el estado con la opción seleccionada
  };

  return (
    <div>
      <h1>{encuestaSeleccionada.pregunta}</h1>
      <h2>Opciones:</h2>
      <ul>
        {encuestaSeleccionada.opciones.map((opcion, index) => (
          <li key={index}>
            <button
              onClick={() => manejarSeleccion(opcion)}
              style={{
                backgroundColor: opcionSeleccionada === opcion ? '#D3D3D3' : '', // Resaltar la opción seleccionada
              }}
            >
              {opcion}
            </button>
          </li>
        ))}
      </ul>
      {opcionSeleccionada && <p>Has seleccionado: {opcionSeleccionada}</p>}
    </div>
  );
};

export default EncuestaDetalle;
