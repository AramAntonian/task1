import { LoginPage } from "./Components/LoginPage"
import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Welcome from "./Components/Welcome"



export default function App(){
    
     return (
     <Fragment>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<Welcome />} />
      </Routes>

      </Fragment>
      )

  
}

