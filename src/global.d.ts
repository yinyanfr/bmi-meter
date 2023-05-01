interface BMIStandard {
  underweight?: number;
  normal?: number;
  overweight?: number;
  obese1?: number;
  obese2?: number;
  obese3?: number;
  [key: string]: number;
}

interface BMIMeter {
  level: keyof BMIStandard;
  bmi: number;
  mass?: number;
}

interface BMIFormdata {
  height: number;
  mass: number;
  unit: string;
  standard: string;
}
