import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Seemore(){
    var [see, setsee] = useState("")
    var i= useParams();
    console.log(i);

   
        useEffect(()=>{

         axios.get("https://fakestoreapi.com/products/" +i.id).then((val)=>{
         
            console.log(val.data);
            setsee(val.data);
            
         })
          
        })


    return(
        <>

        {console.log(see.id, "hey")}
        <h1>See more {i.id}</h1>

        {Object.keys(see).length>0?(<div>
            <h1>{see.id}</h1>
            <h1>{see.title}</h1>
            <h1><img src={see.image} alt="img" /></h1>
        </div>):""
        }
        </>
    )
}
export default Seemore;