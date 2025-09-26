import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PlantManager() {
  let apiUrl = import.meta.env.VITE_API_URL; // ✅ fixed env usage
  const [plants, setPlants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  // Fetch plants on mount
  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      let res = await axios.get(`${apiUrl}/plants/list`);
      setPlants(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/plants/add`, formData);
      setFormData({ name: "", description: "", image: "" });
      fetchPlants(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">🌱 Plant Manager</h1>

      {/* Add Plant Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Add a New Plant</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant Name"
          className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-green-400"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-green-400"
          rows="3"
          required
        ></textarea>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add Plant
        </button>
      </form>

      {/* Plant List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <div
            key={plant._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            {plant.image && (
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-700">{plant.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{plant.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
