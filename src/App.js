import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Component/Country/Countries';
// import Naim from './Component/Person/Naim';


function App() {
  return (
    <div className="App">
    <Countries></Countries> 
     {/* <Naim></Naim> */}
    </div>
  );
}




// function Loadcountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[])
//   return(
//     <div>
//       <h1>Visit all the country</h1>
//       <h3>Available Country {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population} offical={country.name.official} ></Country>)
//       }
//     </div>
//   )
// }




// function Loadcountries(){
//   const [countries, setCountries] = useState([])
//   useEffect( ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data =>setCountries(data))

//   } ,[])
//   return (
//     <div>
//       <h1>all country visit</h1>
//       <h3>Available countries: {countries.length} </h3>
//       {
//         countries.map(country=> <Country name={country.name.common} population={country.population} offical={country.name.official}></Country>)
//       }
//     </div>
//   );
// }

// function Country(propos){
//   return(
//     <div>
//       <h2>Country Name: {propos.name}</h2>
//       <h2>Officel name: {propos.offical}</h2>
//       <h2>Population: {propos.population}</h2>
//       <br />
//     </div>
//   )
// }

export default App;
