import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products(){
    
    var [s, setS] = useState([]);

    useEffect(()=>{

        axios.get("https://fakestoreapi.com/products").then((val)=>{

            console.log(val);
             setS(val.data);
        })

    },[])

    var data = s.map((val,ind)=>{

        return(
      <tr key={ind}>
        <td>{val.id}</td>
        <td>{val.title}</td>
        <td>{val.price}</td>
        <td><button><Link to={`/products/${val.id}`}>See More </Link></button></td>
      </tr>
        )
    })

    return(
        <>
        <h1>Products</h1>
        <table>
            {data}
        </table>
        
        
        </>
    )
}
export default Products;