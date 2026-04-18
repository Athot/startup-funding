import React, { useState } from "react";
import { updateApplication } from "../api/api";

const Financial = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    fundingRaised: "",
    investors: "",
    burnRate: "",
    runway: "",
    projections: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = async () => {
    const res = await updateApplication({ financials: data });
    if (res) {
      markStepValid(true);
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Financials</h2>

      <input
        type="number"
        name="fundingRaised"
        placeholder="Funding Raised"
        className="input"
        onChange={handleChange}
      />
      <input
        name="investors"
        placeholder="Investors"
        className="input"
        onChange={handleChange}
      />
      <input
        type="number"
        name="burnRate"
        placeholder="Burn Rate"
        className="input"
        onChange={handleChange}
      />
      <input
        name="runway"
        type="number"
        placeholder="Runway (months)"
        className="input"
        onChange={handleChange}
      />

      {/* <textarea
        name="projections"
        placeholder="3-year projections"
        className="input h-20"
        onChange={handleChange}
      /> */}
      <div className="mb-2">
        <h1>Revenue Projections(next 3 years)</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <input
          type="number"
          name="year1"
          placeholder="Year 1"
          className="input"
          onChange={(e) =>
            setData({
              ...data,
              projections: {
                ...data.projections,
                year1: e.target.value,
              },
            })
          }
        />
        <input
          type="number"
          name="year2"
          placeholder="Year 2"
          className="input"
          onChange={(e) =>
            setData({
              ...data,
              projections: {
                ...data.projections,
                year2: e.target.value,
              },
            })
          }
        />
        <input
          type="number"
          name="year3"
          placeholder="Year 3"
          className="input"
          onChange={(e) =>
            setData({
              ...data,
              projections: {
                ...data.projections,
                year3: e.target.value,
              },
            })
          }
        />
      </div>
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

export default Financial;
