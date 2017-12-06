// -----scoring parameters-----
// companySize
// primaryMarket
// primaryService
// experience
// percentage of total produced in 2016
// growth percentage
// technology
// number of projects
// number of employees
// ----------------------------

export default function (company, scores) {
  let score = 0;
  switch (company.companySize) {
    case ('small'):
      score += scores.companySize.small;
      break;
    case ('medium'):
      score += scores.companySize.medium;
      break;
    case ('large'):
      score += scores.companySize.large;
      break;
    default:
      break;
  }
  switch (company.primaryMarket) {
    case ('utility'):
      score += scores.primaryMarket.utility;
      break;
    case ('commercial'):
      score += scores.primaryMarket.commercial;
      break;
    case ('residential'):
      score += scores.primaryMarket.residential;
      break;
    default:
      break;
  }
  // string: epc, rooftop contractor, construction firm, developer, electrical subcontractor
  switch (company.primaryService) {
    case ('epc'):
      score += scores.primaryService.epc;
      break;
    case ('rooftop contractor'):
      score += scores.primaryService.rooftopContractor;
      break;
    case ('construction firm'):
      score += scores.primaryService.constructionFirm;
      break;
    case ('electrical subcontractor'):
      score += scores.primaryService.electricalSubcontractor;
      break;
    default:
      break;
  }
  switch (company.technology) {
    case ('pv'):
      score += scores.technology.pv;
      break;
    case ('pv/thermal'):
      score += scores.technology.pvOrThermal;
      break;
    default:
      break;
  }
  switch (true) {
    case (company.experience > 0 && company.experience > 5) :
      score += scores.experience.y0to5;
      break;
    case (company.experience > 6 && company.experience > 10) :
      score += scores.experience.y6to10;
      break;
    case (company.experience > 11 && company.experience > 15) :
      score += scores.experience.y11to15;
      break;
    case (company.experience > 15) :
      score += scores.experience.y15plus;
      break;
    default:
      break;
  }
  switch (true) {
    case (company.percentageOfTotalInstalledIn2016 < 50):
      score += scores.percentageOfTotalInstalledIn2016.lessThan50;
      break;
    case (company.percentageOfTotalInstalledIn2016 > 50):
      score += scores.percentageOfTotalInstalledIn2016.greaterThan50;
      break;
    default:
      break;
  }
  switch (true) {
    case (company.growthPercentage < 0):
      score += scores.growthPercentage.negative;
      break;
    case (company.growthPercentage > 0 && company.growthPercentage < 50):
      score += scores.growthPercentage.lessThan50;
      break;
    case (company.growthPercentage > 50):
      score += scores.growthPercentage.greaterThan50;
      break;
    default:
      break;
  }
  switch (true) {
    case (company.numberOfProjects < 25):
      score += scores.numberOfProjects.range0to25;
      break;
    case (company.numberOfProjects > 25 && company.numberOfProjects < 100):
      score += scores.numberOfProjects.range25to100;
      break;
    case (company.numberOfProjects > 100):
      score += scores.numberOfProjects.range100plus;
      break;
    default:
      break;
  }
  switch (true) {
    case (company.numberOfEmployees < 15):
      score += scores.numberOfEmployees.range0to15;
      break;
    case (company.numberOfProjects > 15 && company.numberOfProjects < 100):
      score += scores.numberOfEmployees.range15to100;
      break;
    case (company.numberOfProjects > 100):
      score += scores.numberOfEmployees.range100plus;
      break;
    default:
      break;
  }
  return score;
}
