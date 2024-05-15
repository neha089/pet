import { useEffect, useState } from "react";

const Cache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (Cache[animal]) {
      setBreedList(Cache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      try {
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
        const json = await res.json();
        
        Cache[animal] = json.breeds || [];
        setBreedList(Cache[animal]);
        setStatus("loaded");
      } catch (error) {
        console.error("Error fetching breed list:", error);
        setStatus("error");
      }
    }
  }, [animal]);

  return [breedList, status];
}
