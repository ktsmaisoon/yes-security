import { slugify } from "@/utils/slugify";
import getImage from "@/utils/get-image";

export type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  readTime: string;
  heroBg: string;
  coverImage: string;
  content: Array<{ type: "h2" | "p" | "li" | "ul" | "hr"; text?: string; items?: string[] }>;
};

const titles = [
  "The Top 10 Cybersecurity Threats to Watch in 2025",
  "What Is Zero Trust Security? A Beginner's Guide",
  "How to Secure Your Business from Ransomware Attacks",
  "Understanding Phishing Attacks and How to Prevent Them",
  "Cyber Hygiene 101: Simple Steps for a Safer Digital Life",
  "Why Your Small Business Needs a Cybersecurity Plan",
  "Insider Threats: The Dangers Lurking Within Your Organization",
  "Multi-Factor Authentication: Is It Enough?",
  "Red Team vs Blue Team: Understanding the Battle for Security",
  "The Role of AI in Modern Cybersecurity Defense",
  "Top 5 Security Misconfigurations That Hackers Exploit",
  "Penetration Testing Explained: What, Why, and How",
];

const coverMap = [
  getImage("/assets/blog/cybersecu-threats-img.png"),
  getImage("/assets/blog/zerotrust-blog-img.png"),
  getImage("/assets/blog/cybersecuplan-blog-img.png"),
  getImage("/assets/blog/phishingatk-blog-img.png"),
  getImage("/assets/blog/cyberhygiene-blog-img.png"),
  getImage("/assets/blog/cybersecuplan-blog-img.png"),
  getImage("/assets/blog/cybersecu-threats-img.png"),
  getImage("/assets/blog/zerotrust-blog-img.png"),
  getImage("/assets/blog/phishingatk-blog-img.png"),
  getImage("/assets/blog/cyberhygiene-blog-img.png"),
  getImage("/assets/blog/cybersecuplan-blog-img.png"),
  getImage("/assets/blog/zerotrust-blog-img.png"),
];

const heroBgs = [
  getImage("/assets/blog/blog-bg1.png"),
  getImage("/assets/blog/blog-bg2.png"),
  getImage("/assets/blog/blog-bg3.png"),
  getImage("/assets/blog/blog-bg1.png"),
  getImage("/assets/blog/blog-bg2.png"),
  getImage("/assets/blog/blog-bg3.png"),
  getImage("/assets/blog/blog-bg1.png"),
  getImage("/assets/blog/blog-bg2.png"),
  getImage("/assets/blog/blog-bg3.png"),
  getImage("/assets/blog/blog-bg1.png"),
  getImage("/assets/blog/blog-bg2.png"),
  getImage("/assets/blog/blog-bg3.png"),
];

const baseContent: Array<{ type: "h2" | "p" | "li" | "ul" | "hr"; text?: string; items?: string[] }> = [
  { type: "p", text: "In today's rapidly evolving digital landscape, security threats are becoming more sophisticated and frequent. This article breaks down the essentials and provides practical guidance." },
  { type: "h2", text: "Key Takeaways" },
  { type: "ul", items: [
    "Emerging threats require layered defenses",
    "People, process, and technology must align",
    "Continuous monitoring and response reduce risk",
  ]},
  { type: "h2", text: "What You Need to Know" },
  { type: "p", text: "From credential theft and phishing to ransomware and insider risk, attackers exploit the weakest link. Organizations should adopt zero-trust principles, implement strong identity and access controls, and practice regular security testing." },
  { type: "p", text: "Security is a team sport—train your people, instrument your systems, and measure outcomes." },
  { type: "hr" },
  { type: "p", text: "If you want hands-on help improving your security readiness, our team can assess your environment and prioritize quick wins that deliver measurable value." },
];

export const blogs: Blog[] = titles.map((title, i) => {
  const slug = slugify(title);
  return {
    id: i + 1,
    title,
    slug,
    excerpt: "Practical insights to reduce risk, strengthen security, and meet compliance.",
    author: "Yes Cybersecurity Team",
    date: new Date(2025, 0, i + 1).toISOString(),
    readTime: `${8 + (i % 5)} min read`,
    heroBg: heroBgs[i],
    coverImage: coverMap[i],
    content: baseContent,
  } as Blog;
});

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getSuggestBlogs(currentSlug: string, limit = 4): Blog[] {
  return blogs.filter((b) => b.slug !== currentSlug).slice(0, limit);
}
