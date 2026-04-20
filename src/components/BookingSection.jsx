import React, { useState } from "react";
import { MapPin, Calendar, Clock, Car } from "lucide-react";

const BookingSection = () => {

  const [tripType, setTripType] = useState("");
  const [carType, setCarType] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    car: "",
    fromLocation: "",
    toLocation: "",
    date: "",
    time: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit Form
  const handleSubmit = async () => {

    if (!formData.name || !formData.mobile) {
      setMessage("⚠️ Please fill required fields");
      return;
    }

    const data = {
      ...formData,
      tripType,
      carType
    };

    try {
      const response = await fetch(
        "https://amravatitaxibackendproject.onrender.com/api/book", // ✅ FIXED
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      if (response.ok) {
        setMessage("✅ Booking Successful!");

        // Reset Form
        setFormData({
          name: "",
          mobile: "",
          car: "",
          fromLocation: "",
          toLocation: "",
          date: "",
          time: ""
        });

        setTripType("");
        setCarType("");

      } else {
        setMessage("❌ Booking Failed");
      }

      // Auto hide message
      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {
      console.error(error);
      setMessage("❌ Server Error");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4">

      <h1 className="text-2xl sm:text-5xl font-bold mb-3 text-center">
        Call Anytime : +
        <span className="text-blue-400">91 7057540811</span>
      </h1>

      <p className="text-sm sm:text-lg mb-6 text-gray-300 text-center flex items-center justify-center gap-2">
        <Car size={25} />
        Reliable taxi service in Amravati
      </p>

      <div className="bg-gray-800 rounded-xl shadow p-4 sm:p-6 max-w-2xl mx-auto">

        {/* Trip Type */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {["oneway", "round", "local"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setTripType(type)}
              className={`py-2 rounded-lg text-sm font-medium transition 
                ${tripType === type 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-700 text-gray-300"}`}
            >
              {type === "oneway" && "One Way"}
              {type === "round" && "Round"}
              {type === "local" && "Local"}
            </button>
          ))}
        </div>

        {/* Car Type */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {["ac", "nonac"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCarType(type)}
              className={`py-2 rounded-lg text-sm font-medium transition 
                ${carType === type 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-700 text-gray-300"}`}
            >
              {type === "ac" ? "AC" : "Non-AC"}
            </button>
          ))}
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full bg-gray-700 px-4 py-3 mb-3 rounded-lg"
        />

        {/* Mobile + Car */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="bg-gray-700 px-4 py-3 rounded-lg"
          />

          <select
            name="car"
            value={formData.car}
            onChange={handleChange}
            className="bg-gray-700 px-4 py-3 rounded-lg"
          >
            <option value="">Select Car</option>
            <option value="Dzire">Dzire</option>
            <option value="Ertiga">Ertiga</option>
            <option value="Innova">Innova</option>
          </select>

        </div>

        {/* From */}
        <div className="flex items-center bg-gray-700 px-4 py-3 mb-3 rounded-lg">
          <MapPin size={18} className="mr-2" />
          <input
            type="text"
            name="fromLocation"
            value={formData.fromLocation}
            onChange={handleChange}
            placeholder="From"
            className="bg-transparent w-full outline-none"
          />
        </div>

        {/* To */}
        <div className="flex items-center bg-gray-700 px-4 py-3 mb-3 rounded-lg">
          <MapPin size={18} className="mr-2" />
          <input
            type="text"
            name="toLocation"
            value={formData.toLocation}
            onChange={handleChange}
            placeholder="To"
            className="bg-transparent w-full outline-none"
          />
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

          <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
            <Calendar size={18} className="mr-2" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-transparent w-full"
            />
          </div>

          <div className="flex items-center bg-gray-700 px-4 py-3 rounded-lg">
            <Clock size={18} className="mr-2" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-transparent w-full"
            />
          </div>

        </div>

        {/* Message */}
        {message && (
          <div className="mb-4 text-center bg-green-600/20 text-green-400 py-2 rounded">
            {message}
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          BOOK NOW
        </button>

      </div>
    </section>
  );
};

export default BookingSection;