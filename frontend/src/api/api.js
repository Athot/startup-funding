import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_AUTH = `${BASE_URL}/api/application`;

// CREATE APPLICATION (Step 1)

export const createApplication = async (data) => {
  debugger;
  try {
    const res = await axios.post(`${API_AUTH}/create`, data);

    // store applicationID for future steps
    const applicationID = res.data.applicationID;
    localStorage.setItem("applicationID", applicationID);

    return res.data;
  } catch (error) {
    console.error("Create Application Error:", error);
    throw error;
  }
};

// update the application
export const updateApplication = async (data) => {
  const applicationID = localStorage.getItem("applicationID");
  try {
    debugger;
    const res = await axios.put(`${API_AUTH}/update/${applicationID}`, data);

    return res.data;
  } catch (error) {
    console.error("Create Application Error:", error);
    throw error;
  }
};

export const updateApplicationDocs = async (
  applicationID,
  data,
  isFile = false,
) => {
  debugger;
  const headers = isFile ? { "Content-Type": "multipart/form-data" } : {};

  const res = await axios.put(`${API_AUTH}/update/${applicationID}`, data, {
    headers,
  });

  return res.data;
};

export const submitApplication = async (data) => {
  const applicationID = localStorage.getItem("applicationID");
  try {
    debugger;
    const res = await axios.post(`${API_AUTH}/submit/${applicationID}`, data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Create Application Error:", error);
    throw error;
  }
};

export const getAllApplication = async () => {
  const applicationID = localStorage.getItem("applicationID");
  try {
    const res = await axios.get(`${API_AUTH}/get-all/${applicationID}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Create Application Error:", error);
    throw error;
  }
};
//
export const getSingleApplication = async (applicationID) => {
  try {
    const res = await axios.get(`${API_AUTH}/get-single/${applicationID}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Create Application Error:", error);
    throw error;
  }
};
