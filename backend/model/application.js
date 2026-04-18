const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applicationID: { type: String, required: true, unique: true },

    basicInfo: {
      startupName: String,
      website: String,
      founders: [String],
      email: String,
      phone: String,
      linkedin: {
        founder: String,
        company: String,
      },
      location: {
        city: String,
        country: String,
      },
      yearOfIncorporation: Number,
    },

    startupOverview: {
      problem: String,
      solution: String,
      sector: String,
      businessModel: String,
      stage: String,
    },

    productTech: {
      description: String,
      techStack: [String],
      usp: String,
      ipPatents: String,
      demoLink: String,
    },

    marketOpportunity: {
      tam: String,
      sam: String,
      som: String,
      customerSegment: String,
      competitors: [String],
      advantage: String,
    },

    traction: {
      revenue: {
        monthly: Number,
        annual: Number,
      },
      growthRate: Number,
      customers: Number,
      partnerships: String,
      achievements: String,
    },

    financials: {
      fundingRaised: Number,
      investors: [String],
      burnRate: Number,
      runwayMonths: Number,
      projections: {
        year1: Number,
        year2: Number,
        year3: Number,
      },
    },

    fundingRequirement: {
      amount: Number,
      currency: String,
      stage: String,
      equity: Number,
      useOfFunds: String,
    },

    team: {
      founderBackground: String,
      coreTeam: [String],
      advisors: [String],
    },

    strategicFit: {
      whyFSV: String,
      valueAdd: String,
      mentorshipOpen: Boolean,
    },

    documents: {
      pitchDeckUrl: String,
      financialModelUrl: String,
      demoAssets: String,
      extraDocs: [String],
    },

    compliance: {
      registered: Boolean,
      legalIssues: Boolean,
      legalDetails: String,
      consent: Boolean,
    },

    system: {
      status: { type: String, default: "Pending" },
      dealScore: { type: Number, default: 0 },
      flags: {
        lowTraction: Boolean,
        outOfSector: Boolean,
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
