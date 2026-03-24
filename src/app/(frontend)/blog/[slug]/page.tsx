import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@/components/RichText'

type Props = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })
  return posts.docs[0] || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt || undefined,
      ...(post.seo?.ogImage &&
        typeof post.seo.ogImage === 'object' && {
          images: [{ url: post.seo.ogImage.url! }],
        }),
    },
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    limit: 100,
    select: { slug: true },
  })
  return posts.docs.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary-600">
              Accueil
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-primary-600">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium truncate">{post.title}</li>
        </ol>
      </nav>

      <header>
        {post.publishedAt && (
          <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
        <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-xl text-gray-600">{post.excerpt}</p>}
      </header>

      {post.featuredImage && typeof post.featuredImage === 'object' && (
        <img
          src={post.featuredImage.url!}
          alt={post.featuredImage.alt || post.title}
          className="mt-8 w-full rounded-2xl object-cover max-h-[500px]"
        />
      )}

      <div className="mt-10 prose prose-lg prose-gray max-w-none">
        <RichText content={post.content} />
      </div>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            publisher: {
              '@type': 'Organization',
              name: 'Thermigo',
              url: process.env.NEXT_PUBLIC_SITE_URL,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
            },
          }),
        }}
      />
    </article>
  )
}
