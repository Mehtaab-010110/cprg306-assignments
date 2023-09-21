import StudentInfo from './StudentInfo';
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          CPRG 306 : Web Development 2 - Assignments
        </h1>
        <StudentInfo />
        <link href="/week2">
          <a>Week 2</a>
        </link>
      </div>
    </main>
  );
}
