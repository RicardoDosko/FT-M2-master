import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  // console.log(species);
  return  <div>
            <h2>Species</h2>
            {species.map((specie,index) => (
                <button
                  key={index} // Asignar un valor único como key
                  onClick={() => handleSpecies(specie)} // Llamar a la función handleSpecies con el valor de la especie
                  value={specie.id} // Asignar el valor de la especie al botón
                >
                  {specie.value}
                </button>
              ))}
              <button onClick={handleAllSpecies}>All Animals</button>
          </div>
}
