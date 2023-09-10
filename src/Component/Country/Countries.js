import React, { useEffect, useState } from 'react';
import "./Countries.css"


const Countries = () => {
    const [countries, setCountries] =useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])

    return (
      <div>
        <h2>Country {countries.length}</h2>
       <div className="country-container">
       {countries.map((country) => (
          <Desh
            country ={country}
            key ={country.cca3}
          ></Desh>
        ))}
       </div>
      </div>
    );
};

function Desh(props) {
    const { name, population, capital, region, translations ,flags} = props.country;
  
    return (
      <div className='country'>
        <h3>Country Name: {name.common} </h3>
        <img src={flags.png} alt="" />
        <h2>Captial : {capital} </h2>
        <h3>Region: {region}</h3>
        <h3>Official name in there language : {translations.ara.official}</h3>
        <h3>Population: {population}</h3>
        <p>Official Name: {name.official}</p>
      </div>
    );
  }
  
export default Countries;