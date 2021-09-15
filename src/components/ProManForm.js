import React, { useState } from "react";
import axios from 'axios';

function ProManForm(){
    const [form, setForm]=useState({})
    function formHandler(e){
        e.preventDefault()
        console.log(form)
        axios.post("http://localhost:8000/api/makeProduct",form)
        .then(res=>console.log(res))
        .catch(err=>console.log("axios error"+err))

    }
    return(
        <div>
            <form onSubmit={formHandler}>
                <input type="text" onChange={e=>setForm({...form, title:e.target.value})}></input>
                <input type="number"onChange={e=>setForm({...form, price:e.target.value})}></input>
                <input type="text"onChange={e=>setForm({...form, description:e.target.value})}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default ProManForm