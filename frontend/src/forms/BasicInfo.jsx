import React, { useState } from "react";
import { createApplication, updateApplication } from "../api/api";

const BasicInfo = ({ next, updateData, markStepValid }) => {
  const [data, setData] = useState({
    startupName: "",
    website: "",
    founders: "",
    email: "",
    phone: "",
    linkedinFounder: "",
    linkedinCompany: "",
    location: "",
    year: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const handleNext = () => {
  //   debugger;
  //   markStepValid(true);
  //   next();
  // };

  const handleNext = async () => {
    try {
      const payload = {
        basicInfo: {
          startupName: data.startupName,
          website: data.website,
          founders: data.founders.split(","),
          email: data.email,
          phone: data.phone,
          linkedin: {
            founder: data.linkedinFounder,
            company: data.linkedinCompany,
          },
          location: {
            city: data.location.split(",")[0],
            country: data.location.split(",")[1],
          },
          yearOfIncorporation: Number(data.year),
        },
      };

      const res = await createApplication(payload);
      markStepValid(true);
      next();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

      <input
        name="startupName"
        placeholder="Startup Name"
        onChange={handleChange}
        className="input"
      />
      <input
        name="website"
        placeholder="Website URL"
        onChange={handleChange}
        className="input"
      />
      <input
        name="founders"
        placeholder="Founder Names"
        onChange={handleChange}
        className="input"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input"
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="input"
      />
      <input
        name="linkedinFounder"
        placeholder="Founder LinkedIn"
        onChange={handleChange}
        className="input"
      />
      <input
        name="linkedinCompany"
        placeholder="Company LinkedIn"
        onChange={handleChange}
        className="input"
      />
      <input
        name="location"
        placeholder="City, Country"
        onChange={handleChange}
        className="input"
      />
      <input
        name="year"
        placeholder="Year of Incorporation"
        onChange={handleChange}
        className="input"
      />

      <button onClick={handleNext} className="btn-primary mt-4 cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default BasicInfo;
