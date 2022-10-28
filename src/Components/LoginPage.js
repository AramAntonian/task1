import "./style.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import users from "./user"






function LoginPage(){

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
  

    function handleChange(event){
        setName(event.target.value)
    }

    function handlePass(event){
        setPass(event.target.value);
    }

    function checkUser(){
        let result = false;
        users.map(el => {
            if(el.username == name && el.password == pass) {
                result = true;
            }
        })
        return result;
    }

    const ConditionalLink = ({ children, to, condition }) => (condition && to)
    ? <Link to={to}>{children}</Link>
    : <>{children}</>;
  
    return  (
        <div className = "mainInfo">
               Pleas login!
            <br />
            <br />
            <br />
            <input type = "text"  placeholder="username"  value = {name} onChange = {handleChange}/>
            <input type="password"  placeholder="password" value = {pass} onChange = {handlePass}/>
            <ConditionalLink children={<button>login</button>} to="/welcome" condition={checkUser()} />
        </div>
    )
}


export {LoginPage}