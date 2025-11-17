import Image from 'next/image'

// Asset imports
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const blogCard1 = `${base}/assets/Our-blog/bd45a5562cc0c15de3bd76b2c151d8d13be16b47.png`
const blogCard2 = `${base}/assets/Our-blog/daf60d19c244d97cb75bbaa461bb6fea7d4d7aad.png`
const blogCard3 = `${base}/assets/Our-blog/d81a7a5fef5b16de78e91dad905785f41b73d3ea.png`

interface OurBlogProps {
  className?: string
}

const blogPosts = [
  {
    id: 1,
    title: "Securing the Future Trends & Threats in IT Security",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard1,
    link: "/blog/securing-future-trends-threats"
  },
  {
    id: 2,
    title: "Behind the Firewall Real World Cyber Defense Tactics",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard2,
    link: "/blog/behind-firewall-defense-tactics"
  },
  {
    id: 3,
    title: "Zero Trust, Full Control Modern Security Strategies",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris",
    image: blogCard3,
    link: "/blog/zero-trust-modern-strategies"
  }
]

export default function OurBlog({ className = "" }: OurBlogProps) {
  return (
    <section
      className={`full-bleed relative bg-black py-14 ${className}`}
      aria-label="Latest blog posts"
    >
      <div className="container-site lg:pt-[56px] lg:pb-[120px] flex justify-center lg:block">
        <div className="w-[390px] px-6 flex flex-col items-start gap-[40px] lg:w-full lg:px-0">
          {/* Header */}
          <div className="flex flex-row w-full items-center justify-between gap-4 lg:px-[120px]">
            <h2 className="text-white font-['Wix_Madefor_Display',_sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[58px] mb-0">
              Our Blog
            </h2>
            <button
              type="button"
              aria-label="View all blog posts"
              className="w-[97px] h-[36px] bg-[#3eff51] text-black font-['Wix_Madefor_Display',_sans-serif] font-semibold text-base rounded-[41px] flex items-center justify-center
               border-2 border-transparent hover:bg-black hover:text-[#3eff51] hover:border-[#3eff51] transition-colors duration-300 
               focus:outline-none focus:ring-2 focus:ring-[#3eff51] focus:ring-offset-2 focus:ring-offset-black"
            >
              View All
            </button>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 lg:px-[120px]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative rounded-xl overflow-hidden border border-[#1e3a8a]/40 hover:border-[#605B5B] transition-all duration-300 h-[335px] lg:w-[385px] w-full hover:shadow-lg hover:shadow-[#605B5B]/25 bg-transparent"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay: dim only bottom half, keep top bright */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/100 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1e3a8a]/10 to-[#20dbff]/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="space-y-4 lg:space-y-[30px]">
                    <div className="space-y-4 lg:space-y-[16px]">
                      {/* Card Title */}
                      <h3
                        className="text-white font-['Wix_Madefor_Display',_sans-serif] font-medium text-[24px] leading-[32px] self-stretch lg:h-[64px] lg:flex lg:flex-col lg:justify-center overflow-hidden text-ellipsis line-clamp-3 lg:line-clamp-2"
                      >
                        {post.title}
                      </h3>

                      {/* Card Excerpt */}
                      <p
                        className="text-white font-['Kumbh_Sans',_sans-serif] font-normal text-[16px] leading-[22px] self-stretch overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical" as const,
                          WebkitLineClamp: 2,
                        }}
                      >
                        {post.excerpt}
                      </p>
                    </div>

                    <a
                      href={post.link}
                      className="inline-flex items-center font-['Wix_Madefor_Display',_sans-serif] font-normal text-sm"
                      aria-label={`Read more about ${post.title}`}
                    >
                      <span className="relative text-gray-300 hover:text-[#3eff51] transition-colors duration-200 after:block after:h-[2px] after:w-0 after:bg-[#3eff51] after:mt-1 after:transition-all hover:after:w-full">
                        Read more&nbsp;&nbsp;&nbsp;→
                      </span>
                    </a>

                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}