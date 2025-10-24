'use client';

import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Buyanihan</h1>
        <p className="text-lg text-muted-foreground">
          A Filipino-inspired e-commerce platform built with Next.js
        </p>
      </div>
    </main>
  );
}

