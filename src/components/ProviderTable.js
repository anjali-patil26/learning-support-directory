import React from "react";
import { Link } from "react-router-dom";

export default function ProviderTable({ providers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {providers.map((provider) => (
        <div key={provider.id} className="bg-white p-4 rounded shadow hover:shadow-md">
          <h3 className="text-xl font-semibold">{provider.name}</h3>
          <p className="text-gray-600">{provider.serviceType} | {provider.location}</p>
          <p className="text-yellow-500">Rating: {provider.rating} ⭐</p>
          <p className="text-sm text-gray-500 mt-2">{provider.shortDescription}</p>
          <Link to={`/providers/${provider.id}`} className="text-blue-600 underline text-sm mt-2 inline-block">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}


