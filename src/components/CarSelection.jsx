import React from "react";

const cars = [
  { name: "Dzire", image: "/dzire.jpg" },
  { name: "Ertiga", image: "/ertiga.jpg" },
  { name: "Innova", image: "/innova.jpg" },
  { name: "Bolero", image: "/bolero.jpg" },
];

const CarSelection = ({ selectedCar, setSelectedCar }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {cars.map((car) => (
        <div
          key={car.name}
          onClick={() => setSelectedCar(car.name)}
          className={`bg-white text-gray-800 p-3 rounded-xl text-center cursor-pointer transition-all duration-300 
          hover:shadow-xl hover:scale-105 border
          ${
            selectedCar === car.name
              ? "border-blue-500 ring-2 ring-blue-400 shadow-lg"
              : "border-gray-200"
          }`}
        >
          <div className="bg-gray-100 rounded-lg p-2">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-32 object-contain"
            />
          </div>

          <p className="text-base font-semibold mt-2">
            {car.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CarSelection;