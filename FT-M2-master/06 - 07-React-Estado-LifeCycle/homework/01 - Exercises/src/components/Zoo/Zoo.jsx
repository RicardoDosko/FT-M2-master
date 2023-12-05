import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import "./Zoo.module.css";
// import React from "react";
// import HOOKS
export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
 });
 const handleInputChange = (event)=>{
  setZoo({
    ...zoo,
    zooName: event.target.value,
  });
  
}
React.useEffect(()=>{
    fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
  },[])

  const handleSpecies = (selectedSpecies)=>{
  //  zoo.filter(item => zoo.allAnimals.species === allAnimals.species);
  const filteredAnimals = zoo.allAnimals.filter(animal => animal.specie === selectedSpecies);
  setZoo(prevState => ({
    ...prevState,
    animals: filteredAnimals,
  }));
  }
  const handleAllSpecies = ()=>{
    setZoo(prevState => ({
      ...prevState,
      animals: prevState.allAnimals,
    }));
  }
  return (
    <div className="divContent">
      <label className=".divContentTitle" htmlFor="zooNameInput">Zoo Name:</label>
      <input id="zooNameInput" type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1 className="title">{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}></Species>
      <Animals animals={zoo.animals}></Animals>
    </div>
  );
}
