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
      },
      {
        title: "Tech Lead",
        company: "Incarnate Private Limited, Colombo",
        isActive: false,
        achievements: [
          "Revamped visituva.lk resulting in 60% traffic increase",
          "Designed cloud-based e-commerce platforms",
          "Managed Linux servers for high availability",
          "Implemented scalable web architecture"
        ]
      }
    ]
  },
  {
    period: "2021 - 2022",
    roles: [
      {
        title: "Head of Digital Media",
        company: "Media Management Multimedia",
        isActive: false,
        achievements: [
          "Increased digital revenue by 300% through strategic campaigns",
          "Developed and managed company websites",
          "Managed server infrastructure",
          "Led cross-functional team collaboration"
        ]
      }
    ]
  },
  {
    period: "2013 - 2021",
    roles: [
      {
        title: "Project Leader Software Development",
        company: "Lotus Technologies",
        isActive: false,
        achievements: [
          "Led development of e-commerce systems",
          "Documented technical specifications",
          "Coordinated with multidisciplinary teams"
        ]
      },
      {
        title: "Senior Software Engineer",
        company: "Lotus Technologies",
        isActive: false,
        achievements: [
          "Created user-friendly interfaces",
          "Developed database-driven websites",
          "Integrated multiple payment gateways"
        ]
      }
    ]
  }
];