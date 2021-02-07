import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, sendUpToDelete}) {

  const deleteById = (id) => {
    sendUpToDelete(id)
  }

  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} deleteById={deleteById}/>
  })
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
