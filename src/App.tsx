import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import ProfileCard from './components/ProfileCard';
import IntroSection from './components/IntroSection';
import Stats from './components/Stats';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import AwardsSection from './components/sections/AwardsSection';
import FullscreenButton from './components/FullscreenButton';
import ScrollReveal from './components/ScrollReveal';
import Footer from './components/Footer';
import './styles/animations.css';
import './styles/typography.css';

export default function App() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z2CPFGC8FE';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z2CPFGC8FE');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <FullscreenButton />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[400px] lg:flex-shrink-0 animate-fade-in p-8 lg:fixed">
          <ScrollReveal direction="left">
            <ProfileCard />
          </ScrollReveal>
        </div>
        <div className="flex-grow lg:ml-main-content lg:mr-[5%] p-8">
          <div className="space-y-48">
            <section id="home">
              <ScrollReveal>
                <IntroSection />
                <div className="mt-8">
                  <Stats />
                </div>
              </ScrollReveal>
            </section>
            
            <section id="about">
              <ScrollReveal direction="right">
                <AboutSection />
              </ScrollReveal>
            </section>
            
            <section id="skills">
              <ScrollReveal direction="left">
                <SkillsSection />
              </ScrollReveal>
            </section>
            
            <section id="projects">
              <ScrollReveal>
                <ProjectsSection />
              </ScrollReveal>
            </section>
            
            <section id="experience">
              <ScrollReveal direction="left">
                <ExperienceSection />
              </ScrollReveal>
            </section>
            
            <section id="education">
              <ScrollReveal direction="right">
                <EducationSection />
              </ScrollReveal>
            </section>

            <section id="awards">
              <ScrollReveal direction="left">
                <AwardsSection />
              </ScrollReveal>
            </section>
          </div>
          
          <Footer />
        </div>
      </div>
      <Navigation />
    </div>
  );
}