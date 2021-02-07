import React, {useState} from "react"

function UpdateForm({updatePrice}) {

    const [price, setPrice] = useState()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        updatePrice(parseFloat(price))
        setPrice(0.0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} step="0.01" placeholder="Enter new price..."/>
            <button type="submit">Update Price</button>
        </form>
    )
}

export default UpdateForm