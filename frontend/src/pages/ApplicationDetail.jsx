import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleApplication } from "../api/api";

const ApplicationDetail = () => {
  const { applicationID } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(applicationID);
    const res = await getSingleApplication(applicationID);
    console.log(res);
    setApp(res);
  };

  if (!app) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{app.basicInfo?.startupName}</h1>
        <p className="text-gray-500">
          {app.basicInfo?.location?.city}, {app.basicInfo?.location?.country}
        </p>
      </div>

      {/* System Info */}
      <div className="p-4 bg-gray-100 rounded">
        <p>
          <strong>Score:</strong> {app.system?.dealScore}/100
        </p>
        <p>
          <strong>Status:</strong> {app.system?.status}
        </p>
      </div>

      {/* Overview */}
      <div>
        <h2 className="font-semibold text-lg">Startup Overview</h2>
        <p>
          <strong>Problem:</strong> {app.startupOverview?.problem}
        </p>
        <p>
          <strong>Solution:</strong> {app.startupOverview?.solution}
        </p>
        <p>
          <strong>Stage:</strong> {app.startupOverview?.stage}
        </p>
      </div>

      {/* Product */}
      <div>
        <h2 className="font-semibold text-lg">Product & Tech</h2>
        <p>
          <strong>USP:</strong> {app.productTech?.usp}
        </p>
        <p>
          <strong>Tech:</strong> {app.productTech?.techStack?.join(", ")}
        </p>
      </div>

      {/* Traction */}
      <div>
        <h2 className="font-semibold text-lg">Traction</h2>
        <p>
          {/* <strong>Revenue:</strong> {app.traction?.revenue} */}
          <p>
            <strong>Revenue (Monthly):</strong> ₹
            {app.traction?.revenue?.monthly}
          </p>
          <p>
            <strong>Revenue (Annual):</strong> ₹{app.traction?.revenue?.annual}
          </p>
        </p>
        <p>
          <strong>Customers:</strong> {app.traction?.customers}
        </p>
      </div>

      {/* Documents */}
      <div>
        <h2 className="font-semibold text-lg">Documents</h2>
        <a
          href={`http://localhost:5000${app.documents?.pitchDeckUrl}`}
          target="_blank"
          className="text-blue-600 underline"
        >
          View Pitch Deck
        </a>

        <ul>
          {app.documents?.extraDocs?.map((doc, i) => (
            <li key={i}>
              <a
                href={`http://localhost:5000${doc}`}
                target="_blank"
                className="text-blue-600 underline"
              >
                Document {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicationDetail;
