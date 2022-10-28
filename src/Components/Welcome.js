
import { Link } from "react-router-dom"

function Welcome(){

    return (  
    <div className="welcomeCont">
    <div className="header">
       <Link to="/"><button>logout</button></Link>
        <button></button>
    </div>
  </div>
  )
  }

  export default Welcome