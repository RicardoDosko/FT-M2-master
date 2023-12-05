import React from 'react';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
  return (
    <div>
      <div className="header">
        <>
          <button onClick={onClose}>X</button>
          <h2>Name: {name}</h2>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Género: {gender}</h2>
          <h2>Origen: {origin}</h2>
          <img src={image} alt={name} />
        </>
      </div>
    </div>
  );
}

