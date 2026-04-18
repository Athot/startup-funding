const express = require("express");
const router = express.Router();
const {
  createApplication,
  submitApplication,
  updateApplication,
  getAllApplication,
  getApplication,
} = require("../controller/applicationController");
const upload = require("../middleware/upload");
// router.post("/create", createAppication);
router.post("/create", createApplication);
router.put(
  "/update/:applicationID",

  upload.fields([
    { name: "pitchDeck", maxCount: 1 },
    { name: "extraDocs", maxCount: 5 },
  ]),
  updateApplication,
);
router.post("/submit/:applicationID", submitApplication);
router.get("/get-all/:applicationID", getAllApplication);
// getApplication
router.get("/get-single/:applicationID", getApplication);

// update in draft
// PUT /api/applications/:applicationId
module.exports = router;
