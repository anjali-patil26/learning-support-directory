import React, { useState } from "react";
export default function AddProviderForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "",
    location: "",
    contactEmail: "",
    phone: "",
    rating: 5,
    shortDescription: "",
    longDescription: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProvider = {
      ...formData,
      id: Date.now().toString()
    };
    onAdd(newProvider);
    setFormData({
      name: "",
      serviceType: "",
      location: "",
      contactEmail: "",
      phone: "",
      rating: 5,
      shortDescription: "",
      longDescription: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">+ Add New Provider</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" required />
        <input name="serviceType" value={formData.serviceType} onChange={handleChange} placeholder="Service Type" className="border p-2 rounded" required />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
        <input name="rating" value={formData.rating} type="number" onChange={handleChange} placeholder="Rating" className="border p-2 rounded" min="1" max="5" />
        <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded" />
      
      </div>
      <button type="submit" className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Add Provider</button>
    </form>
  );
}