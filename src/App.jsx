// import React from 'react'
// import ReactDOM from 'react-dom'
// // import pet from "./pet"

// // const App = () => {
// //     return React.createElement(
// //         "div",
// // {},
// //         React.createElement("h1", {}, "HI neha!"),
// //                 React.createElement(pet,{
// //             nam:"datu",
// //             sur:"patel",
// //                  parent:"y"
// //         }),
// //         React.createElement(pet,{
// //             nam:"neh",
// //             sur:"patel",
// //             parent:"y"
// //         }),
// //         React.createElement(pet,{
// //             nam:"divya",
// //             sur:"patel",
// //             parent:"y"
// //         })
// //     );
// // };
// const App=()=>{
//     <div>
//         <h1>hey</h1>
//         <obj name="datu" sur="patel" parent="y"></obj>
//         <obj name="di" sur="patel" parent="y"></obj>
//         <obj name="nev" sur="patel" parent="y"></obj>

//     </div>
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(React.createElement(App));
import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParam';

// Define custom component starting with a capital letter
// const Obj = ({ name, sur, parent }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Surname: {sur}</p>
//     <p>Parent: {parent}</p>
//   </div>
// );

const App = () => {
  return (
    <div>
      <h1>hey</h1>
      {/* Correct usage of custom component */}
      {/* <Obj name="datu" sur="patel" parent="y" />
      <Obj name="di" sur="patel" parent="y" />
      <Obj name="nev" sur="patel" parent="y" /> */}
      <SearchParams/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
