import React, {useState} from "react";
import UpdateForm from "./UpdateForm"

function PlantCard({plant, deleteById, updateArray}) {

  const [inStock, setInStock] = useState(true)
  const [priceform, setPriceform] = useState(false)


  const handleClick = () => {
    setInStock(inStock => !inStock)
  }

  const changePrice = () => {
    setPriceform(priceform => !priceform)
  }

  const updatePrice = (newPrice) => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({price: newPrice})
  })
  .then(res => res.json())
  .then(updatedObj => {
    setPriceform(priceform => !priceform)
    updateArray(updatedObj)
  })
  }

  const deleteItem = () => {
    deleteById(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!priceform ? (
        <button onClick={changePrice} className="primary">Update Price</button>
      ) : 
       (<div>
        <button onClick={changePrice} >Nevermind</button>
        <UpdateForm updatePrice={updatePrice}/>
        </div>
      )}
      <br/>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} >Out of Stock</button>
      )}
      <br />
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
}

export default PlantCard;
