export default function (company) {
  let score = 0;
  switch (company.companySize) {
    case ('tiny'):
      score += 1;
      break;
    case ('small'):
      score += 2.5;
      break;
    case ('very-small'):
      score += 1;
      break;
    case ('medium'):
      score += 4;
      break;
    case ('semi-large'):
      score += 1;
      break;
    case ('large'):
      score += 0.5;
      break;
    default:
      break;
  }
  switch (company.primaryMarket) {
    case ('utility'):
      score += 5;
      break;
    case ('commercial'):
      score += 5;
      break;
    case ('residential'):
      score += 5;
      break;
    default:
      break;
  }
  if (company.funding) {
    score += 1;
  }
  return score;
}
