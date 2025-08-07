// components/EmergencyInfo.jsx
import React from 'react';

export default function EmergencyInfo({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-2 text-red-600">Emergency Contact</h2>
        <p className="mb-1"><strong>Phone:</strong> 999 or 123-456-7890</p>
        <p className="mb-1"><strong>Ambulance:</strong> 199</p>
        <p className="mb-1"><strong>Nearest Hospital:</strong> ABC Medical Center</p>
        <p><strong>Address:</strong> 123 Health St, City Name</p>
      </div>
    </div>
  );
}
