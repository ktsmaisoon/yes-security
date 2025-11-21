import Image from "next/image";
import Link from "next/link";
import getImage from "@/utils/get-image";
import { Blog, getSuggestBlogs } from "@/data/blogs";

const profileIcon = getImage("/assets/blog/profile-ico.png");
const shareIcons = [
  getImage("/assets/blog/facebook-ico38.png"),
  getImage("/assets/blog/ig-ico38.png"),
  getImage("/assets/blog/line-ico38.png"),
  getImage("/assets/blog/tw-ico38.png"),
  getImage("/assets/blog/yt-ico38.png"),
];

export default function BlogDetail({ blog, basePrefix = "" }: { blog: Blog; basePrefix?: string }) {
  const suggestions = getSuggestBlogs(blog.slug, 4);
  const headings = blog.content.filter((block) => block.type === "h2" && block.text) as { type: "h2"; text: string }[];
  const introText = blog.content[0]?.type === "p" ? blog.content[0].text : undefined;
  const contentBlocks = introText ? blog.content.slice(1) : blog.content;

  return (
    <main className="bg-black text-white">
      {/* Hero Section with background */}
      <section className="relative full-bleed">
        <div className="absolute inset-0">
          <Image src={blog.heroBg} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-site pt-[120px] pb-10 flex flex-col justify-center items-start self-stretch shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:pt-[70px] lg:pb-10 lg:shadow-none">
          <span className="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">Training</span>
          <h1 className="mt-4 font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-4xl">
            {blog.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="mt-4 max-w-2xl text-sm lg:text-base text-white/80 leading-7">
            {blog.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <div className="relative h-8 w-8">
              <Image src={profileIcon} alt="Author" fill className="object-contain" />
            </div>
            <span>By {blog.author}</span>
            <span className="opacity-60">•</span>
            <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="opacity-60">•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mt-6 text-xs lg:text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="opacity-60">»</li>
              <li>
                <Link href="/resource-center">Blog</Link>
              </li>
              <li className="opacity-60">»</li>
              <li className="text-white truncate max-w-[260px] lg:max-w-[480px]">
                {blog.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section
        className="container-site flex flex-col items-start gap-[48px] px-[20px] py-[56px] lg:flex-row lg:gap-[48px] lg:px-[120px] lg:py-[56px]"
      >
        {/* Left tools column (desktop only) */}
        <aside className="hidden lg:flex flex-col gap-6 w-[260px] shrink-0">
          {/* Desktop share box */}
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <span className="opacity-80">Share this article</span>
            <div className="flex items-center gap-3">
              {shareIcons.map((icon, idx) => (
                <a key={idx} href="#" className="relative h-8 w-8 opacity-80 hover:opacity-100 transition">
                  <Image src={icon} alt="share" fill className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Table of contents */}
          {headings.length > 0 && (
            <div className="rounded-[20px] border border-white/15 bg-white/5 px-5 py-6 text-xs text-white/80">
              <p className="text-sm font-medium text-white mb-4">Table of contents</p>
              <ul className="space-y-2">
                {headings.map((h, idx) => (
                  <li key={idx} className="leading-5">
                    {h.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Middle: main content */}
        <article className="w-full lg:flex-[2]">
          {/* (Desktop share tools are in the left column; mobile share moved near author footer) */}

          {/* Intro paragraph + in-article title */}
          {introText && (
            <div className="mb-6">
              <p className="text-white/85 leading-7">
                {introText}
              </p>
              <h2 className="mt-6 font-['Wix_Madefor_Display',_sans-serif] text-2xl font-semibold">
                {blog.title}
              </h2>
            </div>
          )}

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/15 mb-6">
            <Image src={blog.coverImage} alt="" fill className="object-cover" />
          </div>

          {/* Rich content */}
          <div className="prose prose-invert max-w-none">
            {contentBlocks.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} className="font-semibold text-2xl mt-8">
                    {block.text}
                  </h2>
                );
              if (block.type === "p")
                return (
                  <p key={i} className="text-white/85 leading-7 mt-4">
                    {block.text}
                  </p>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="list-disc pl-6 mt-4 space-y-2">
                    {block.items?.map((it, idx) => (
                      <li key={idx}>{it}</li>
                    ))}
                  </ul>
                );
              if (block.type === "hr")
                return <hr key={i} className="my-8 border-white/10" />;
              return null;
            })}
          </div>

          {/* Mobile share box above author footer */}
          <div className="mt-12 mb-6 flex lg:hidden flex-col gap-3 text-sm text-white/80">
            <span className="opacity-80">Share this article</span>
            <div className="flex items-center gap-3">
              {shareIcons.map((icon, idx) => (
                <a key={idx} href="#" className="relative h-8 w-8 opacity-80 hover:opacity-100 transition">
                  <Image src={icon} alt="share" fill className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Author footer */}
          <div className="pt-6 border-t border-white/20 flex items-center gap-3 lg:gap-4 text-white/80">
            <div className="relative h-9 w-9 lg:h-10 lg:w-10">
              <Image src={profileIcon} alt="Author" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] lg:text-xs uppercase tracking-wide opacity-60">Writer</span>
              <span className="text-sm lg:text-base font-medium">By {blog.author}</span>
            </div>
          </div>
        </article>

        {/* Right column / Suggestions */}
        <aside className="w-full lg:flex-1 mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-6 space-y-5">
            {/* Search bar (desktop) */}
            <div className="hidden lg:block">
              <div className="relative w-full h-10 rounded-full bg-white/10 border border-white/20 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="w-full h-full bg-transparent px-4 pr-10 text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-medium mb-3">Related Blogs</p>
              <div className="space-y-4">
                {suggestions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`${basePrefix}/resource-center/${s.slug}`}
                    className="block group"
                  >
                    <div className="relative w-full h-36 rounded-md overflow-hidden border border-white/10">
                      <Image src={s.coverImage} alt="" fill className="object-cover" />
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium group-hover:text-[#3eff51] transition line-clamp-2">
                        {s.title}
                      </p>
                      <p className="text-xs text-white/70 mt-1">
                        {new Date(s.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Mobile CTA section */}
      <section className="flex lg:hidden w-[390px] px-6 pt-[60px] pb-[120px] flex-col items-center gap-[32px] mx-auto">
        <h2 className="font-['Wix_Madefor_Display',_sans-serif] text-2xl font-semibold text-center">
          Protect your
          <span className="hidden sm:inline"> </span>
          <br className="block sm:hidden" />
          invaluable data here
        </h2>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Free Consultation
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px]
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Desktop CTA section */}
      <section className="hidden lg:flex w-[1440px] px-[120px] py-[150px] flex-col items-center gap-[40px] mx-auto">
        <h2 className="font-['Wix_Madefor_Display',_sans-serif] text-3xl font-semibold text-center">
          Ready to strengthen your cybersecurity posture?
        </h2>
        <p className="text-white/80 text-center max-w-[640px] text-sm leading-7">
          Talk with our experts to understand your current risk exposure and plan the next steps for your organization&apos;s security.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Free Consultation
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-sm px-[18px] py-[14px]
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
