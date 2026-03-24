import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Categories } from './collections/Categories'
import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { ContactPage } from './globals/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Thermigo CMS',
    },
  },
  editor: lexicalEditor(),
  collections: [Posts, Pages, Media, Users, Categories],
  globals: [SiteSettings, HomePage, ContactPage],
  db: sqliteAdapter({
    client: {
      url: 'file:./thermigo.db',
    },
  }),
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
})
