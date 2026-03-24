import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    limit: 1000,
    select: { slug: true, updatedAt: true },
  })

  const pages = await payload.find({
    collection: 'pages',
    where: { status: { equals: 'published' } },
    limit: 100,
    select: { slug: true, updatedAt: true },
  })

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.docs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt as string),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const pageRoutes: MetadataRoute.Sitemap = pages.docs.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page.updatedAt as string),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes, ...pageRoutes]
}
