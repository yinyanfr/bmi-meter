import { useLocalStorageState } from 'ahooks';

export default () => {
  const [formData, setformData] = useLocalStorageState('bmi-form-data', {
    defaultValue: {
      height: 180,
      mass: 100,
      unit: 'metric',
      standard: 'common',
    },
  });

  return [formData, setformData];
};
