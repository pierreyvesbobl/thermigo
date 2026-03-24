import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

async function getContactData() {
  const payload = await getPayload({ config })
  return payload.findGlobal({ slug: 'contact-page' }).catch(() => null)
}

export async function generateMetadata(): Promise<Metadata> {
  const contactPage = await getContactData()
  return {
    title: contactPage?.seo?.metaTitle || 'Contact',
    description:
      contactPage?.seo?.metaDescription ||
      'Contactez Thermigo pour un devis gratuit.',
    alternates: { canonical: '/contact' },
  }
}

export default async function ContactPage() {
  const contactPage = await getContactData()

  const title = contactPage?.title || 'Contactez-nous'
  const description =
    contactPage?.description ||
    'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'
  const serviceOptions = contactPage?.serviceOptions?.length
    ? contactPage.serviceOptions
    : [
        { label: 'Chauffage', value: 'chauffage' },
        { label: 'Climatisation', value: 'climatisation' },
        { label: 'Plomberie', value: 'plomberie' },
        { label: 'Ventilation', value: 'ventilation' },
        { label: 'Autre', value: 'autre' },
      ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg text-gray-600">{description}</p>

      <form className="mt-10 space-y-6" action="/api/contact" method="POST">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Sélectionnez un service</option>
            {serviceOptions.map((opt: any) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
        >
          Envoyer
        </button>
      </form>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Thermigo',
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
          }),
        }}
      />
    </div>
  )
}
