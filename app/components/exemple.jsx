'use client';
import React, { useState } from 'react';

function Exemple() {
  // Étape 1 : Définir l'état pour le tableau
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });

  // Étape 2 : Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter les données du formulaire au tableau
    setItems([...items, formData]);
    // Réinitialiser le formulaire
    setFormData({ name: '', age: '' });
  };

  // Étape 3 : Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{`Name: ${item.name}, Age: ${item.age}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exemple;
