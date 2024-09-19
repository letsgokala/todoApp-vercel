import React, { useState } from "react";
import Heading from "./Header";
import axios from "axios";


function InputTodo(){
    const [description , setDescription] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await axios.post("/todo" , {
                description : description
            })
            console.log("the submit was succesfull" + response.data)
            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }



    function handleChange(e){
        const myVal = e.target.value;
        setDescription(myVal);
    }

    return (
<>
    
    <form className="d-flex" onSubmit={handleSubmit}> {/*this class makes the child elements in the same line */}
        <input className="form-control mt-5" type="text" onChange={handleChange} value={description}/>  {/*this class make the text place wider */}
        <button className="btn btn-success mt-5">Add</button>    {/*this classess are make the button to look green */}
    </form>
</>
    )
}

export default InputTodo;