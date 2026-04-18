exports.calculateScore = (data) => {
  let score = 0;

  // market
  if (data.marketOpportunity.tam) {
    score += 20;
  }

  // traction
  if (data?.traction?.revenue?.monthly > 0) {
    score += 25;
  }

  // team
  if (data?.team?.coreTeam?.length > 1) {
    score += 20;
  }

  // innovation
  if (data?.productTech?.usp) {
    score += 20;
  }

  // financial
  if (data?.financials?.runwayMonths > 6) {
    score += 15;
  }
  return score;
};
