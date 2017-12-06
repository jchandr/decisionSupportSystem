export default {
  primaryMarket: {
    utility: 5,
    commercial: 4,
    residential: 1,
  },
  primaryService: {
    epc: 0,
    developer: 0,
    rooftopContractor: 0,
    constructionFirm: 0,
    electricalSubcontractor: 0,
  },
  growthPercentage: {
    negative: 6,
    lessThan50: 3,
    greaterThan50: 1,
  },
  companySize: {
    small: 4,
    medium: 5,
    large: 1,
  },
  experience: {
    y0to5: 0,
    y6to10: 0,
    y11to15: 0,
    y15plus: 0,
  },
  technology: {
    pvOrThermal: 4,
    pv: 5,
  },
  percentageOfTotalInstalledIn2016: {
    lessThan50: 5,
    greaterThan50: 3,
  },
  numberOfProjects: {
    range0to25: 3,
    range25to100: 5,
    range100plus: 1,
  },
  numberOfEmployees: {
    range0to15: 1,
    range15to100: 3,
    range100plus: 5,
  },
};
