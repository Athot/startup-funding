import React, { useState } from "react";
import { updateApplication } from "../api/api";

const Team = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    founderBackground: "",
    coreTeam: "",
    advisors: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleNext = async () => {
    const payload = {
      team: {
        founderBackground: data.founderBackground,
        coreTeam: data.coreTeam.split(",").map((i) => i.trim()),
        advisors: data.advisors.split(",").map((i) => i.trim()),
      },
    };

    const res = await updateApplication(payload);

    updateData(payload);

    if (res) {
      markStepValid(true);
      next();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Team</h2>

      <textarea
        name="founderBackground"
        placeholder="Founder Background"
        className="input h-20"
        onChange={handleChange}
      />
      <textarea
        name="coreTeam"
        placeholder="Core Team Members"
        className="input h-20"
        onChange={handleChange}
      />
      <textarea
        name="advisors"
        placeholder="Advisors / Mentors"
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

export default Team;
