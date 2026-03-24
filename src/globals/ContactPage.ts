import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: 'Page Contact',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Contactez-nous',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.',
    },
    {
      name: 'serviceOptions',
      type: 'array',
      label: 'Options de services (menu déroulant)',
      defaultValue: [
        { label: 'Chauffage', value: 'chauffage' },
        { label: 'Climatisation', value: 'climatisation' },
        { label: 'Plomberie', value: 'plomberie' },
        { label: 'Ventilation', value: 'ventilation' },
        { label: 'Autre', value: 'autre' },
      ],
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          defaultValue: 'Contact | Thermigo',
          maxLength: 70,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          defaultValue:
            'Contactez Thermigo pour un devis gratuit. Chauffage, climatisation, ventilation et plomberie.',
          maxLength: 160,
        },
      ],
    },
  ],
}
