import React from 'react';
import PageTransition from '../components/PageTransition';
import IntroSection from '../components/IntroSection';
import Stats from '../components/Stats';

export default function HomePage() {
  return (
    <PageTransition>
      <IntroSection />
      <div className="mt-8">
        <Stats />
      </div>
    </PageTransition>
  );
}