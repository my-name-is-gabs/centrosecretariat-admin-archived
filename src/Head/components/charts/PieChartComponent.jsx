import { ResponsivePie } from '@nivo/pie';
import connectAPI from '../../../connection/connectAPI';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';

const PieChartComponent = () => {
  const [newApplicantData, setNewApplicant] = useState(null);
  const [renewalApplicantData, setRenewalApplicant] = useState(null);

  useEffect(() => {
    (function () {
      connectAPI
        .get('/head/data/applicant-status/')
        .then(res => {
          setNewApplicant(() => res.data.new_applicants_count);
          setRenewalApplicant(() => res.data.renewing_applicants_count);
        })
        .catch(err => console.error(err));
    })();
  }, []);

  const data = useMemo(
    () => [
      {
        id: 'New Applicants',
        label: 'New Applicants',
        value: newApplicantData,
      },
      {
        id: 'Renewal Applicants',
        lable: 'Renewal Applicants',
        value: renewalApplicantData,
      },
    ],
    [newApplicantData, renewalApplicantData]
  );

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'category10' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 3]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.2)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.2)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 75,
          itemsSpacing: 15,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#333',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChartComponent;
