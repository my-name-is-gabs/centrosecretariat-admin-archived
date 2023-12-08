import { ResponsiveLine } from '@nivo/line';
import { useEffect } from 'react';
import connectAPI from '../../../connection/connectAPI';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ResponsiveLineChart = ({ filterSem }) => {
  const [yearlyData, setYearlyData] = useState([]);

  useEffect(() => {
    (function () {
      connectAPI
        .get('/head/data/yearly-scholarship-performance/')
        .then(res => {
          console.log(res.data);
          setYearlyData(() =>
            res.data.filter(item => item.semester === filterSem)
          );
        })
        .catch(err => console.error(err));
    })();
  }, [filterSem]);
  return (
    <ResponsiveLine
      data={[
        {
          id: 'BASIC PLUS SUC',
          color: 'hsl(312, 70%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_basic_plus,
          })),
        },
        {
          id: 'SUC/LCU',
          color: 'hsl(241, 70%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_suc_lcu,
          })),
        },
        {
          id: 'BASIC SCHOLARSHIP',
          color: 'hsl(79, 70%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_basic_scholarship,
          })),
        },
        {
          id: 'HONORS',
          color: 'hsl(37, 70%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_honors,
          })),
        },
        {
          id: 'PRIORITY',
          color: 'hsl(343, 70%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_priority,
          })),
        },
        {
          id: 'PREMIER',
          color: 'hsl(543, 90%, 50%)',
          data: yearlyData.map(value => ({
            x: value.year,
            y: value.total_premier,
          })),
        },
      ]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 4,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Year',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 4,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendOffset: -55,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default ResponsiveLineChart;
