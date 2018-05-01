import React from 'react';

import '../assets/styles/simplebarchart.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const SimpleBarChart = ({ data }) => {
  return (
    <BarChart
      width={1100}
      height={450}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="batsman" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Average" fill="#8884d8" />
      <Bar dataKey="StrikeRate" fill="#82ca9d" />
    </BarChart>
  );
};

export default SimpleBarChart;
