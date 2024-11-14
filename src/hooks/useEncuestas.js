import { useState, useEffect } from 'react';

const useEncuestas = () => {
  const [encuestas, setEncuestas] = useState([]);

  useEffect(() => {
    const cargarEncuestas = async () => {
      const response = await fetch('/encuestas.json');
      const data = await response.json();
      setEncuestas(data);
    };

    cargarEncuestas();
  }, []);

  return { encuestas };
};

export default useEncuestas;
