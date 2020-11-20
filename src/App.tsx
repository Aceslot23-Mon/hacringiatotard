import React, { useState } from "react";
import "./App.css";

import { HaCringiato } from "./component/Cringiato";

const giorni = [
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
    "Domenica",
];
const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
];

const calcolaGiono = () => {
    const data = new Date();
    const anno = data.getFullYear();
    const giornoSettimana = data.getDay();
    const giorno = data.getDate();
    const mese = data.getMonth();

    return `${giorni[giornoSettimana - 1]} ${giorno} ${mesi[mese]} ${anno}`;
};

function App() {
    const [parlato, setParlato] = useState(false);

    return (
        <div className="App">
            <div className="container">
                <div className="button-container">
                    <button onClick={() => setParlato(false)}>Cringiato</button>
                    <button onClick={() => setParlato(true)}>Parlato</button>
                </div>
                <div className="data">
                    <p className="data-corrente">{calcolaGiono()}</p>
                </div>
                <HaCringiato parlato={parlato} />
            </div>
        </div>
    );
}

export default App;
