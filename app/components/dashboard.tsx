"use client";
import React, { ReactNode } from 'react';
import Nav from './nav';
import { Header } from './header';

function Dashboard({ children }: { children: ReactNode }) {
  return <div className="min-h-full flex-1">
    <Nav />
    <Header />
    <main>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  </div>
}


export default Dashboard;