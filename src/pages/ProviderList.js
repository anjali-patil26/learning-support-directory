import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddProviderForm from "../components/AddProviderForm";
import ProviderTable from "../components/ProviderTable";
import staticProviders from "../data/providers.json";

export default function ProviderList() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const local = localStorage.getItem("providers");
    if (local) {
      setProviders(JSON.parse(local));
    } else {
      setProviders(staticProviders);
      localStorage.setItem("providers", JSON.stringify(staticProviders));
    }
  }, []);

  const addProvider = (newOne) => {
    const updated = [...providers, newOne];
    setProviders(updated);
    localStorage.setItem("providers", JSON.stringify(updated));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Header />
        <AddProviderForm onAdd={addProvider} />
        <ProviderTable providers={providers} />
      </div>
    </div>
  );
}


