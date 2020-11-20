import React from "react";

export const HaCringiato: React.FC<{ parlato: Boolean }> = ({ parlato }) => {
    return (
        <div>
            <div className="oggi">
                <h2>Ha {parlato ? "parlato" : "cringiato"} oggi Tard?</h2>
                <h1>{parlato ? "No" : "Si"}</h1>
            </div>
            <div className="domani">
                <h2>E domani</h2>
                <h1>Pure</h1>
            </div>
        </div>
    );
};
