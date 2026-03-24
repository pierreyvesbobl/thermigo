import { getPayload } from 'payload'
import config from './payload.config'

const articles = [
  {
    title: 'Comment choisir sa chaudière : guide complet 2026',
    slug: 'comment-choisir-sa-chaudiere-guide-complet-2026',
    excerpt:
      'Gaz, fioul, bois, électrique ou pompe à chaleur ? Découvrez tous les critères pour choisir la chaudière la mieux adaptée à votre logement et votre budget.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les différents types de chaudières' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Le choix d\'une chaudière dépend de plusieurs facteurs : la surface de votre logement, votre budget, le type d\'énergie disponible et vos objectifs en matière de performance énergétique. En 2026, les solutions se sont considérablement diversifiées.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Chaudière à condensation' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La chaudière à condensation reste une valeur sûre. Elle récupère la chaleur des fumées de combustion pour préchauffer l\'eau de retour, offrant un rendement supérieur à 100%. Son coût d\'installation varie entre 3 000 et 7 000 euros.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Pompe à chaleur hybride' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La PAC hybride combine une pompe à chaleur air-eau et une chaudière à condensation. Elle bascule automatiquement vers la source d\'énergie la plus économique selon la température extérieure.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Notre recommandation' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Chez Thermigo, nous recommandons de faire réaliser un bilan thermique avant tout investissement. Contactez-nous pour un diagnostic gratuit et personnalisé.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Comment choisir sa chaudière en 2026 | Guide Thermigo',
      metaDescription: 'Guide complet pour choisir votre chaudière : gaz, fioul, bois, PAC hybride. Comparatif, prix et conseils par les experts Thermigo.',
    },
  },
  {
    title: 'Entretien chaudière : obligations et bonnes pratiques',
    slug: 'entretien-chaudiere-obligations-bonnes-pratiques',
    excerpt:
      'L\'entretien annuel de votre chaudière est obligatoire. Découvrez ce que comprend la visite, son coût et pourquoi il est essentiel pour votre sécurité.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Une obligation légale' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Depuis le décret du 9 juin 2009, l\'entretien annuel de toute chaudière d\'une puissance comprise entre 4 et 400 kW est obligatoire. Cette visite doit être réalisée par un professionnel qualifié qui délivrera une attestation d\'entretien.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Que comprend l\'entretien ?' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Le technicien vérifie le bon fonctionnement de la chaudière, nettoie le brûleur et le corps de chauffe, contrôle les dispositifs de sécurité et mesure le taux de monoxyde de carbone. Il optimise également les réglages pour améliorer le rendement.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les bénéfices d\'un entretien régulier' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Un entretien régulier permet de réduire votre consommation d\'énergie de 8 à 12%, de prolonger la durée de vie de votre équipement et de prévenir les pannes. C\'est aussi une garantie de sécurité pour votre foyer.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Entretien chaudière : obligations et conseils | Thermigo',
      metaDescription: 'Tout savoir sur l\'entretien obligatoire de votre chaudière. Fréquence, coût, contenu de la visite et conseils pratiques.',
    },
  },
  {
    title: 'Chaudière à condensation : fonctionnement et avantages',
    slug: 'chaudiere-a-condensation-fonctionnement-avantages',
    excerpt:
      'La chaudière à condensation offre un rendement exceptionnel en récupérant la chaleur des fumées. Découvrez son fonctionnement et ses avantages concrets.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Le principe de la condensation' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Contrairement à une chaudière classique qui évacue les fumées à haute température, la chaudière à condensation récupère la chaleur latente contenue dans la vapeur d\'eau des gaz de combustion. Cette énergie supplémentaire est utilisée pour préchauffer l\'eau de retour du circuit de chauffage.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Un rendement supérieur à 100%' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Grâce à la récupération de chaleur latente, le rendement sur PCI (Pouvoir Calorifique Inférieur) peut dépasser 100%, atteignant couramment 108 à 110%. Cela se traduit par une économie de 15 à 30% sur votre facture de gaz par rapport à une chaudière classique.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Installation et raccordement' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La chaudière à condensation nécessite une évacuation des condensats vers le réseau d\'eaux usées. Un tubage en matériau résistant à l\'acidité est également requis pour le conduit de fumée. Nos techniciens Thermigo assurent une installation conforme aux normes.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Chaudière à condensation : fonctionnement et avantages | Thermigo',
      metaDescription: 'Découvrez comment fonctionne une chaudière à condensation, ses avantages en rendement énergétique et les économies réalisables.',
    },
  },
  {
    title: 'Remplacement de chaudière : quand et pourquoi changer ?',
    slug: 'remplacement-chaudiere-quand-pourquoi-changer',
    excerpt:
      'Votre chaudière a plus de 15 ans ? Pannes fréquentes, hausse de consommation... Découvrez les signes qui indiquent qu\'il est temps de la remplacer.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les signes qui ne trompent pas' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Plusieurs indicateurs doivent vous alerter : des pannes de plus en plus fréquentes, une augmentation inexpliquée de votre facture énergétique, des bruits inhabituels, une eau chaude qui met du temps à arriver ou des radiateurs qui chauffent de manière inégale.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'La durée de vie d\'une chaudière' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'En moyenne, une chaudière a une durée de vie de 15 à 25 ans selon le type et l\'entretien. Au-delà de 15 ans, les performances se dégradent significativement et les pièces détachées deviennent difficiles à trouver.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les aides financières disponibles' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Le remplacement d\'une ancienne chaudière par un modèle performant peut bénéficier de nombreuses aides : MaPrimeRénov\', CEE, éco-PTZ, TVA réduite. Thermigo vous accompagne dans toutes vos démarches administratives.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Quand remplacer sa chaudière ? Signes et conseils | Thermigo',
      metaDescription: 'Découvrez les signes qui indiquent qu\'il est temps de remplacer votre chaudière et les aides financières disponibles.',
    },
  },
  {
    title: 'Chaudière gaz vs pompe à chaleur : le comparatif',
    slug: 'chaudiere-gaz-vs-pompe-a-chaleur-comparatif',
    excerpt:
      'Chaudière gaz ou pompe à chaleur ? Comparatif détaillé des deux solutions pour vous aider à faire le meilleur choix selon votre situation.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Deux philosophies différentes' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La chaudière gaz brûle du combustible pour produire de la chaleur, tandis que la pompe à chaleur (PAC) puise les calories dans l\'air extérieur ou le sol. Chaque technologie a ses forces et ses limites selon le contexte.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Coût d\'installation' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Une chaudière gaz à condensation coûte entre 3 000 et 6 000 € installée. Une PAC air-eau revient entre 8 000 et 15 000 €. Cependant, les aides financières pour la PAC sont plus généreuses et peuvent réduire significativement l\'écart.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Coût d\'utilisation' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La PAC consomme environ 3 fois moins d\'énergie qu\'une chaudière gaz grâce à son COP (coefficient de performance). Cependant, le prix du kWh électrique étant plus élevé que celui du gaz, l\'économie réelle se situe entre 30 et 50% selon les régions et les hivers.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Chaudière gaz vs pompe à chaleur : comparatif 2026 | Thermigo',
      metaDescription: 'Comparatif complet chaudière gaz et pompe à chaleur : coût, performance, aides. Quel est le meilleur choix pour votre logement ?',
    },
  },
  {
    title: 'Chaudière bois et granulés : une alternative écologique',
    slug: 'chaudiere-bois-granules-alternative-ecologique',
    excerpt:
      'Le chauffage au bois et aux granulés séduit de plus en plus de foyers. Performance, écologie et économies : tout ce qu\'il faut savoir.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Le bois, énergie renouvelable' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Le bois est considéré comme une énergie renouvelable et neutre en carbone, à condition que les forêts soient gérées durablement. C\'est aussi l\'énergie de chauffage la moins chère du marché, avec un coût au kWh inférieur au gaz et à l\'électricité.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Chaudière à granulés : le confort automatique' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La chaudière à granulés (ou pellets) offre un confort comparable à une chaudière gaz : alimentation automatique depuis un silo, régulation précise de la température et entretien simplifié. Son rendement atteint 90 à 95%.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Installation et stockage' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'L\'installation nécessite un espace de stockage pour le silo à granulés (environ 3 à 4 m²) et un conduit de cheminée conforme. Thermigo réalise l\'étude de faisabilité et l\'installation complète de votre système.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Chaudière bois et granulés : guide complet | Thermigo',
      metaDescription: 'Tout savoir sur la chaudière à bois et granulés : fonctionnement, avantages écologiques, coûts et aides financières.',
    },
  },
  {
    title: 'Panne de chaudière : diagnostic et solutions rapides',
    slug: 'panne-chaudiere-diagnostic-solutions-rapides',
    excerpt:
      'Votre chaudière tombe en panne ? Découvrez les pannes les plus courantes, comment les diagnostiquer et quand faire appel à un professionnel.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les pannes les plus fréquentes' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Les pannes de chaudière les plus courantes sont : la perte de pression du circuit (vérifiez le manomètre, il doit être entre 1 et 1,5 bar), le défaut d\'allumage (souvent lié à l\'électrode d\'allumage ou à l\'arrivée de gaz), et le problème de circulation d\'eau (pompe ou vanne 3 voies défectueuse).' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les vérifications à faire soi-même' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Avant d\'appeler un technicien, vérifiez : l\'alimentation électrique (disjoncteur), la pression du circuit de chauffage, le thermostat d\'ambiance (piles, réglages), et l\'arrivée de gaz (robinet ouvert). Un simple reset de la chaudière résout parfois le problème.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Quand appeler un professionnel ?' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Si les vérifications de base ne résolvent pas le problème, faites appel à un chauffagiste qualifié. N\'intervenez jamais sur le circuit de gaz ou les organes de sécurité. Thermigo assure un dépannage rapide, y compris en urgence.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Panne de chaudière : diagnostic et dépannage | Thermigo',
      metaDescription: 'Chaudière en panne ? Diagnostic des pannes courantes, vérifications à faire et solutions rapides par les experts Thermigo.',
    },
  },
  {
    title: 'Réglementation chaudières 2026 : ce qui change',
    slug: 'reglementation-chaudieres-2026-ce-qui-change',
    excerpt:
      'Nouvelles normes, interdictions, aides renforcées... Faites le point sur la réglementation en vigueur pour les chaudières en 2026.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'L\'interdiction progressive du fioul' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Depuis juillet 2022, l\'installation de chaudières au fioul neuves est interdite dans les logements neufs et en remplacement. Des dérogations existent lorsqu\'aucune alternative n\'est techniquement possible. Les chaudières fioul existantes peuvent continuer à fonctionner et être entretenues.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les nouvelles exigences RE2020' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La RE2020 impose des seuils stricts d\'émissions de CO2 pour les constructions neuves, favorisant les pompes à chaleur, le bois énergie et les réseaux de chaleur. Les chaudières gaz seules ne permettent plus de respecter ces seuils dans le neuf.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les aides renforcées en 2026' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'MaPrimeRénov\' a été revalorisée pour encourager le remplacement des chaudières fossiles. Les montants peuvent atteindre 5 000 € pour une PAC et 7 000 € pour un système solaire combiné, selon les revenus du foyer.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Réglementation chaudières 2026 : nouvelles normes | Thermigo',
      metaDescription: 'Réglementation chaudières 2026 : interdiction du fioul, RE2020, aides MaPrimeRénov\'. Le point complet par Thermigo.',
    },
  },
  {
    title: 'Thermostat connecté et chaudière : optimisez votre chauffage',
    slug: 'thermostat-connecte-chaudiere-optimisez-chauffage',
    excerpt:
      'Un thermostat connecté peut réduire votre facture de chauffage de 15 à 25%. Découvrez comment l\'associer à votre chaudière pour un confort optimal.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Pourquoi passer au thermostat connecté ?' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Le thermostat connecté apprend vos habitudes et adapte le chauffage en temps réel. Il tient compte de la météo, de l\'isolation de votre logement et de votre présence pour optimiser le confort tout en réduisant la consommation.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Compatibilité avec votre chaudière' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'La plupart des thermostats connectés (Nest, Netatmo, Tado°) sont compatibles avec les chaudières récentes via le protocole OpenTherm ou un contact sec. Pour les chaudières plus anciennes, un relais peut être nécessaire.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Installation par Thermigo' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Nos techniciens installent et configurent votre thermostat connecté pour une communication optimale avec votre chaudière. Nous paramétrons les plages horaires, la géolocalisation et les scénarios de chauffe selon vos besoins.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Thermostat connecté et chaudière : guide pratique | Thermigo',
      metaDescription: 'Comment associer un thermostat connecté à votre chaudière pour économiser 15 à 25% sur votre facture de chauffage.',
    },
  },
  {
    title: 'Désembouage chaudière : pourquoi et comment le faire',
    slug: 'desembouage-chaudiere-pourquoi-comment',
    excerpt:
      'Le désembouage élimine les boues accumulées dans votre circuit de chauffage. Une opération essentielle pour retrouver des performances optimales.',
    content: {
      root: {
        type: 'root',
        children: [
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Qu\'est-ce que l\'embouage ?' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Avec le temps, des boues se forment dans le circuit de chauffage par corrosion des éléments métalliques et dépôts de calcaire. Ces boues réduisent la circulation de l\'eau, diminuent les performances de la chaudière et peuvent provoquer des bruits et des pannes.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Les symptômes d\'un circuit emboué' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Radiateurs froids en bas et chauds en haut, bruits de circulation, surconsommation d\'énergie, eau noirâtre lors de la purge des radiateurs... Si vous constatez ces signes, un désembouage s\'impose.' }] },
          { type: 'heading', tag: 'h2', children: [{ type: 'text', text: 'Le désembouage professionnel' }] },
          { type: 'paragraph', children: [{ type: 'text', text: 'Thermigo réalise le désembouage par injection d\'un produit de nettoyage, puis rinçage haute pression de l\'ensemble du circuit. Un inhibiteur de corrosion est ensuite ajouté pour protéger l\'installation durablement. Comptez entre 500 et 1 000 € selon la taille de l\'installation.' }] },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
    seo: {
      metaTitle: 'Désembouage chaudière : guide complet | Thermigo',
      metaDescription: 'Tout savoir sur le désembouage de chaudière : symptômes, techniques, coût. Retrouvez des performances optimales avec Thermigo.',
    },
  },
]

