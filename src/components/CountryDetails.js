import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import countries from "./../countries.json"


const CountryDetails = ({countries}) => {

    const [country, setCountry]= useState(null)

    const {id}= useParams()

    

    const findCountry = (code)=>{
      return countries.find((country) => country.alpha3Code === code)
    }

    
    
    useEffect(()=>{

      console.log("this is" , findCountry(id))

      setCountry(findCountry(id))

        // const countryFound = countries.find((country)=>{
        //     return country.alpha3code === id
        // })
        // if (countryFound){
        //     setCountry(countryFound)
        // }
    }, [id, countries])




    return (
      
      
      country ?


      

        <div class="col-7">
        <h1>{country.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }} >Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>

                {country.borders.map((e) => {
                  
                    return(
                        <li><Link to={`/${e}`}> {e}</Link></li>
                    )
                })}
                  
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


                : <p>loading...</p>

    )
}

export default CountryDetails