import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto
const ResultadosContext = createContext();

// Custom hook para acceder al contexto
export const useResultados = () => {
  return useContext(ResultadosContext);
};

// Componente proveedor del contexto
export const ResultadosProvider = ({ children }) => {
  const [encuestas, setEncuestas] = useState([]);
  const [encuestaSeleccionada, setEncuestaSeleccionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar las encuestas desde el archivo JSON
  const cargarEncuestas = async () => {
    try {
      console.log('Intentando cargar encuestas...');
      const response = await fetch('/encuestas.json');
      if (!response.ok) {
        throw new Error('Error al cargar las encuestas');
      }
      const data = await response.json();
      console.log('Encuestas cargadas:', data); // Agregamos el log para ver los datos
      setEncuestas(data);
    } catch (error) {
      console.error('Error al cargar las encuestas:', error); // Log de error
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const seleccionarEncuesta = (id) => {
    const encuesta = encuestas.find((encuesta) => encuesta.id === id);
    setEncuestaSeleccionada(encuesta);
  };

  // Cargar las encuestas cuando el componente se monte
  useEffect(() => {
    cargarEncuestas();
  }, []);

  return (
    <ResultadosContext.Provider
      value={{
        encuestas,
        cargarEncuestas,
        seleccionarEncuesta,
        encuestaSeleccionada,
        loading,
        error,
      }}
    >
      {children}
    </ResultadosContext.Provider>
  );
};

