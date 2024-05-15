import { useState, useEffect } from 'react';
import useBreedList from './useBreed'
import Results from './Results';

const ANIMALS = ["dog", "cat", "donkey", "cow"];
// const BREED = ["heyh"];

const SearchParams = () => {
  const [location, setLocation] = useState("bharuch");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [BREED]=useBreedList(animal)

  useEffect(() => {
    requestpet();
  }, []);

  async function requestpet() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={(e)=>{
        e.preventDefault()
        requestpet();
      }
      }>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            name="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => { setAnimal(e.target.value); setBreed("") }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {BREED.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button >Submit</button>
      </form>
      <Results pets={pets} />
{/*       
      {pets.map((pet) => (
        <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
      ))} */}
    </div>
  );
};

export default SearchParams;
