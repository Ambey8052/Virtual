"use client";

import { useState } from "react";

export default function TourPlannerPage() {
  const [mode, setMode] = useState("walking");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br text-white">
      
      {/* Left: Dynamic Map Section */}
      <div className="flex-1 relative">
        <div className="w-full h-[50vh] md:h-full bg-white/10 backdrop-blur-lg border-r border-white/20 flex items-center justify-center">
          {/* Placeholder for map */}
          <p className="text-lg text-white/80 font-semibold">
          <img src="https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=" alt="Traveler" className="rounded-2xl shadow-2xl w-full object-cover" />
            🗺️ Map will appear here (Integrate Google Maps or Leaflet)
          </p>
        </div>
      </div>

      {/* Right: Input Section */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
          
          <h1 className="text-3xl font-extrabold mb-6 text-center">
            Plan Your <span className="text-pink-300">Journey</span>
          </h1>

          <form className="flex flex-col gap-5">
            {/* Current Location */}
            <div>
              <label className="block text-sm text-white/80 mb-1">
                Current Location
              </label>
              <input
                type="text"
                placeholder="Enter your current location"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="block text-sm text-white/80 mb-1">
                Final Destination
              </label>
              <input
                type="text"
                placeholder="Enter your final destination"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Tourist Place */}
            <div>
              <label className="block text-sm text-white/80 mb-1">
                Tourist Place to Visit
              </label>
              <input
                type="text"
                placeholder="e.g., Taj Mahal, Lotus Temple..."
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Mode of Visit */}
            <div>
              <label className="block text-sm text-white/80 mb-1">
                Mode of Visit
              </label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="walking" className="text-black">Walking</option>
                <option value="car" className="text-black">Car</option>
                <option value="bike" className="text-black">Bike</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-3 w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Start My Journey
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 