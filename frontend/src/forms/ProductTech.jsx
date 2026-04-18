import React, { useState } from "react";
import { updateApplication } from "../api/api";

const ProductTech = ({ next, back, updateData, markStepValid }) => {
  const [data, setData] = useState({
    productDescription: "",
    techStack: "",
    usp: "",
    ip: "",
    demoLink: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    markStepValid(true);
    const res = await updateApplication({ productTech: data });
    if (res) {
      markStepValid(true);
      next();
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product & Technology</h2>

      {/* Core Product Description */}
      <label className="label">Core Product Description *</label>
      <textarea
        name="productDescription"
        placeholder="Explain your product clearly (features, functionality, users)"
        value={data.productDescription}
        onChange={handleChange}
        className="input h-28"
      />
      <p className="text-sm text-gray-400 mb-3">What exactly have you built?</p>

      {/* Tech Stack */}
      <label className="label">Technology Stack</label>
      <input
        name="techStack"
        placeholder="AI, React, Node.js, Blockchain, AWS, APIs..."
        value={data.techStack}
        onChange={handleChange}
        className="input"
      />

      {/* USP */}
      <label className="label">Unique Value Proposition (USP) *</label>
      <textarea
        name="usp"
        placeholder="Why are you 10x better than competitors?"
        value={data.usp}
        onChange={handleChange}
        className="input h-24"
      />

      {/* IP / Patents */}
      <label className="label">IP / Patents</label>
      <textarea
        name="ip"
        placeholder="Any patents, proprietary tech, or research?"
        value={data.ip}
        onChange={handleChange}
        className="input h-20"
      />

      {/* Demo Link */}
      <label className="label">Demo Link / Product Video</label>
      <input
        name="demoLink"
        placeholder="https://your-demo-link.com"
        value={data.demoLink}
        onChange={handleChange}
        className="input"
      />
      <p className="text-sm text-gray-400 mb-3">
        Strongly recommended — increases chances of selection
      </p>

      {/* Navigation */}
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

export default ProductTech;
