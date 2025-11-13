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
  return (
    <main className="bg-black text-white">
      {/* Hero Section with background */}
      <section className="relative full-bleed">
        <div className="absolute inset-0">
          <Image src={blog.heroBg} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-site py-10 lg:py-16">
          <span className="inline-block text-xs tracking-wide uppercase bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">Blog</span>
          <h1 className="mt-4 font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-4xl">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex items-center gap-4 text-white/80 text-sm">
            <div className="relative h-8 w-8">
              <Image src={profileIcon} alt="Author" fill className="object-contain" />
            </div>
            <span>{blog.author}</span>
            <span className="opacity-60">•</span>
            <time dateTime={blog.date}>{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="opacity-60">•</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="container-site grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10">
        {/* Left column / Content */}
        <article className="lg:col-span-8">
          {/* Share box (mobile hidden) */}
          <div className="hidden md:flex items-center gap-3 text-sm text-white/80 mb-4">
            <span className="opacity-80">Share this article</span>
            <div className="flex items-center gap-3">
              {shareIcons.map((icon, idx) => (
                <a key={idx} href="#" className="relative h-6 w-6 opacity-80 hover:opacity-100 transition">
                  <Image src={icon} alt="share" fill className="object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/15 mb-6">
            <Image src={blog.coverImage} alt="" fill className="object-cover" />
          </div>

          {/* Rich content */}
          <div className="prose prose-invert max-w-none">
            {blog.content.map((block, i) => {
              if (block.type === 'h2') return (
                <h2 key={i} className="font-semibold text-2xl mt-8">{block.text}</h2>
              );
              if (block.type === 'p') return (
                <p key={i} className="text-white/85 leading-7 mt-4">{block.text}</p>
              );
              if (block.type === 'ul') return (
                <ul key={i} className="list-disc pl-6 mt-4 space-y-2">
                  {block.items?.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              );
              if (block.type === 'hr') return <hr key={i} className="my-8 border-white/10" />;
              return null;
            })}
          </div>

          {/* Author footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-white/80">
            <div className="relative h-9 w-9">
              <Image src={profileIcon} alt="Author" fill className="object-contain" />
            </div>
            <div>
              <p className="text-sm">By {blog.author}</p>
              <p className="text-xs opacity-70">Yes Cybersecurity</p>
            </div>
          </div>
        </article>

        {/* Right column / Suggestions */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-5">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-medium mb-3">Share this article</p>
              <div className="flex items-center gap-3">
                {shareIcons.map((icon, idx) => (
                  <a key={idx} href="#" className="relative h-8 w-8 opacity-80 hover:opacity-100 transition">
                    <Image src={icon} alt="share" fill className="object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="text-sm font-medium mb-3">You might also like</p>
              <div className="space-y-4">
                {suggestions.map((s) => (
                  <Link key={s.slug} href={`${basePrefix}/resource-center/${s.slug}`} className="flex items-center gap-3 group">
                    <div className="relative h-16 w-24 rounded-md overflow-hidden border border-white/10">
                      <Image src={s.coverImage} alt="" fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm group-hover:text-[#3eff51] transition line-clamp-2">{s.title}</p>
                      <p className="text-xs text-white/70 mt-1">{s.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
