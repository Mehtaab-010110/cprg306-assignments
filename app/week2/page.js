import React from "react";
import Link from 'next/link';
import StudentInfo from "../StudentInfo";

export default function week2Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <h1 class = "text-4xl">My Shopping List</h1>
            <StudentInfo />
          </div>
        </main>
      );
}