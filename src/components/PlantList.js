import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, sendUpToDelete, updateArray}) {

  const deleteById = (id) => {
    sendUpToDelete(id)
  }

  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} deleteById={deleteById} updateArray={updateArray}/>
  })
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
