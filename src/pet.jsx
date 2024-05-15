// import React from "react";
// const pet=(obj) =>{
//     return  React.createElement("div",{},[
//     React.createElement("h1" ,{},obj.nam),
//     React.createElement("h2" ,{},obj.sur),
//     React.createElement("h2" ,{},obj.parent),
//     ]);
// };
const Pet=({name,animal,breed,images,location,id}) =>{
  let hero="http://pets-images.dev-apis.com/pets/none.jpg";
  if(images.length){
    hero=images[0];
  }
  return(
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}/>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
    // <div>
    // <h1>{pet.name}</h1>
    // <h2>{pet.animal}</h2>
    // <h2>{pet.breed}</h2>
    // </div>
  );
};

export default Pet;