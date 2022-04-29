import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ addItem }) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({ name, category })


  }
  
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        />
      </label>

      <label>
        Category:
        <select 
        onChange={(e) => setCategory(e.target.value)} 
        value={category} 
        name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
