import Card from './Card';

export default function Cards({ name, status, species, gender, image, id }) {
   return <div>
      <Card 
      id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin}
      image={image}
      onClose={() =>
        window.alert(`Emulamos que se cierra la card de ${name}`)
      }
      
      ></Card>
   </div>;
}
