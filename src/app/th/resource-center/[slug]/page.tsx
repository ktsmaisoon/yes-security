import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BlogDetail from "@/components/ui/BlogDetail";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return { title: "บล็อก | Yes Cybersecurity" };
  return {
    title: `${blog.title} | Yes Cybersecurity`,
    description: blog.excerpt,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return notFound();

  return (
    <>
      <Header />
      <BlogDetail blog={blog} basePrefix="/th" />
      <Footer />
    </>
  );
}
