

"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={() => firebaseSignOut()} className="btn-logout">Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <button onClick={() => gitHubSignIn()} className="btn-login">Login with GitHub</button>
      )}
    </div>
  );
};

export default Page;
