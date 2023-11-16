import React from "react";
import Btn from "./Botones";


const studentName = "Ricardo Nery Dosko";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  
    return(
      <div>
        <h1>Puerco Araña</h1>
        <h3>Mi nombre es: {studentName}</h3>
        {techSkills.map((skill, index) => (
          <li key={index}>{skill}</li> 
        ))}
        <Btn alerts={alerts} />
        
      </div>
    );
    
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