async function seed() {
  const payload = await getPayload({ config })

  // Create category
  let category: any
  try {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: 'chaudieres' } },
    })
    if (existing.docs.length > 0) {
      category = existing.docs[0]
      console.log('Category "Chaudières" already exists')
    } else {
      category = await payload.create({
        collection: 'categories',
        data: {
          name: 'Chaudières',
          slug: 'chaudieres',
          description: 'Articles sur les chaudières : choix, entretien, réglementation et conseils.',
        },
      })
      console.log('Created category "Chaudières"')
    }
  } catch (e) {
    console.error('Error creating category:', e)
    return
  }

  // Create posts
  for (const article of articles) {
    try {
      const existing = await payload.find({
        collection: 'posts',
        where: { slug: { equals: article.slug } },
      })
      if (existing.docs.length > 0) {
        console.log(`Skipping "${article.title}" (already exists)`)
        continue
      }

      await payload.create({
        collection: 'posts',
        data: {
          ...article,
          status: 'published',
          publishedAt: new Date(
            Date.now() - articles.indexOf(article) * 3 * 24 * 60 * 60 * 1000
          ).toISOString(),
          category: category.id,
        },
      })
      console.log(`Created: ${article.title}`)
    } catch (e: any) {
      console.error(`Error creating "${article.title}":`, e.message)
    }
  }

  console.log('\nDone! 10 articles created.')
  process.exit(0)
}

seed()
