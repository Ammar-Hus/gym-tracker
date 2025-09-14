import React, { useEffect, useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, parseISO } from 'date-fns';

const SPLIT = [
  { day: 'Monday', muscle: 'Chest + Triceps + Abs', exercises: ['Bench Press','Incline DB Press','Dips'] },
  { day: 'Tuesday', muscle: 'Back + Biceps', exercises: ['Pull-Ups','Barbell Rows','Seated Rows'] },
  { day: 'Wednesday', muscle: 'Legs + Shoulders', exercises: ['Squats','RDLs','Lunges'] },
];

export default function App(){
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-100 via-white to-pink-50'>
      <div className='p-4 text-center font-bold text-xl'>Gym Tracker App</div>
      <div className='p-4'>[UI will render here in full version]</div>
    </div>
  );
}
