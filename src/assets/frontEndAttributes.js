export default {
  domain: {
    title: 'Domain',
    currentValue: undefined,
    inputType: 'radio',
    isEnabled: false,
    values: {
      solar: 'Solar',
      wind: 'Wind',
      hydro: 'Hydro',
    },
  },
  location: {
    title: 'Location',
    isEnabled: false,
    currentValue: undefined,
    inputType: 'radio',
    values: {
      usa: 'USA',
      multiple: 'Multiple Countries',
    },
  },
  // netWorth: {
  //   title: 'Net Worth',
  //   currentValue: undefined,
  //   isEnabled: false,
  // },
  productOrService: {
    title: 'Product / Service',
    isEnabled: false,
    currentValue: undefined,
    inputType: 'radio',
    values: {
      product: 'Product',
      service: 'Service',
    },
  },
  // salesInThisYear: {
  //   title: 'Sales this Year',
  //   isEnabled: false,
  //   min: undefined,
  //   max: undefined,
  // },
  // totalSales: {
  //   title: 'Total Sales',
  //   isEnabled: false,
  //   min: undefined,
  //   max: undefined,
  // },
  // yearFounded: {
  //   title: 'Year Founded',
  //   isEnabled: false,
  //   min: undefined,
  //   max: undefined,
  // },
  crossDomainInvestments: {
    title: 'Cross Domain Investments',
    inputType: 'radio',
    currentValue: undefined,
    isEnabled: false,
    values: {
      true: 'Yes',
      false: 'No',
    },
  },
  consulting: {
    title: 'Consulting',
    inputType: 'radio',
    currentValue: undefined,
    isEnabled: false,
    values: {
      true: 'Yes',
      false: 'No',
    },
  },
};
