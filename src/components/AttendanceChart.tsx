"use client"

import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tuesday',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wednesday',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thusday',
    present: 90,
    absent: 75,
  },
  {
    name: 'Friday',
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {

  return (
    <div className="bg-white rounded-lg p-4 h-full ">
      <div className="flex justify-between items-center">
        <h1>Attendance</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false  }/>
          <YAxis axisLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgrey" }} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"20px"}}/>
          <Bar legendType='circle' dataKey="present" fill="#FAE27C" radius={[10,10,0,0]}/>
          <Bar legendType='circle' dataKey="absent" fill="#C3EBFA" radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart