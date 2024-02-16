//Written by: Taha Ahmed
// Roll No. : 00298983


// Set describe_city Fucntion
function describe_city(cityName: string, country: string = 'DefaultCountry') {
  console.log(`${cityName} is in ${country}.`);
}

// Result
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');
