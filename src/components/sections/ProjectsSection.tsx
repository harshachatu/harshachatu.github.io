import React from 'react';
import ParallaxSection from '../ParallaxSection';

const projects = [
  {
    title: "EvolveShop",
    category:
      "EvolveShop is a cutting-edge e-commerce platform featuring a unique front-end and a robust custom-built backend. It supports over 10 payment options, delivering seamless shopping experiences. Since deployment, revenue has increased by 200%, showcasing its business impact. The platform is optimized for speed and SEO, with a CDN, modern image formats, minified code, and mobile responsiveness. Keyword-rich content, structured data, and fast load times ensure high search engine visibility and exceptional user satisfaction.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&q=80&w=800",
    link: "https://your-evolveshop-link.com",
  },
  {
    title: "Mobile Banking App",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    link: "https://your-mobilebanking-link.com",
  },
  {
    title: "Analytics Dashboard",
    category: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    link: "https://your-analytics-dashboard-link.com",
  },
  {
    title: "Real-time Chat App",
    category: "Backend Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://your-realtime-chat-app-link.com",
  },
];

export default function ProjectsSection() {
  return (
    <div className="space-y-8">
      <ParallaxSection speed={0.3}>
        <div className="bg-[#1A1A1A] rounded-[32px] p-12">
          <h2 className="text-4xl font-light mb-6">
            Featured <span className="text-[#2EE59D]">Projects</span>
          </h2>
        </div>
      </ParallaxSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ParallaxSection key={index} speed={0.4 + index * 0.1}>
            <div className="bg-[#1A1A1A] rounded-[32px] overflow-hidden group cursor-pointer">
              <div className="relative h-48">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#2EE59D]">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-400 text-justify">{project.category}</p>
              </div>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}
