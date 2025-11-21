import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BlogDetail from "@/components/ui/BlogDetail";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const bgDetailDesktop = `${base}/assets/resource-center/resource-center-bg7.png`;

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Blog | Yes Cybersecurity" };
  return {
    title: `${blog.title} | Yes Cybersecurity`,
    description: blog.excerpt,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return notFound();

  return (
    <>
      <Header />
      {/* Mobile: default layout without special background */}
      <main className="block lg:hidden bg-black text-white">
        <BlogDetail blog={blog} basePrefix="" />
      </main>

      {/* Desktop: full-page background wrapper */}
      <main className="hidden lg:flex justify-center bg-black text-white">
        <div
          className="flex flex-col items-center w-[1440px] min-h-screen pb-24"
          style={{
            backgroundImage: `url(${bgDetailDesktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <BlogDetail blog={blog} basePrefix="" />
        </div>
      </main>
      <Footer />
    </>
  );
}
