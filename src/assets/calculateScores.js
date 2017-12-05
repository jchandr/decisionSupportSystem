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

  return score;
}
