import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@/components/RichText'

type Props = {
  params: Promise<{ slug: string }>
}

async function getPage(slug: string) {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })
  return pages.docs[0] || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) return {}

  const title = page.seo?.metaTitle || page.title
  const description = page.seo?.metaDescription || undefined

  return {
    title,
    description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title,
      description,
      ...(page.seo?.ogImage &&
        typeof page.seo.ogImage === 'object' && {
          images: [{ url: page.seo.ogImage.url! }],
        }),
    },
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    where: { status: { equals: 'published' } },
    limit: 100,
    select: { slug: true },
  })
  return pages.docs.map((page) => ({ slug: page.slug }))
}

export default async function CMSPage({ params }: Props) {
  const { slug } = await params
  const page = await getPage(slug)
  if (!page) notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold">{page.title}</h1>
      {page.content && (
        <div className="mt-10 prose prose-lg prose-gray max-w-none">
          <RichText content={page.content} />
        </div>
      )}
    </div>
  )
}
