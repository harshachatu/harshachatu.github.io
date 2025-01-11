export interface RoleType {
  title: string;
  company: string;
  isActive: boolean;
  description?: string;
  achievements?: string[];
  link?: string;
}

export interface TimeframeType {
  period: string;
  roles: RoleType[];
}

export const experienceData: TimeframeType[] = [
  
  {
    period: "2023 - Present",
    roles: [
      {
        title: "Full Stack Developer",
        company: "META61, Sydney, Australia",
        isActive: true,
        achievements: [
          "Built, deployed, and managed Azure-based applications",
          "Developed and implemented AI chatbots and recommendation systems",
          "Delivered cross-platform mobile apps using React"
        ]
      }
    ]
  },
  {
    period: "2023",
    roles: [
      {
        title: "Tech Lead",
        company: "Incarnate Private Limited, Colombo, Sri Lanka",
        isActive: false,
        achievements: [
          "Revamped visituva.lk in collaboration with Solidaridad and EU Sri Lanka, increasing visitor traffic by 60%",
          "Designed and maintained cloud-based e-commerce platforms for business scalability",
          "Managed Linux servers (Apache, NGINX, LiteSpeed) ensuring high availability and optimized performance",
          "Implemented scalable web architecture and advanced debugging strategies to improve system reliability"
        ]
      }
    ]
  },
  {
    period: "2021 - 2022",
    roles: [
      {
        title: "Head of Digital Media",
        company: "Media Management Multimedia (Pvt) Ltd (Owned by LYCA Group), Colombo, Sri Lanka",
        isActive: false,
        achievements: [
          "Increased digital revenue by 300% through strategic social media campaigns and YouTube monetization",
          "Developed and managed company websites and social media platforms",
          "Managed server infrastructure including Apache and NGINX",
          "Collaborated with marketing and project teams to deliver innovative solutions"
        ]
      }
    ]
  },
  {
    period: "2016 - 2021",
    roles: [
      {
        title: "Project Leader Software Development",
        company: "Lotus Technologies (Private) Limited, Colombo, Sri Lanka",
        isActive: false,
        achievements: [
          "Led the development of advanced e-commerce systems and live-streaming solutions",
          "Documented features, specifications, and infrastructure requirements",
          "Coordinated with multidisciplinary teams to align technical needs with business goals"
        ]
      }
    ]
  },
  {
    period: "2013 - 2016",
    roles: [
      {
        title: "Senior Software Engineer",
        company: "Lotus Technologies (Private) Limited, Colombo, Sri Lanka",
        isActive: false,
        achievements: [
          "Created user-friendly interfaces and ensured cross-browser compatibility",
          "Developed database-driven websites and systems using PHP and MySQL",
          "Integrated multiple payment gateways to enhance functionality"
        ]
      }
    ]
  },
  {
    period: "2010 - 2013",
    roles: [
      {
        title: "Junior PHP Developer",
        company: "CC Corporate Services, Colombo, Sri Lanka",
        isActive: false,
        achievements: [
          "Built and maintained database-driven websites and systems",
          "Conducted cross-browser usability testing and validation",
          "Developed backend solutions and integrated APIs"
        ]
      }
    ]
  }
  
];