import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Page d\'accueil',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Section Hero',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Solutions thermiques',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Titre coloré (2e ligne)',
          defaultValue: 'professionnelles',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Chauffage, climatisation, ventilation et plomberie. Thermigo accompagne les particuliers et professionnels dans tous leurs projets thermiques.',
        },
        {
          name: 'ctaPrimary',
          type: 'group',
          label: 'Bouton principal',
          fields: [
            { name: 'label', type: 'text', defaultValue: 'Demander un devis' },
            { name: 'link', type: 'text', defaultValue: '/contact' },
          ],
        },
        {
          name: 'ctaSecondary',
          type: 'group',
          label: 'Bouton secondaire',
          fields: [
            { name: 'label', type: 'text', defaultValue: 'Nos conseils' },
            { name: 'link', type: 'text', defaultValue: '/blog' },
          ],
        },
      ],
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 6,
      defaultValue: [
        {
          title: 'Chauffage',
          description: 'Installation et entretien de systèmes de chauffage performants : pompes à chaleur, chaudières, planchers chauffants.',
          icon: '🔥',
        },
        {
          title: 'Climatisation',
          description: 'Solutions de climatisation réversible pour un confort optimal toute l\'année, économes en énergie.',
          icon: '❄️',
        },
        {
          title: 'Plomberie',
          description: 'Travaux de plomberie, installation sanitaire et dépannage rapide par nos techniciens qualifiés.',
          icon: '🔧',
        },
      ],
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'link', type: 'text', admin: { description: 'Lien optionnel (ex: /services/chauffage)' } },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Section CTA (bas de page)',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Un projet ? Contactez-nous',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Notre équipe est à votre écoute pour étudier votre projet et vous proposer la solution la plus adaptée.',
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: 'Nous contacter',
        },
        {
          name: 'buttonLink',
          type: 'text',
          defaultValue: '/contact',
        },
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
          defaultValue: 'Thermigo — Solutions thermiques professionnelles',
          maxLength: 70,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          defaultValue:
            'Thermigo, votre expert en solutions thermiques. Chauffage, climatisation, ventilation et plomberie pour particuliers et professionnels.',
          maxLength: 160,
        },
      ],
    },
  ],
}
