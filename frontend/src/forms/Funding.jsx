import React, { useState } from "react";
import { updateApplication } from "../api/api";

const Funding = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    amount: "",
    currency: "",
    stage: "",
    equity: "",
    useOfFunds: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = async () => {
    const res = await updateApplication({ fundingRequirement: data });
    if (res) {
      markStepValid(true);
      next();
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Funding Requirement</h2>

      <input
        name="amount"
        type="number"
        placeholder="Amount Raising"
        className="input"
        onChange={handleChange}
      />

      <select
        name="currency"
        onChange={handleChange}
        className="border w-full mb-3 rounded cursor-pointer"
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>

      <input
        name="stage"
        placeholder="Funding Stage"
        className="input"
        onChange={handleChange}
      />
      <input
        name="equity"
        type="number"
        placeholder="Equity Offered (%)"
        className="input"
        onChange={handleChange}
      />

      <span className="absolute right-2 top-2 text-gray-500">%</span>

      <textarea
        name="useOfFunds"
        placeholder="Use of Funds"
        className="input h-20"
        onChange={handleChange}
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

export default Funding;
