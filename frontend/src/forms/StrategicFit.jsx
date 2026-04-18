import React, { useState } from "react";
import { updateApplication } from "../api/api";

const StrategicFit = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    whyFSV: "",
    valueAdd: "",
    mentorship: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = async () => {
    const res = await updateApplication({ strategicFit: data });
    if (res) {
      markStepValid(true);
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Strategic Fit</h2>

      <textarea
        name="whyFSV"
        placeholder="Why FSV Capital?"
        className="input h-20"
        onChange={handleChange}
      />
      <textarea
        name="valueAdd"
        placeholder="How can FSV help?"
        className="input h-20"
        onChange={handleChange}
      />

      <select name="mentorship" className="input" onChange={handleChange}>
        <option value="">Mentorship?</option>
        <option>Yes</option>
        <option>No</option>
      </select>

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

export default StrategicFit;
