export type Position = {
  slug: string;
  title: string;
  location: string;
  type: string;
  team: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
};

export const positions: Position[] = [
  {
    slug: "web-designer",
    title: "Web Designer",
    location: "BANGKOK",
    type: "Full - Time",
    team: "Design Team",
    summary:
      "We are seeking a creative and detail-oriented Web Designer to join our team. The ideal candidate will be responsible for designing engaging, user-friendly, and responsive websites that align with our brand identity and business goals.",
    responsibilities: [
      "Design website layouts, wireframes, and mockups with strong attention to UX and UI principles",
      "Collaborate with developers to ensure accurate implementation of designs",
      "Maintain design consistency across all digital platforms and pages",
      "Create visual assets including icons, graphics, and interactive elements",
      "Optimize designs for performance, accessibility, and responsive behavior",
      "Stay updated with web design trends and suggest improvements to enhance user experience",
      "Support marketing and content teams with web-related design needs",
    ],
    skills: [
      "Proven experience as a Web Designer, UI/UX Designer, or similar role",
      "Proficiency in design tools such as Figma, Adobe XD, Photoshop, Illustrator",
      "Strong understanding of Responsive Design and cross-device optimization",
      "Basic knowledge of HTML, CSS, and JavaScript (a plus)",
      "Familiarity with design systems, typography, and color theory",
      "Strong problem-solving skills and attention to detail",
      "Ability to manage multiple projects and meet deadlines",
      "Excellent communication and teamwork skills",
    ],
  },
  {
    slug: "account-executive",
    title: "Account Executive (AE)",
    location: "BANGKOK",
    type: "Full - Time",
    team: "Design Team",
    summary:
      "As an Account Executive, you will manage client relationships, coordinate project deliveries, and ensure client satisfaction while identifying growth opportunities.",
    responsibilities: [
      "Manage and nurture relationships with key clients",
      "Coordinate with internal teams to deliver projects on time",
      "Prepare proposals, reports, and presentations",
      "Identify upsell/cross-sell opportunities",
    ],
    skills: [
      "1-3 years of experience in account management or related field",
      "Strong communication and presentation skills",
      "Ability to multitask and manage priorities",
      "Experience in digital or cybersecurity industry is a plus",
    ],
  },
  {
    slug: "wordpress-developer",
    title: "Wordpress Developer",
    location: "BANGKOK",
    type: "Full - Time",
    team: "Design Team",
    summary:
      "Build and maintain high-quality WordPress sites with a focus on performance, accessibility, and maintainability.",
    responsibilities: [
      "Develop custom themes and plugins",
      "Integrate APIs and optimize site performance",
      "Implement best practices for security and SEO",
    ],
    skills: [
      "Solid experience with WordPress, PHP, and JavaScript",
      "Familiarity with modern tooling and CI",
      "Understanding of web security best practices",
    ],
  },
  {
    slug: "project-coordinator",
    title: "Project Coordinator",
    location: "BANGKOK",
    type: "Full - Time",
    team: "Design Team",
    summary:
      "Coordinate timelines, resources, and communication across teams to ensure project success.",
    responsibilities: [
      "Support project planning and delivery",
      "Track progress and risks",
      "Facilitate communication between stakeholders",
    ],
    skills: [
      "Strong organizational and communication skills",
      "Experience with project management tools",
      "Attention to detail and proactive mindset",
    ],
  },
  {
    slug: "seo-specialist",
    title: "SEO Specialist",
    location: "BANGKOK",
    type: "Full - Time",
    team: "Design Team",
    summary:
      "Drive organic growth through on-page, technical, and content SEO strategies.",
    responsibilities: [
      "Conduct keyword research and site audits",
      "Implement on-page and technical SEO improvements",
      "Collaborate with content team on SEO-friendly content",
    ],
    skills: [
      "1-3 years of SEO experience",
      "Proficient with Google Search Console, GA, and SEO tools",
      "Understanding of Core Web Vitals and structured data",
    ],
  },
];
