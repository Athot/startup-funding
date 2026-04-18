import React, { useState } from "react";
import { updateApplication } from "../api/api";

const Traction = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    monthlyRevenue: "",
    annualRevenue: "",
    growthRate: "",
    customers: "",
    partnerships: "",
    achievements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-calculate annual revenue when monthly is entered
    if (name === "monthlyRevenue") {
      setData((prev) => ({
        ...prev,
        monthlyRevenue: value,
        annualRevenue: value ? Number(value) * 12 : "",
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNext = async () => {
    const payload = {
      traction: {
        revenue: {
          monthly: Number(data.monthlyRevenue) || 0,
          annual: Number(data.annualRevenue) || 0,
        },
        growthRate: Number(data.growthRate) || 0,
        customers: Number(data.customers) || 0,
        partnerships: data.partnerships,
        achievements: data.achievements,
      },
    };

    try {
      const res = await updateApplication(payload);

      if (res) {
        markStepValid(true);
        next();
      }
    } catch (error) {
      console.error("Error updating traction:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Traction & Metrics</h2>

      {/* Monthly Revenue */}
      <input
        type="number"
        name="monthlyRevenue"
        placeholder="Monthly Revenue (₹)"
        value={data.monthlyRevenue}
        onChange={handleChange}
        className="input"
      />

      {/* Annual Revenue (auto-filled but editable if needed) */}
      <input
        type="number"
        name="annualRevenue"
        placeholder="Annual Revenue (₹)"
        value={data.annualRevenue}
        onChange={handleChange}
        className="input"
      />

      {/* Growth Rate */}
      <input
        type="number"
        name="growthRate"
        placeholder="Growth Rate (%)"
        value={data.growthRate}
        onChange={handleChange}
        className="input"
      />

      {/* Customers */}
      <input
        type="number"
        name="customers"
        placeholder="Customers / Users"
        value={data.customers}
        onChange={handleChange}
        className="input"
      />

      {/* Partnerships */}
      <textarea
        name="partnerships"
        placeholder="Key Partnerships"
        value={data.partnerships}
        onChange={handleChange}
        className="input h-20"
      />

      {/* Achievements */}
      <textarea
        name="achievements"
        placeholder="Achievements / Awards"
        value={data.achievements}
        onChange={handleChange}
        className="input h-20"
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn-secondary cursor-pointer">
          Back
        </button>
        <button onClick={handleNext} className="btn-primary cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default Traction;
