import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-60 min-h-screen p-4 hidden md:block border-r">
      <ul className="space-y-3 text-lg">
        <li className="font-medium text-indigo-600">🏠 Home</li>
        <li className="text-gray-700">📄 About</li>
        <li className="text-gray-700">📧 Contact</li>
      </ul>
    </aside>
  );
}

