import * as categories from './categories';
export * as categories from './categories';

interface BMIOptions {
  imperialUnit?: boolean;
}

export function calculateBMI(
  height: number,
  mass: number,
  options: BMIOptions = {},
) {
  return (mass / Math.pow(height, 2)) * (options.imperialUnit ? 703 : 10000);
}

export function calculateMass(
  height: number,
  bmi: number,
  options: BMIOptions = {},
) {
  return (bmi * Math.pow(height, 2)) / (options.imperialUnit ? 703 : 10000);
}

function convertBMIStandard(standard: BMIStandard): BMIMeter[] {
  const converted = Object.keys(standard).map(key => ({
    level: key,
    bmi: standard[key],
  }));
  converted.sort((a, b) => a.bmi - b.bmi);
  return converted;
}

export function calculateBMIMeter(
  height: number,
  mass: number,
  standardName: string,
  options: BMIOptions,
): BMIMeter[] | undefined {
  const standard = categories[standardName as keyof typeof categories];
  if (!standard) {
    return undefined;
  }
  delete standard.underweight;
  delete standard.normal;
  const meter = convertBMIStandard({
    ...standard,
  }).map(e => ({
    ...e,
    mass: calculateMass(height, e.bmi, options),
  }));
  const bmi = calculateBMI(height, mass, options);
  const myMeter = [...meter, { bmi, mass, level: 'mass' }];
  myMeter.sort((a, b) => a.bmi - b.bmi);
  return myMeter;
}

export function bmiSegment(bmi: number, standardName = 'common') {
  const standard = categories[standardName as keyof typeof categories];
  if (!standard) {
    return undefined;
  }
  const converted = convertBMIStandard(standard);
  converted.reverse();
  return converted.find(e => e.bmi < bmi);
}
