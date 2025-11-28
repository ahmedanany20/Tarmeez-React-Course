import { useState } from "react";


export default function MyForm (){
    const [formInputs, setFormInputs] = useState({})
    
    return(

        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(formInputs)

        }}>
            <label>Title: </label>
            <input value={formInputs.name} onChange={(event)=>{setFormInputs({...formInputs, name:event.target.value})}}/>
            <hr>
            </hr>
            <label>Body: </label>
            <input value={formInputs.email} onChange={(event)=>{setFormInputs({...formInputs, email:event.target.value})}}/>
            <hr>
            </hr>

            <label>Age: </label>
            <input value={formInputs.age} onChange={(event)=>{setFormInputs({...formInputs, age:event.target.value})}}/>
            <hr></hr>
            
            <button>Submit</button>
        </form>
    )

}