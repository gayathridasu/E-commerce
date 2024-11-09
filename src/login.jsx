import { Link } from "react-router-dom";

function Hello(){

    return(
        <>
        
        <h1>Login </h1>

        <button><Link to="/products">Login</Link></button>
        </>
    )
}
export default Hello;