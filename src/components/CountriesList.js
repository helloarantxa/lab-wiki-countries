
import { Link } from 'react-router-dom';



const CountriesList= ({ countries }) => {

return (

    <div class="container">
    <div class="row">
    
<div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>

        <div class="list-group">

        {countries.map((e)=> {
          return <Link to= {`/${e.alpha3Code}`}>{e.name.common}</Link>
        })}

        </div>
      </div>
      </div>
      </div>
)

}

export default CountriesList