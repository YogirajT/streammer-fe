"use client";
import React, { ReactNode } from 'react';
import Nav from './nav';

function Dashboard({ children }: { children: ReactNode }) {
    return <div className="min-h-full min-w-full">
        <Nav />
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">My Stream</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    </div>
}


export default Dashboard;