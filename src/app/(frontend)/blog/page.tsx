import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Conseils, guides et actualités sur le chauffage, la climatisation et la plomberie par les experts Thermigo.',
  alternates: {
    canonical: '/blog',
  },
}

async function getPosts() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 20,
  })
  return posts.docs
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Conseils, guides et actualités pour vos projets thermiques.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-gray-500">Aucun article pour le moment. Revenez bientôt !</p>
      ) : (
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              {post.featuredImage && typeof post.featuredImage === 'object' && (
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.alt || post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                {post.publishedAt && (
                  <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                )}
                <h2 className="mt-2 text-xl font-bold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  Lire la suite &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Blog Thermigo',
            description: 'Conseils et actualités thermiques',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
          }),
        }}
      />
    </div>
  )
}
