// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";


// const Cache = {};

export default function useBreedList(animal) {
  const result=useQuery(["breeds" , animal],fetchBreedList);
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState();

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (Cache[animal]) {
  //     setBreedList(Cache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");

  //     try {
  //       const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  //       const json = await res.json();
        
  //       Cache[animal] = json.breeds || [];
  //       setBreedList(Cache[animal]);
  //       setStatus("loaded");
  //     } catch (error) {
  //       console.error("Error fetching breed list:", error);
  //       setStatus("error");
  //     }
  //   }
  // }, [animal]);

  return [result?.data?.breeds ?? [], status];
}
