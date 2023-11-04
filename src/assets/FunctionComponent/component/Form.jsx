import React ,{useState}from 'react';
import { render } from 'react-dom';

 function Form() {
  const [Fname,setFname]=useState()
  const[lname,setlname]=useState()
  const[age,setage]=useState()
  const[gender,setgender]=useState()
  const[ishide,setishide]=useState(false)

  const handlefname=(e)=>{

    setFname(e.target.value)
  }
  const handlelname=(e)=>{
    setlname(e.target.value)
  }
  const handleage=(e)=>{
    setage(e.target.value)
  }
  const handlegender=(e)=>{
    setgender(e.target.value)
  } 
  const handlesubmit=(e)=>{
    e .preventdefault
    setishide(true)
  }

  return (
    
    <div>
      <Form>
      { ishide&&
        <div>
        <p>{r}</p>
        <label>First name</label>
        <input type="text" value={Fname} onchange={handlefname}/>
        <br>
        </br>
        <label>last name</label>
        <input type="text"value={lname} onchange={handlelname}/>
        <br>
        </br>
        <input type="age" value={age}  onchange={handleage}/>
        <input type="gender"value={gender} onchange={handlegender}/>
       </div> 
 }
    
    
      <p> my Firstname is {Fname}</p>
      <p>my Lastname is{lname}</p>
      <a>my age is{age}</a>
      <g>my gender is{gender}</g>
      
      <button onclick={handlesubmit}>submit</button>       
      
 
      </Form>
    </div>  
  )
    
} 

 
 export default  Form