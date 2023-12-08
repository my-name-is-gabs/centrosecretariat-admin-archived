import { ResponsivePie } from '@nivo/pie';
import { useEffect, useState } from 'react';
import connectAPI from '../../../connection/connectAPI';
import { useMemo } from 'react';

const DoughnutComponent = () => {
  const [accepted, setAccpeted] = useState(null);
  const [pending, setPending] = useState(null);
  const [rejected, setRejected] = useState(null);

  useEffect(() => {
    (function () {
      connectAPI
        .get('/head/data/application-status/')
        .then(res => {
          setAccpeted(() => res.data.accepted_count);
          setPending(() => res.data.pending_count);
          setRejected(() => res.data.rejected_count);
        })
        .catch(err => console.error(err));
    })();
  }, []);

  const data = useMemo(
    () => [
      {
        id: 'Accepted',
        label: 'Accepted',
        value: accepted,
      },
      {
        id: 'Pending',
        lable: 'Pending',
        value: pending,
      },
      {
        id: 'Rejected',
        lable: 'Rejected',
        value: rejected,
      },
    ],
    [accepted, pending, rejected]
  );

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      padAngle={0.7}
      innerRadius={0.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'accent' }}
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
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
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
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
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

export default DoughnutComponent;
