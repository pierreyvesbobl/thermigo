import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'
import { EconomiesEstimateur } from '@/components/EconomiesEstimateur'
import { HeroSection } from '@/components/HeroSection'

async function getHomeData() {
  const payload = await getPayload({ config })
  const homePage = await payload.findGlobal({ slug: 'home-page' }).catch(() => null)
  return { homePage }
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const homePage = await payload.findGlobal({ slug: 'home-page' }).catch(() => null)
  return {
    title: homePage?.seo?.metaTitle || "Thermigo — Régulation thermique pour copropriétés et tertiaire",
    description:
      homePage?.seo?.metaDescription ||
      "Thermigo optimise la consommation énergétique des copropriétés et du secteur tertiaire. Jusqu'à 20% d'économies sur votre facture de chauffage.",
  }
}

export default async function HomePage() {
  await getHomeData()

  return (
    <>
      {/* ── HERO ── */}
      <HeroSection />


      {/* ── ESTIMATEUR D'ÉCONOMIES ── */}
      <section id="estimateur" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Outil gratuit
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Estimez vos économies en 30 secondes</h2>
            <p className="mt-4 text-gray-600">
              Renseignez quelques informations sur votre bâtiment et découvrez votre potentiel d&apos;économies annuel.
            </p>
          </div>
          <EconomiesEstimateur />
        </div>
      </section>

      {/* ── NOS OFFRES PACKAGÉES ── */}
      <section id="offres" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Nos offres packagées</h2>
            <p className="mt-4 text-gray-600">
              Des formules claires pour chaque besoin, sans surprise sur la facturation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essentiel',
                tagline: 'Pour démarrer',
                price: 'Sur devis',
                borderColor: 'border-gray-200',
                features: [
                  'Audit énergétique initial',
                  'Pose de robinets thermostatiques',
                  'Équilibrage hydraulique',
                  'Mise en service & formation',
                  'Support téléphonique 5j/7',
                ],
                highlight: false,
              },
              {
                name: 'Performance',
                tagline: 'Le plus choisi',
                price: 'Sur devis',
                borderColor: 'border-primary-500',
                features: [
                  "Tout l'Essentiel +",
                  'GTB & supervision en temps réel',
                  'Application mobile dédiée',
                  'Reporting mensuel automatisé',
                  'Maintenance préventive annuelle',
                  'Astreinte 7j/7',
                ],
                highlight: true,
              },
              {
                name: 'Premium',
                tagline: 'Zéro contrainte',
                price: 'Sur devis',
                borderColor: 'border-gray-200',
                features: [
                  'Tout Performance +',
                  'Comptage individuel par lot',
                  'Garantie résultat sur les économies',
                  'Interlocuteur dédié',
                  'Conformité décret tertiaire incluse',
                  'Engagement pluriannuel',
                ],
                highlight: false,
              },
            ].map((offer) => (
              <div
                key={offer.name}
                className={`relative rounded-2xl border-2 ${offer.borderColor} bg-white p-8 flex flex-col ${offer.highlight ? 'shadow-xl' : ''}`}
              >
                {offer.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{offer.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{offer.tagline}</p>
                  <p className="mt-4 text-2xl font-bold text-primary-600">{offer.price}</p>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {offer.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block text-center py-3 rounded-lg font-semibold text-sm transition ${
                    offer.highlight
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border border-primary-600 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAS PRATIQUES ── */}
      <section id="cas-pratiques" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Cas pratiques</h2>
            <p className="mt-4 text-gray-600">
              Des résultats concrets, vérifiables sur des projets réels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cas copropriété */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-6">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Copropriété
                </span>
                <h3 className="text-xl font-bold text-white">Résidence Les Pins — 78 lots, Paris 13e</h3>
                <p className="text-primary-100 text-sm mt-1">Chaudière gaz · Radiateurs hydrauliques · 1980</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Immeuble des années 80 avec une chaudière collective non régulée. Les résidents se
                  plaignaient de surchauffe en inter-saison et de charges en constante augmentation.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Économies', value: '17%', sub: 'sur la facture gaz' },
                    { label: 'Gain annuel', value: '11 400 €', sub: 'pour la copro' },
                    { label: 'ROI', value: '2,5 ans', sub: 'retour sur invest.' },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-primary-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-primary-700">{s.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-primary-200 pl-4 text-sm text-gray-600 italic">
                  &ldquo;En deux ans, nos charges de chauffage ont baissé de près de 150€ par lot.
                  Le conseil syndical est ravi.&rdquo;
                  <footer className="mt-1 text-xs text-gray-400 not-italic">— Président du CS, Résidence Les Pins</footer>
                </blockquote>
              </div>
            </div>

            {/* Cas tertiaire */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-6">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Tertiaire
                </span>
                <h3 className="text-xl font-bold text-white">Siège social — 4 200 m², Lyon Part-Dieu</h3>
                <p className="text-gray-300 text-sm mt-1">Chauffage urbain · Plancher chauffant · 2005</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Immeuble de bureaux soumis au décret tertiaire (objectif -40% à horizon 2030).
                  Le gestionnaire cherchait une solution clé en main pour atteindre ses obligations réglementaires.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Économies', value: '21%', sub: "sur l'énergie thermique" },
                    { label: 'Gain annuel', value: '28 000 €', sub: 'sur la facture' },
                    { label: 'OPERAT', value: '✓', sub: 'décret tertiaire' },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-gray-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-gray-700">{s.value}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-4 border-gray-200 pl-4 text-sm text-gray-600 italic">
                  &ldquo;Thermigo nous a permis de cocher toutes les cases du décret tertiaire
                  dès la première année, sans travaux structurels.&rdquo;
                  <footer className="mt-1 text-xs text-gray-400 not-italic">— Directeur immobilier, groupe industriel</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ILS NOUS FONT CONFIANCE ── */}
      <section id="references" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Ils nous font confiance</h2>
            <p className="mt-4 text-gray-600">
              Syndics, gestionnaires, promoteurs et collectivités nous confient leurs bâtiments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                quote: "Une équipe réactive, des résultats au rendez-vous. On a renouvelé le contrat sans hésiter.",
                name: "Marie D.",
                role: "Syndic bénévole, 120 lots — Bordeaux",
                initial: "M",
              },
              {
                quote: "Le tableau de bord nous permet enfin de comprendre ce qu'on consomme et d'agir. C'est un vrai changement.",
                name: "Thomas L.",
                role: "Facility Manager — Paris",
                initial: "T",
              },
              {
                quote: "Mise en place en 3 jours, sans couper le chauffage. Les résidents n'ont rien vu, mais les charges ont baissé.",
                name: "Sophie R.",
                role: "Gestionnaire de copropriété — Lyon",
                initial: "S",
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-0.5 text-primary-400 mb-4">
                  {[1,2,3,4,5].map((i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-700 font-bold text-sm flex items-center justify-center shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-12">
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-8">Quelques-uns de nos clients</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {['Syndic A', 'Groupe B', 'Ville C', 'Résidence D', 'Foncière E', 'Cabinet F'].map((name) => (
                <div
                  key={name}
                  className="h-10 px-6 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-400"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Prêt à réduire vos charges énergétiques ?</h2>
          <p className="mt-4 text-xl text-primary-100">
            Audit gratuit · Devis sous 48h · Sans engagement
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition"
            >
              Demander un audit gratuit
            </Link>
            <a
              href="#estimateur"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              Estimer mes économies
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Thermigo',
            description: 'Régulation thermique intelligente pour copropriétés et bâtiments tertiaires.',
            url: process.env.NEXT_PUBLIC_SITE_URL,
          }),
        }}
      />
    </>
  )
}
