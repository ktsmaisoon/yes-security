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
      <section className="relative full-bleed flex flex-col justify-center items-start self-stretch pt-[120px] lg:py-[150px]">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black" />

        {/* Mobile-only decorative background image on top-right */}
        <div className="pointer-events-none absolute right-0 top-0 w-[390px] h-[937px] flex flex-col items-center lg:hidden">
          <div className="relative w-full h-full">
            <Image src="/assets/blog/blog-bgmo-1.png" alt="" fill className="object-contain" priority />
          </div>
        </div>

        {/* Desktop decorative background image on top-right */}
        <div className="pointer-events-none absolute right-0 top-0 hidden lg:flex w-[1440px] h-[1196px] flex-col items-center">
          <div className="relative w-full h-full">
            <Image src="/assets/blog/blog-bg1.png" alt="" fill className="object-cover" priority />
          </div>
        </div>
        {/* Desktop-only rotated background overlay for resource center */}
        <div
          className="hidden lg:flex pointer-events-none select-none absolute z-0"
          style={{
            width: "1440px",
            height: "1960px",
            transform: "translate(-50%, -50%) rotate(-14.864deg)",
            padding: "56px 120px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "48px",
            left: "50%",
            top: "1620px",
            backgroundImage: "url(/assets/resource-center/resource-center-mobg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
        <div className="relative container-site pb-10 flex flex-col justify-center items-start self-stretch shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:w-[1440px] lg:px-[120px] lg:items-start lg:gap-[24px] lg:pt-0 lg:pb-0 lg:shadow-none">
          <span className="inline-flex items-center justify-center gap-[10px] rounded-[41px] border border-[#3EFF51] px-[18px] py-[7px] text-[16px] leading-[22px] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[#3EFF51]
           lg:inline-flex lg:items-center lg:justify-center lg:gap-[10px] lg:h-[36px] lg:px-[18px] lg:py-[14px] lg:text-[16px] lg:leading-[22px]">
            Training
          </span>
          <h1 className="mt-4 lg:mt-4 self-stretch font-['Wix_Madefor_Display',_sans-serif] font-medium text-[32px] leading-[40px] text-white lg:text-[56px] lg:leading-[77px] lg:font-semibold">
            {blog.title === "The Top 10 Cybersecurity Threats to Watch in 2025" ? (
              <>
                The Top 10 Cybersecurity
                <br className="hidden lg:block" />
                Threats to Watch in 2025
              </>
            ) : (
              blog.title
            )}
          </h1>

          {/* Subtitle / Excerpt */}
          <div className="mt-4 flex flex-col items-start gap-[40px] self-stretch">
            <div className="flex flex-col items-start gap-[24px] self-stretch">
              <p className="w-full lg:w-[651px] font-['Wix_Madefor_Display',_sans-serif] text-white text-[16px] leading-[22px] font-normal lg:text-[18px] lg:leading-[26px] lg:font-medium lg:mt-4 lg:mb-4">
                {blog.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 text-white text-[14px] leading-[16px] font-['Wix_Madefor_Display',_sans-serif] font-medium">
              {/* Avatar + author, centered vertically */}
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8">
                  <Image src={profileIcon} alt="Author" fill className="object-contain" />
                </div>
                <span>By {blog.author}</span>
              </div>

              {/* Date + read time: below avatar on mobile, inline on desktop */}
              <div className="mt-2 flex items-center gap-2 lg:mt-0 lg:ml-4">
                <span className="inline-block w-[4px] h-[4px] rounded-full bg-[#3EFF51]" aria-hidden="true" />
                <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span className="inline-block w-[4px] h-[4px] rounded-full bg-[#3EFF51]" aria-hidden="true" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-white text-[12px] leading-[16px] font-['Wix_Madefor_Display',_sans-serif] font-medium lg:text-sm">
              <ol className="flex flex-wrap items-center gap-1 lg:w-[497px] lg:py-4 lg:items-center lg:gap-[14px]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="opacity-60">»</li>
                <li>
                  <Link href="/resource-center">Blog</Link>
                </li>
                <li className="opacity-60">»</li>
                <li className="text-white w-full lg:w-auto lg:truncate lg:max-w-[480px]">
                  {blog.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section
        className="container-site relative flex flex-col items-start self-stretch gap-[48px] px-[20px] pt-[56px] pb-0 lg:flex-row lg:items-start lg:gap-[48px] lg:px-[120px] lg:py-[56px]"
      >
        {/* Desktop-only background image behind content (blog-bg2) */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:flex items-start justify-center">
          <div className="relative w-[1440px] h-[1860px] flex flex-col items-start gap-[48px] px-[120px] py-[56px]">
            <Image src="/assets/blog/blog-bg2.png" alt="" fill className="object-cover" />
          </div>
        </div>
        {/* Left tools column (desktop only) */}
        <aside className="hidden lg:flex flex-col gap-6 w-[260px] shrink-0">
          {/* Desktop share box */}
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <span className="opacity-80 text-white lg:flex-1 lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[20px] lg:leading-[26px] lg:font-medium">
              Share this article
            </span>
            <div className="flex items-center gap-3 lg:gap-2 lg:pb-[40px] lg:justify-start lg:self-start">
              {shareIcons.map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative flex items-center justify-center h-8 w-8 opacity-80 hover:opacity-100 transition lg:h-[38px] lg:w-[38px] lg:p-[10px] lg:gap-[10px] lg:rounded-[100px] lg:bg-white lg:aspect-square"
                >
                  <Image src={icon} alt="share" fill className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Table of contents */}
          {headings.length > 0 && (
            <div className="rounded-[20px] border border-white/15 bg-white/5 px-5 py-6 text-xs text-white/80 lg:flex lg:flex-col lg:items-start lg:gap-[20px] lg:self-stretch lg:p-[20px] lg:rounded-[25px] lg:bg-[#5E5E5E] lg:border-transparent">
              <p className="text-sm font-medium text-white mb-4 lg:mb-0 lg:self-stretch lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[20px] lg:leading-[26px] lg:font-medium">
                Table of contents
              </p>
              <ul className="space-y-2 lg:w-full">
                {headings.map((h, idx) => (
                  <li
                    key={idx}
                    className="leading-5 lg:self-stretch lg:text-white lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[14px] lg:leading-[16px] lg:font-medium"
                  >
                    {h.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Middle: main content */}
        <article className="w-full lg:flex lg:flex-col lg:items-start">
          {/* (Desktop share tools are in the left column; mobile share moved near author footer) */}

          {/* Main content wrapper */}
          <div className="w-full lg:w-[613px] lg:flex lg:flex-col lg:items-start lg:gap-[30px]">
            {/* Intro paragraph + in-article title */}
            {introText && (
              <div className="mb-6 lg:mb-0">
                <p className="text-white/85 leading-7 lg:text-white lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[16px] lg:leading-[22px] lg:font-normal">
                  {introText}
                </p>
                <h2 className="mt-6 font-['Wix_Madefor_Display',_sans-serif] text-2xl font-semibold lg:text-white lg:text-[32px] lg:leading-[40px] lg:font-medium">
                  {blog.title}
                </h2>
              </div>
            )}

            {/* Cover image */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/15 mb-6 lg:mb-0 lg:h-[406.39px] lg:aspect-[613/406.39] lg:self-stretch">
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
                if (block.type === "p") {
                  const isSecurityParagraph =
                    block.text ===
                    "Security is a team sport—train your people, instrument your systems, and measure outcomes.";
                  return (
                    <p
                      key={i}
                      className={`text-white/85 leading-7 mt-4 lg:my-4${isSecurityParagraph ? " lg:mb-4" : ""
                        }`}
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul")
                  return (
                    <ul key={i} className="list-disc pl-6 mt-4 space-y-2">
                      {block.items?.map((it, idx) => (
                        <li key={idx}>{it}</li>
                      ))}
                    </ul>
                  );
                if (block.type === "hr")
                  return (
                    <hr
                      key={i}
                      className="my-8 border-white/10 lg:my-0 lg:h-[3px] lg:w-[613px] lg:bg-white lg:border-none"
                    />
                  );
                return null;
              })}
            </div>

            {/* Mobile share box above author footer */}
            <div className="mt-12 mb-6 flex lg:hidden flex-col items-start gap-3 text-white">
              <span className="flex-1 font-['Wix_Madefor_Display',_sans-serif] text-[20px] leading-[26px] font-medium">
                Share this article
              </span>
              {/* Separator under Share this article */}
              <div className="w-[350px] h-[3px] bg-white" />
              <div className="flex items-center gap-3">
                {shareIcons.map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="relative flex items-center justify-center w-[38px] h-[38px] p-[10px] gap-[10px] rounded-full bg-white hover:opacity-80 transition aspect-square"
                  >
                    <Image src={icon} alt="share" fill className="object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop author separator */}
          <div className="hidden lg:block w-[613px] h-[3px] bg-white lg:my-6" />

          {/* Author footer */}
          <div className="pt-6 flex items-center gap-3 lg:gap-5 self-stretch lg:pt-6 lg:border-none">
            <div className="relative h-[60px] w-[60px] lg:h-10 lg:w-10">
              <Image src={profileIcon} alt="Author" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal lg:text-xs lg:leading-[16px] lg:font-normal lg:opacity-60">
                Writer
              </span>
              <span className="text-white font-['Wix_Madefor_Display',_sans-serif] text-[20px] leading-[26px] font-medium lg:text-base lg:leading-[20px]">
                By {blog.author}
              </span>
            </div>
          </div>
        </article>

        {/* Right column / Suggestions */}
        <aside className="w-full lg:flex-1 mt-10 lg:mt-0">
          <div className="lg:sticky lg:top-6 space-y-5">
            {/* Search bar (desktop) */}
            <div className="hidden lg:block">
              <div className="relative w-full h-10 flex items-center gap-[24px] p-[13px] rounded-[500px] bg-white/20">
                <input
                  type="text"
                  placeholder="Search Blogs"
                  className="w-full h-full bg-transparent text-[14px] leading-[16px] font-['Wix_Madefor_Display',_sans-serif] font-medium text-[#D5D5D5] placeholder:text-[#D5D5D5] focus:outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-transparent p-4 lg:p-0 lg:bg-transparent lg:border-none lg:rounded-none">
              <p className="text-sm font-medium mb-3 lg:mb-0 lg:flex lg:items-center lg:justify-start lg:gap-[10px] lg:py-[20px] lg:pb-[9px] lg:self-stretch lg:flex-1 lg:text-white lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[24px] lg:leading-[32px] lg:font-medium">
                Related Blogs
              </p>
              {/* Desktop separator under Related Blogs */}
              <div className="hidden lg:block w-[245px] h-px bg-white" />

              <div className="space-y-4 lg:space-y-0 lg:flex lg:flex-col lg:items-start lg:px-4">
                {suggestions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`${basePrefix}/resource-center/${s.slug}`}
                    className="block group lg:flex lg:w-[245px] lg:flex-col lg:items-start lg:gap-[10px] lg:py-[16px]"
                  >
                    <div className="relative w-full h-36 rounded-md lg:rounded-none overflow-hidden border border-white/10 lg:h-[144px] lg:border-0">
                      <Image src={s.coverImage} alt="" fill className="object-cover" />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:h-[44px] lg:self-stretch">
                      <p className="text-sm font-medium group-hover:text-[#3eff51] transition line-clamp-2 lg:overflow-hidden lg:text-ellipsis lg:whitespace-nowrap lg:text-white lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[16px] lg:leading-[22px] lg:font-semibold">
                        {s.title}
                      </p>
                      <p className="text-xs text-white/70 mt-1 lg:text-white lg:font-['Wix_Madefor_Display',_sans-serif] lg:text-[14px] lg:leading-[16px] lg:font-medium">
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
      <section className="relative mt-12 flex lg:hidden w-[390px] px-6 pt-[60px] pb-[120px] flex-col items-center gap-[40px] mx-auto overflow-hidden">
        {/* Mobile-only CTA background image behind content */}
        <div className="pointer-events-none absolute inset-0 z-0 flex w-[390px] h-[700px] flex-col items-center -translate-y-[190px]">
          <div className="relative w-full h-full">
            <Image src="/assets/blog/blog-bgmo-2.png" alt="" fill className="object-cover object-[center_top]" priority />
          </div>
        </div>

        <h2 className="relative z-10 font-['Wix_Madefor_Display',_sans-serif] text-[32px] leading-[40px] font-medium text-center self-stretch">
          Protect your
          <span className="hidden sm:inline"> </span>
          <br className="block sm:hidden" />
          invaluable data here
        </h2>
        <div className="relative z-10 flex items-center justify-center gap-3">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] px-[18px] py-[14px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Free Consultation
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] px-[18px] py-[14px]
             border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Desktop CTA section */}
      <section className="hidden lg:flex relative w-[1440px] lg:h-[540px] mx-auto overflow-hidden">
        {/* Desktop CTA background image centered */}
        <div className="pointer-events-none absolute inset-0 z-0 flex w-[1440px] h-[540px] flex-col items-center lg:-translate-y-[170px]">
          <div className="relative w-full h-full">
            <Image src="/assets/blog/blog-bg3.png" alt="" fill className="object-cover object-[80%_top]" priority />
          </div>
        </div>

        {/* CTA content wrapper with layout */}
        <div className="relative z-10 w-full px-[120px] py-[64px] flex flex-col items-center gap-[40px]">
          <h2 className="font-['Wix_Madefor_Display',_sans-serif] text-3xl font-semibold text-center self-stretch text-white text-[56px] leading-[77px] font-semibold lg:whitespace-nowrap">
            Ready to strengthen your cybersecurity posture?
          </h2>
          <p className="text-white/80 text-center max-w-[640px] text-sm leading-7">
            Talk with our experts to understand your current risk exposure and plan the next steps for your organization&apos;s security.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] border border-white text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] px-[18px] py-[7px] hover:bg-white hover:text-[#000648] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-[10px] h-[36px] rounded-[41px] bg-[#3eff51] text-[#000000] font-['Wix_Madefor_Display',_sans-serif] font-semibold text-[16px] leading-[22px] px-[18px] py-[7px]
               border-2 border-transparent hover:bg-[#000000] hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
