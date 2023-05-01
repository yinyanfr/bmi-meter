import {
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormSelect,
} from '@ant-design/pro-components';
import { useId, type FC } from 'react';
import { useIntl, useModel } from 'umi';

const BMIForm: FC = () => {
  const id = useId();
  const intl = useIntl();
  const [formdata, setFormdata] = useModel('data');

  return (
    <ProForm<BMIFormdata>
      initialValues={formdata}
      onFinish={async values => {
        if (values) {
          (setFormdata as any)(values);
        }
      }}
    >
      <ProForm.Group>
        <ProFormDependency name={['unit']}>
          {({ unit }) =>
            ['height', 'mass'].map(e => (
              <ProFormDigit
                key={`${id}-input-${e}`}
                name={e}
                label={`${intl.formatMessage({
                  id: `input.${e}`,
                })} (${intl.formatMessage({ id: `input.${e}.${unit}` })})`}
              />
            ))
          }
        </ProFormDependency>
      </ProForm.Group>

      <ProForm.Group>
        <ProFormSelect
          name="unit"
          label={intl.formatMessage({ id: 'input.unit' })}
          // initialValue="metric"
          options={['metric', 'imperial'].map(e => ({
            value: e,
            label: intl.formatMessage({ id: `input.unit.${e}` }),
          }))}
        />
        <ProFormSelect
          name="standard"
          label={intl.formatMessage({ id: 'input.standard' })}
          // initialValue="common"
          options={['common', 'hongkong', 'singapore'].map(e => ({
            value: e,
            label: intl.formatMessage({ id: `input.standard.${e}` }),
          }))}
        />
      </ProForm.Group>
    </ProForm>
  );
};

export default BMIForm;
