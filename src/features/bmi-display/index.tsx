import { bmiSegment, calculateBMI, calculateBMIMeter } from '@/lib';
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card, Col, Divider, Row, Space, Statistic, Tag, Timeline } from 'antd';
import { type FC } from 'react';
import { useIntl, useModel } from 'umi';

const BMIDisplay: FC = () => {
  const intl = useIntl();
  const [data] = useModel('data');

  if ((data as BMIFormdata)?.height && (data as BMIFormdata)?.mass) {
    const bmi = calculateBMI(
      (data as BMIFormdata).height,
      (data as BMIFormdata).mass,
      {
        imperialUnit: (data as BMIFormdata).unit === 'imperial',
      },
    );
    const segment = bmiSegment(bmi, (data as BMIFormdata).standard);
    const meter = calculateBMIMeter(
      (data as BMIFormdata).height,
      (data as BMIFormdata).mass,
      (data as BMIFormdata).standard,
      {
        imperialUnit: (data as BMIFormdata).unit === 'imperial',
      },
    );
    console.log(meter);

    return (
      <>
        <Card>
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Statistic
                title={intl.formatMessage({ id: 'input.mass' })}
                value={(data as BMIFormdata).mass}
                suffix={intl.formatMessage({
                  id: `input.mass.${(data as BMIFormdata).unit}`,
                })}
              />
            </Col>
            <Col xs={24} md={12}>
              <Statistic
                title={intl.formatMessage({ id: 'display.bmi' })}
                value={bmi.toFixed(2)}
                suffix={
                  segment?.level
                    ? intl.formatMessage({ id: `bmi.${segment.level}` })
                    : undefined
                }
              />
            </Col>
          </Row>

          <Divider />

          <Timeline
            reverse
            mode="left"
            items={meter?.map(e => ({
              label: (
                <Space>
                  <span>
                    {intl.formatMessage({
                      id: `bmi.${e.level}`,
                    })}
                  </span>
                  <Tag>{e.bmi.toFixed(2)}</Tag>
                </Space>
              ),
              children: `${e.level === 'mass' ? ' ' : '>'} ${
                e.mass
              } ${intl.formatMessage({
                id: `input.mass.${(data as BMIFormdata).unit}`,
              })}`,
              color: e.bmi >= bmi ? 'green' : 'gray',
              dot: e.bmi < bmi ? <ClockCircleOutlined /> : <CheckOutlined />,
            }))}
          />
        </Card>
      </>
    );
  }

  return null;
};

export default BMIDisplay;
