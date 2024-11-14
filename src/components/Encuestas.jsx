import React, { useEffect } from 'react';
import { useResultados } from '../context/ResultadosContext';
import { Link } from 'react-router-dom';

const Encuestas = () => {
  const { encuestas, cargarEncuestas, loading, error } = useResultados();

  useEffect(() => {
    cargarEncuestas();
  }, [cargarEncuestas]);

  console.log('Encuestas en el estado:', encuestas); // Ver los datos cargados

  if (loading) {
    return <p>Cargando encuestas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Encuestas</h1>
      <ul>
        {encuestas.length === 0 ? (
          <p>No hay encuestas disponibles.</p>
        ) : (
          encuestas.map((encuesta) => (
            <li key={encuesta.id}>
              <Link to={`/encuesta/${encuesta.id}`}>{encuesta.pregunta}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Encuestas;
