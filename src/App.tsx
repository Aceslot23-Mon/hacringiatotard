import React from 'react';
import './App.css';

const giorni = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre",
  "Dicembre"];

function App() {
  const calcolaGiono = () => {
    const data = new Date();
    const anno = data.getFullYear();
    const giornoSettimana = data.getDay();
    const giorno = data.getDate();
    const mese = data.getMonth();

    return `${giorni[giornoSettimana - 1]} ${giorno} ${mesi[mese]} ${anno}`
  }

  return (
    <div className="App">
      <div className="container">
        <div className="data">
          <p className="data-corrente">{calcolaGiono()}</p>
        </div>
        <div className="oggi">
          <h2>Ha cringiato oggi Tard?</h2>
          <h1>Si</h1>
        </div>
        <div className="domani">
          <h2>E domani</h2>
          <h1>Pure</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
