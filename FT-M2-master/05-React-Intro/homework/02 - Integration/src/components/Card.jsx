import React from "react";




export default function Card({characters}) {
   return (
      <div>
         <div className="header">
            {
            <><button onClick={onclose}>X</button>
            <h2>Name: {characters.name}</h2>
            <h2>Status: {characters.status}</h2>
            <h2>Species: {characters.species}</h2>
            <h2>Género: {characters.gender}</h2>
            <h2>Origen: {characters.origin}</h2>
            <img src={characters.image} alt={characters.name} /></>
         }
         </div>
      </div>
   );
}

