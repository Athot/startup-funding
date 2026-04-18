export const applyFilters = (data) => {
  console.log("APPLY Fiter");
  let flags = {
    lowTransaction: false,
    outOfSector: false,
  };

  const validSectors = ["AI", "Fintech", "Blockchain", "SaaS", "CleanTech"];

  if (!validSectors.includes(data.startupOverview?.sector)) {
    console.log(validSectors);
    flags.outOfSector = true;
  }

  if (data.traction?.revenue?.monthly <= 0) {
    flags.lowTransaction = true;
  }

  return flags;
};
