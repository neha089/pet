// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // // import pet from "./pet"

// // // const App = () => {
// // //     return React.createElement(
// // //         "div",
// // // {},
// // //         React.createElement("h1", {}, "HI neha!"),
// // //                 React.createElement(pet,{
// // //             nam:"datu",
// // //             sur:"patel",
// // //                  parent:"y"
// // //         }),
// // //         React.createElement(pet,{
// // //             nam:"neh",
// // //             sur:"patel",
// // //             parent:"y"
// // //         }),
// // //         React.createElement(pet,{
// // //             nam:"divya",
// // //             sur:"patel",
// // //             parent:"y"
// // //         })
// // //     );
// // // };
// // const App=()=>{
// //     <div>
// //         <h1>hey</h1>
// //         <obj name="datu" sur="patel" parent="y"></obj>
// //         <obj name="di" sur="patel" parent="y"></obj>
// //         <obj name="nev" sur="patel" parent="y"></obj>

// //     </div>
// // }
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(React.createElement(App));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import SearchParams from './SearchParam';
// import {Link, BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Details from './Details';
// import { QueryCache,QueryClient, QueryClientProvider } from '@tanstack/react-query';

// // Define custom component starting with a capital letter
// // const Obj = ({ name, sur, parent }) => (
// //   <div>
// //     <p>Name: {name}</p>
// //     <p>Surname: {sur}</p>
// //     <p>Parent: {parent}</p>
// //   </div>
// // );
// const queryClient=new QueryClient({
// defaultOptions:{
//   queries:{
//     staleTime:Infinity,
//     cacheTime:Infinity
//   },
// },
// });


// const App = () => {
//   return (
//     <BrowserRouter>
//     <QueryClientProvider client={queryClient}>
//      <header>
//   <Link to="/">Adopt Me!</Link>
// </header>
//       {/* Correct usage of custom component */}
//       {/* <Obj name="datu" sur="patel" parent="y" />
//       <Obj name="di" sur="patel" parent="y" />
//       <Obj name="nev" sur="patel" parent="y" /> */}
//       {/* <SearchParams/> */}
     
//       <Routes>
//         <Route path="/details/:id" element={<Details></Details>}></Route>
//         <Route path="/" element={<SearchParams/>}></Route>
//       </Routes>
//       </QueryClientProvider>
//       </BrowserRouter>
     
  
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./SearchParam";
import { useState } from "react";
import AdoptedPetContex from "./AdoptedPetContex";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedpet=useState(null);
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContex.Provider value={adoptedpet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
          </AdoptedPetContex.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);