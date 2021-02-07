import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [query, setQuery] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantsArray => {
      setPlants(plantsArray)
    })
  }, [])


  function addPlant(plantObj) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(plantObj)
    })
      .then(res=>res.json())
      .then(plantObj => {
        const newArray = [...plants, plantObj]
        setPlants(newArray)
      })
  }

  function sendUpToDelete(id) {
    console.log(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(res=>res.json())
      .then(() => {

        const newArray = plants.filter(plant => {
          if (plant.id === id) {
            return null
          } else {
            return true
          }
        })
        console.log(newArray)
        setPlants(newArray)
      })

  }

  let filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search query={query} setQuery={setQuery}/>
      <PlantList plants={filteredPlants} sendUpToDelete={sendUpToDelete}/>
    </main>
  );
}

export default PlantPage;
