// Import React library
import React from "react";

// Create main component
const DriverAvailableApp = () => {

  // Static availability (can be dynamic later)
  const isAvailable = true;

  // Owner contact details
  const ownerPhone = "+91 7057540811";
  const whatsappNumber = "+91 7057540811";

  return (
    // Main container with center alignment
    <div className="p-4 flex justify-center">

      {/* Driver Availability Box */}
      <div
        // Increased width (max-w-2xl)
        className={`w-full max-w-2xl px-6 py-5 rounded-xl border shadow-sm
        ${
          isAvailable
            ? "bg-green-50 border-green-400"
            : "bg-red-50 border-red-400"
        }`}
      >

        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          
          {/* Title */}
          <p className="text-lg font-semibold text-gray-700">
            Driver Available
          </p>

          {/* Status */}
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full
            ${
              isAvailable
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {isAvailable ? "Yes" : "No"}
          </span>
        </div>

        {/* Divider */}
        <hr className="my-3 border-gray-300" />

        {/* Contact Info - Single Line */}
        <div className="flex flex-wrap items-center justify-between text-sm text-gray-700">

          {/* Phone */}
          <p>
            📞 <span className="font-medium">Contact:</span> {ownerPhone}
          </p>

          {/* WhatsApp */}
          <p>
            💬 <span className="font-medium">WhatsApp:</span> {whatsappNumber}
          </p>

        </div>

      </div>

    </div>
  );
};

// Export component
export default DriverAvailableApp;