import React, { useState } from "react";
import { updateApplication } from "../api/api";

const StartupOverview = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    problem: "",
    solution: "",
    industry: "",
    sector: "",
    businessModel: "",
    stage: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const handleNext = async () => {
  //   const res = await updateApplication({ startupOverview: data });
  //   if (res) {
  //     next();
  //   }
  // }; z

  // const handleNext = () => {
  //   markStepValid(true);
  //   next();
  // };
  const handleNext = async () => {
    // basic validation
    if (!data.problem || !data.solution || !data.stage) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      startupOverview: {
        problem: data.problem,
        solution: data.solution,
        industry: data.industry,
        businessModel: data.businessModel,
        stage: data.stage,
      },
    };
    const res = await updateApplication({ startupOverview: data });
    if (res) {
    }
    markStepValid(true);
    next();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Startup Overview</h2>
      {/* sector */}
      <input
        name="sector"
        placeholder="Sector name"
        onChange={handleChange}
        className="input"
      />

      {/* Problem */}
      <label className="label">Problem Statement *</label>
      <textarea
        name="problem"
        placeholder="What problem are you solving?"
        value={data.problem}
        onChange={handleChange}
        className="input h-24"
      />

      {/* Solution */}
      <label className="label">Solution Overview *</label>
      <textarea
        name="solution"
        placeholder="Describe your product/service"
        value={data.solution}
        onChange={handleChange}
        className="input h-24"
      />

      {/* Industry */}
      <label className="label">Industry / Sector</label>
      <select
        name="industry"
        value={data.industry}
        onChange={handleChange}
        className="input"
      >
        <option value="">Select Industry</option>
        <option>Fintech</option>
        <option>AI</option>
        <option>Blockchain</option>
        <option>SaaS</option>
        <option>HealthTech</option>
        <option>EdTech</option>
        <option>Other</option>
      </select>

      {/* Business Model */}
      <label className="label">Business Model</label>
      <select
        name="businessModel"
        value={data.businessModel}
        onChange={handleChange}
        className="input"
      >
        <option value="">Select Model</option>
        <option>B2B</option>
        <option>B2C</option>
        <option>B2B2C</option>
        <option>Marketplace</option>
        <option>Subscription</option>
      </select>

      {/* Stage (IMPORTANT FIELD) */}
      <label className="label">Current Stage *</label>
      <select
        name="stage"
        value={data.stage}
        onChange={handleChange}
        className="input"
      >
        <option value="">Select Stage</option>
        <option>Idea</option>
        <option>MVP</option>
        <option>Early Revenue</option>
        <option>Growth Stage</option>
        <option>Scaling</option>
      </select>

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

export default StartupOverview;
