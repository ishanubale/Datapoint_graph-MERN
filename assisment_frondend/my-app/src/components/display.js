
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const DisplayComponent = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchDataPoints = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/datapoint');
        console.log(response,response.data.response)
        setDataPoints(response.data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataPoints();
  }, []);

  // Transform the data points into the format required by the chart
  const chartData = [
    ['X', 'Y'],
    ...dataPoints.map(dp => [dp.x, dp.y]) // Extracting the 'x' and 'y' values from each data point
  ];

  return (
    <div>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          title: 'X vs Y Scatter Plot',
          hAxis: { title: 'X' },
          vAxis: { title: 'Y' },
          legend: 'none'
        }}
      />
    </div>
  );
};

export default DisplayComponent;

