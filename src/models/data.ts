import { useLocalStorageState } from 'ahooks';

export default () => {
  const [formData, setformData] = useLocalStorageState('bmi-form-data', {
    defaultValue: {
      height: 0,
      mass: 0,
      unit: 'metric',
      standard: 'common',
    },
  });

  return [formData, setformData];
};
