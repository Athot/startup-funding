const Application = require("../model/application");
const { v4: uuidv4 } = require("uuid");
const { calculateScore } = require("../utils/scoring");
const { applyFilters } = require("../utils/filter");

exports.createApplication = async (req, res) => {
  try {
    let applicationID;
    let exists = true;

    while (exists) {
      applicationID = "FSV" + uuidv4();
      exists = await Application.findOne({ applicationID });
    }

    const { applicationID: _, ...safeData } = req.body;

    const newApp = new Application({
      applicationID,
      ...safeData,
    });

    await newApp.save();

    res.status(201).json({
      applicationID,
      message: "Draft saved successfully",
    });
  } catch (error) {
    console.error("Create Application Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// submit application
exports.submitApplication = async (req, res) => {
  try {
    const { applicationID } = req.params;
    const app = await Application.findOne({ applicationID });
    // console.log("Score Debug Data:", {
    //   tam: app.marketOpportunity?.tam,
    //   revenue: app.traction?.revenue?.monthly,
    //   team: app.team?.coreTeam?.length,
    //   usp: app.productTech?.usp,
    //   runway: app.financials?.runwayMonths,
    // });
    // console.log("Final Score:", score);
    if (!app) {
      return res.status(404).json({ message: "Application ID not found" });
    }

    // now we will apply the scoring
    const score = calculateScore(app);
    app.system.dealScore = score;

    // we will applyfilter here
    const flag = applyFilters(app);
    app.system.flags = flag;
    console.log(flag);
    // status logic
    if (flag.outOfSector) {
      app.system.status = "Review Manually";
    } else {
      app.system.status = score > 60 ? "Shortlisted" : "Rejected";
    }
    await app.save();

    res.json({
      message: "Application Submitted",
      score,
      status: app.system.status,
    });
    // app.
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// get single application
exports.getApplication = async (req, res) => {
  try {
    const { applicationID } = req.params;
    const app = await Application.findOne({ applicationID });
    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json(app);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// get all the application
exports.getAllApplication = async (req, res) => {
  try {
    const app = await Application.find().sort({ createdAt: -1 });
    res.json(app);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// update the application
exports.updateApplication = async (req, res) => {
  try {
    console.log("Hit the update API");
    const { applicationID } = req.params;
    if (req.files) {
      const pitchDeck = req.files["pitchDeck"]?.[0];
      const extraDocs = req.files["extraDocs"] || [];

      req.body.documents = {
        pitchDeckUrl: pitchDeck ? `/uploads/${pitchDeck.filename}` : undefined,
        extraDocs: extraDocs.map((file) => `/uploads/${file.filename}`),
      };
    }
    const updatedApp = await Application.findOneAndUpdate(
      {
        applicationID: applicationID,
      },

      { $set: req.body },
      { new: true },
    );

    if (!updatedApp) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.json({ message: "Application updated successfully", data: updatedApp });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};

// filter the api
