import React from 'react';
import ParallaxSection from '../ParallaxSection';

const projects = [
  {
    title: "Evolve Shop",
    category:
      "EvolveShop is a cutting-edge e-commerce platform featuring a unique front-end and a robust custom-built backend. It supports over 10 payment options, delivering seamless shopping experiences. Since deployment, revenue has increased by 200%, showcasing its business impact. The platform is optimized for speed and SEO, with a CDN, modern image formats, minified code, and mobile responsiveness. Keyword-rich content, structured data, and fast load times ensure high search engine visibility and exceptional user satisfaction.",
    image: "/images/evolve.png",
    link: "https://evolveshop.lk",
  },
  {
    title: "Custom AI Chatbot",
    category: "A Python and Streamlit-powered AI chatbot platform designed to enhance engagement, streamline operations, and boost conversions. Featuring tailored development, seamless integration, and personalized conversational flows, it automates tasks, reduces response times, and delivers efficient, user-friendly experiences. Built with Streamlit for rapid prototyping and scalability, it adapts effortlessly to diverse business needs while offering a visually interactive interface for real-time monitoring and updates.",
    image: "/images/chatbot.png",
    link: "https://uvatourism.azurewebsites.net/",
  },
  {
    title: "AR/VR Solutions",
    category: "A comprehensive platform for Augmented, Virtual, and Mixed Reality development, offering immersive overlays, gamified environments, and lifelike virtual experiences. It seamlessly blends real and digital elements, supported by custom roadmaps, audience insights, multi-platform UI/UX design, and 3D modeling. With robust integration of devices, APIs, and advanced technologies like edge computing, it delivers innovative and practical AR/VR experiences across all platforms.",
    image: "/images/vr.png",
    link: "https://uvametatour.azurewebsites.net/",
  },
  {
    title: "CRM with Tailored Modules",
    category: "A powerful PHP-based CRM platform designed for businesses seeking flexibility and efficiency. With fully customizable modules, it adapts to unique workflows, enabling seamless customer data management, lead tracking, and communication monitoring. Tailored to your specific needs, this CRM allows you to build and integrate custom modules for specialized functions like inventory management, project tracking, billing, or advanced analytics. Its modular architecture ensures easy scalability and adaptability as your business grows.",
    image: "/images/crm.png",
    link: "#",
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
                
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-400 text-justify">{project.category}</p>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full" ><span className="text-[#2EE59D] pt-5">View Project</span></a>

              </div>
            </div>
          </ParallaxSection>
        ))}
      </div>
    </div>
  );
}
