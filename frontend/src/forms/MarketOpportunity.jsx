import React, { useState } from "react";
import { updateApplication } from "../api/api";

const MarketOpportunity = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    tam: "",
    sam: "",
    som: "",
    customerSegment: "",
    competitors: "",
    advantage: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = async () => {
    const res = await updateApplication({ marketOpportunity: data });
    if (res) {
      markStepValid(true);
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Market Opportunity</h2>

      <input
        name="tam"
        placeholder="TAM"
        onChange={handleChange}
        className="input"
      />
      <input
        name="sam"
        placeholder="SAM"
        onChange={handleChange}
        className="input"
      />
      <input
        name="som"
        placeholder="SOM"
        onChange={handleChange}
        className="input"
      />

      <textarea
        name="customerSegment"
        placeholder="Customer Segment"
        onChange={handleChange}
        className="input h-20"
      />
      <textarea
        name="competitors"
        placeholder="Key Competitors"
        onChange={handleChange}
        className="input h-20"
      />
      <textarea
        name="advantage"
        placeholder="Competitive Advantage"
        onChange={handleChange}
        className="input h-20"
      />

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

export default MarketOpportunity;
