import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import providersData from "../data/providers.json";
import Header from "../components/Header";

export default function ProviderDetail() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const result = providersData.find((p) => p.id === id);
    setProvider(result);
  }, [id]);

  if (!provider) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 font-bold">❌ Provider not found.</p>
        <Link to="/" className="text-blue-500 underline">← Back to List</Link>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto p-6">
        <Link to="/" className="text-blue-600 underline">← Back to List</Link>
        <h1 className="text-3xl font-bold mt-4">{provider.name}</h1>
        <p className="text-gray-600">{provider.serviceType} - {provider.location}</p>
        <p className="text-yellow-500 my-2">Rating: {provider.rating} ⭐</p>
        <p className="mt-2">{provider.longDescription}</p>
        <div className="mt-4">
          <p><strong>Email:</strong> {provider.contactEmail}</p>
          <p><strong>Phone:</strong> {provider.phone}</p>
        </div>
      </div>
    </div>
  );
}


