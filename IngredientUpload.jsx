import React, { useState } from "react";
import axios from "axios";

const IngredientUpload = () => {
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/detect-ingredients`, formData);
      setIngredients(res.data.ingredients);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Detect Ingredients</button>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientUpload;
