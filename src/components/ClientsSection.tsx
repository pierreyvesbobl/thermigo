'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const CARDS = [
  {
    icon: '/picto_copro.webp',
    label: 'Copropriétaires',
    title: 'Vous payez trop cher vos charges de chauffage',
    description:
      "Thermigo installe et pilote votre régulation thermique pour réduire vos charges collectives de 15 à 20%, sans impacter le confort de chaque résident.",
    cta: 'Je suis copropriétaire',
  },
  {
    icon: '/picto_syndic.webp',
    label: 'Conseils syndicaux',
    title: 'Vous cherchez à valoriser votre immeuble',
    description:
      "Pilotage centralisé, reporting mensuel, conformité réglementaire (décret tertiaire) — nous vous donnons les outils pour décider et convaincre.",
    cta: 'Je suis syndic / CS',
  },
  {
    icon: '/picto_tertiaire.webp',
    label: 'Tertiaire',
    title: 'Vos bâtiments consomment trop',
    description:
      "Bureaux, commerces, hôtels, établissements de santé : Thermigo déploie des solutions de gestion technique du bâtiment (GTB) adaptées à vos usages.",
    cta: 'Je gère du tertiaire',
  },
]

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const maxScroll = container.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / maxScroll))

      // 3 cartes : chaque carte occupe 1/3 de la progression
      // Carte i apparaît entre i/3 et (i+1)/3
      CARDS.forEach((_, i) => {
        const card = cardsRef.current[i]
        if (!card) return

        const start = i / CARDS.length
        const p = Math.max(0, Math.min(1, (progress - start) / (1 / CARDS.length)))

        // Entrée : glisse du bas + fade in
        const translateY = (1 - p) * 60
        const opacity = p

        // Effet pile : quand la carte suivante arrive, celle-ci recule légèrement
        const nextStart = (i + 1) / CARDS.length
        const nextP = Math.max(0, Math.min(1, (progress - nextStart) / (1 / CARDS.length)))
        const stackScale = 1 - nextP * 0.04 * (CARDS.length - 1 - i)
        const stackY = -nextP * 12 * (CARDS.length - 1 - i)

        card.style.transform = `translateY(${translateY + stackY}px) scale(${stackScale})`
        card.style.opacity = String(opacity)
        card.style.zIndex = String(i + 1)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full h-full py-16">

            {/* Gauche — cartes empilées */}
            <div className="flex flex-col justify-center">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Vous êtes…</h2>
                <p className="mt-3 text-lg text-gray-600">
                  Des solutions pensées pour les acteurs de l&apos;habitat collectif et du tertiaire.
                </p>
              </div>
              <div className="relative" style={{ height: '340px' }}>
                {CARDS.map((item, i) => (
                  <div
                    key={item.label}
                    ref={el => { cardsRef.current[i] = el }}
                    className="absolute inset-0 p-8 rounded-2xl border border-gray-200 bg-white shadow-md"
                    style={{
                      opacity: 0,
                      transform: 'translateY(60px)',
                      willChange: 'transform, opacity',
                      transformOrigin: 'top center',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt={item.label} className="w-24 h-24 object-contain" />
                    <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary-600">
                      {item.label}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite — building final + pin */}
            <div className="relative h-[80vh]" style={{ overflow: 'visible' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/building_end.webp"
                alt="Bâtiment Thermigo"
                className="absolute inset-0 w-full h-full object-contain object-center"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pin_icon_thermigo.webp"
                alt="Pin Thermigo"
                className="absolute"
                style={{
                  top: '-8%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
