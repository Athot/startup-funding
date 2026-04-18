import React, { useState } from "react";
import { updateApplicationDocs } from "../api/api";

const Documents = ({ next, back, markStepValid }) => {
  const [pitchDeck, setPitchDeck] = useState(null);
  const [extraDocs, setExtraDocs] = useState(null);

  const handleNext = async () => {
    try {
      if (!pitchDeck) {
        alert("Pitch Deck is required");
        return;
      }

      const applicationID = localStorage.getItem("applicationID");

      const formData = new FormData();
      formData.append("pitchDeck", pitchDeck);

      if (extraDocs) {
        for (let i = 0; i < extraDocs.length; i++) {
          formData.append("extraDocs", extraDocs[i]);
        }
      }

      //   Correct API call
      await updateApplicationDocs(applicationID, formData, true);
      markStepValid(true);
      next();
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Documents</h2>

      <label className="label">Pitch Deck (PDF)*</label>
      <div className="py-2">
        <input
          type="file"
          accept="application/pdf"
          className="w-full border rounded px-2 cursor-pointer"
          onChange={(e) => setPitchDeck(e.target.files[0])}
        />
      </div>

      <label className="label mt-4">Additional Documents</label>
      <input
        type="file"
        multiple
        className="w-full border rounded px-2 cursor-pointer"
        onChange={(e) => setExtraDocs(e.target.files)}
      />

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn-secondary">
          Back
        </button>

        <button onClick={handleNext} className="btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Documents;
