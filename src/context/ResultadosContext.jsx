import { createContext, useState, useContext } from 'react'

const ResultadosContext = createContext()

export function ResultadosProvider ({ children }) {
  const [resultados, setResultados] = useState({})

  const actualizarResultado = (idEncuesta, opcionSeleccionada) => {
    setResultados(/* Actualizar Resultado */)
  }

  return (
    <ResultadosContext.Provider value={{ resultados, actualizarResultado }}>
      {children}
    </ResultadosContext.Provider>
  )
}

export const useResultados = () => useContext(ResultadosContext)
