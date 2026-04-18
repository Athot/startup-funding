import React, { useState } from "react";
import { submitApplication } from "../api/api";
import { useNavigate } from "react-router";

const Compliance = ({ back, data, markStepValid }) => {
  const [form, setForm] = useState({
    registered: "",
    legalIssues: "",
    consent: false,
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!form.consent) {
      alert("Consent required");
      return;
    }

    try {
      const res = await submitApplication({ compliance: form });

      markStepValid(true);
      if (res) {
        alert("Successfully submitted");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Compliance</h2>

      <select
        onChange={(e) => setForm({ ...form, registered: e.target.value })}
        className="input"
      >
        <option>Company Registered?</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <textarea
        placeholder="Any legal issues?"
        className="input h-20"
        onChange={(e) => setForm({ ...form, legalIssues: e.target.value })}
      />

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
        />
        I agree to share data
      </label>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn-secondary cursor-pointer">
          Back
        </button>
        <button onClick={handleSubmit} className="btn-primary cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Compliance;
