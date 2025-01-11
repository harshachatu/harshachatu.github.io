import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, FolderGit2, Menu, X, Code2, Trophy } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', Icon: Home, label: 'Home' },
    { id: 'about', Icon: User, label: 'About' },
    { id: 'skills', Icon: Code2, label: 'Skills' },
    { id: 'projects', Icon: FolderGit2, label: 'Projects' },
    { id: 'experience', Icon: Briefcase, label: 'Experience' },
    { id: 'education', Icon: GraduationCap, label: 'Education' },
    { id: 'awards', Icon: Trophy, label: 'Awards' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed right-4 top-4 z-50 bg-[#1A1A1A] p-2 rounded-full hover:bg-[#1E1E1E] transition-colors"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav className={`
        fixed lg:right-6 top-1/2 -translate-y-1/2 bg-[#1A1A1A] rounded-full py-6 px-3 space-y-6 z-40
        transition-all duration-300 shadow-lg
        ${isMenuOpen ? 'right-4' : '-right-full lg:right-6'}
      `}>
        {navItems.map(({ id, Icon, label }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`
              block w-full p-2 rounded-full transition-all duration-300
              ${activeSection === id 
                ? 'text-[#2EE59D] bg-[#1E1E1E] scale-110' 
                : 'text-gray-500 hover:text-[#2EE59D] hover:bg-[#1E1E1E]'
              }
            `}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>
    </>
  );
}