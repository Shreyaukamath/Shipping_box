import React, {useState} from "react"; 


function ShippingForm(props) {
    const [itemName, setName] = useState("xyz");
    const [itemWeight, setWeight] = useState("5");
    const [itemColor, setColor] = useState("white");
    const [itemPlace, setPlace] = useState("xyz");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const data = {
          itemName: itemName,
          itemWeight: itemWeight,
          itemColor: itemColor,
          itemPlace: itemPlace
      };
      props.addToListCallback(data);
     
    };
  
  return (
    <div><h1>Shipping Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={itemName}placeholder="Item Name" 
        onChange={(e) =>setName(e.target.value)}/><br></br><br></br>

     
      <input type="number" value={itemWeight}placeholder="Item Weight"
       onChange={(e) =>setWeight(e.target.value)} 
        /><br></br><br></br>
        <label>Color</label><br></br>
        <input type="color" value={itemColor}placeholder="Item Color"
       onChange={(e) =>setColor(e.target.value)} 
        /><br></br><br></br>
        <input type="text" value={itemPlace}placeholder="Place"
       onChange={(e) =>setPlace(e.target.value)} 
        /><br></br><br></br>
       
        <button type="submit" style={{color: "pink", backgroundColor: "white"} }>Submit</button>

        </form>
    </div>
  )
}

export default ShippingForm
