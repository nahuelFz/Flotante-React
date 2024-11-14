import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encuestas from './components/Encuestas';
import EncuestaDetalle from './components/EncuestaDetalle';
import { ResultadosProvider } from './context/ResultadosContext';

const App = () => {
  return (
    <ResultadosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Encuestas />} />
          <Route path="/encuesta/:id" element={<EncuestaDetalle />} />
        </Routes>
      </Router>
    </ResultadosProvider>
  );
};

export default App;
