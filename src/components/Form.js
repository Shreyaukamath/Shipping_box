// import React from 'react'
import React, {useState} from "react"; 

function Form() {
  const [itemName, setName] = useState("xyz");
  const [itemWeight, setWeight] = useState("xxx");
  const [itemColor, setColor] = useState("white");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
        itemName: itemName,
        itemWeight: itemWeight,
        itemColor: itemColor,
    }
   console.log(data
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={itemName}placeholder="Student name" 
        onChange={(e) =>setName(e.target.value)}/><br></br><br></br>
     
      <input type="email" value={itemWeight}placeholder="Email address"
       onChange={(e) =>setEmail(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={itemColor}placeholder="Phone number"
       onChange={(e) =>setPhone(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={branch}placeholder="Branch"
       onChange={(e) =>setBranch(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={usn}placeholder="USN"
       onChange={(e) =>setUsn(e.target.value)} 
        /><br></br><br></br>
        <button type="submit" style={{color: "pink", backgroundColor: "blue"} }>Submit</button>

        </form>

       
      
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{branch}</p>
      <p>{usn}</p>
    </div>
  )
}

export default Form;