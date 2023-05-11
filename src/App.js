
import './App.css';
// import countries from "./countries.json";
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {Routes, Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails"
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {

    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((results) => {
        setCountries(results.data)
      
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])

  return (
    <div className="App">

    <Navbar/>

    <div className='landing'>
    <CountriesList countries={countries}/>

<Routes> 

<Route path= "/:id" element={<CountryDetails countries={countries} />}/>

</Routes>
    </div>
   

    </div>

  );
}

export default App;
