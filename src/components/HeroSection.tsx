'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface PathData {
  el: SVGPathElement
  length: number
  bottomY: number
}

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

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgContainerRef = useRef<HTMLDivElement>(null)
  const buildingEndRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLImageElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)
  const clientsPanelRef = useRef<HTMLDivElement>(null)
  const cardItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const pathDataRef = useRef<PathData[]>([])

  // Mobile refs
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const mobileSvgContainerRef = useRef<HTMLDivElement>(null)
  const mobileBuildingEndRef = useRef<HTMLDivElement>(null)
  const mobilePinRef = useRef<HTMLImageElement>(null)
  const mobilePathDataRef = useRef<PathData[]>([])

  // Mobile building animation
  useEffect(() => {
    const container = mobileContainerRef.current
    const svgContainer = mobileSvgContainerRef.current
    const buildingEnd = mobileBuildingEndRef.current
    const pin = mobilePinRef.current
    if (!container || !svgContainer || !buildingEnd || !pin) return

    const feather = 12

    fetch('/building_pipes.svg')
      .then(r => r.text())
      .then(svgText => {
        const hiddenSvg = svgText.replace(
          '</defs>',
          `<style>#Layer_4 path { stroke-dasharray: 9999; stroke-dashoffset: 9999; }</style></defs>`
        )
        svgContainer.innerHTML = hiddenSvg
        const svg = svgContainer.querySelector('svg')
        if (!svg) return

        svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'
        svgContainer.style.opacity = '1'

        const layer4 = svg.querySelector('#Layer_4')
        if (!layer4) return

        const paths = Array.from(layer4.querySelectorAll<SVGPathElement>('path'))

        mobilePathDataRef.current = paths
          .map(path => {
            const length = path.getTotalLength()
            const bbox = path.getBBox()
            path.style.strokeDasharray = String(length)
            path.style.strokeDashoffset = String(length)
            return { el: path, length, bottomY: bbox.y + bbox.height }
          })
          .sort((a, b) => b.bottomY - a.bottomY)

        handleMobileScroll()
      })

    const handleMobileScroll = () => {
      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight
      // progress: 0 quand le haut de la section atteint le bas du viewport,
      // 1 quand le bas de la section atteint le haut du viewport
      const totalTravel = rect.height + vh
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel))

      // Phase 1 (0 → 0.5) : tracé des tuyaux
      const phase1 = Math.min(1, progress / 0.5)
      const paths = mobilePathDataRef.current
      const n = paths.length
      paths.forEach(({ el, length }, i) => {
        const stagger = n > 1 ? (i / (n - 1)) * 0.6 : 0
        const p = Math.max(0, Math.min(1, (phase1 - stagger) / 0.4))
        el.style.strokeDashoffset = String(length * (1 - p))
      })

      // Phase 2 (0.3 → 0.7) : building_end masque
      const phase2 = Math.max(0, Math.min(1, (progress - 0.3) / 0.4))
      const p2 = phase2 * 110
      const mask = `linear-gradient(to bottom, black ${p2 - feather}%, transparent ${p2}%)`
      buildingEnd.style.maskImage = mask
      buildingEnd.style.webkitMaskImage = mask

      // Phase 3 (0.65 → 0.8) : pin apparaît
      pin.style.opacity = String(Math.max(0, Math.min(1, (progress - 0.65) / 0.15)))
    }

    window.addEventListener('scroll', handleMobileScroll, { passive: true })
    handleMobileScroll()
    return () => window.removeEventListener('scroll', handleMobileScroll)
  }, [])

  // Desktop building animation
  useEffect(() => {
    const container = containerRef.current
    const svgContainer = svgContainerRef.current
    const buildingEnd = buildingEndRef.current
    const pin = pinRef.current
    const heroText = heroTextRef.current
    const clientsPanel = clientsPanelRef.current
    if (!container || !svgContainer || !buildingEnd || !pin || !heroText || !clientsPanel) return
    const cardItems = cardItemsRef.current

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    const feather = 12

    fetch('/building_pipes.svg')
      .then(r => r.text())
      .then(svgText => {
        const hiddenSvg = svgText.replace(
          '</defs>',
          `<style>#Layer_4 path { stroke-dasharray: 9999; stroke-dashoffset: 9999; }</style></defs>`
        )
        svgContainer.innerHTML = hiddenSvg
        const svg = svgContainer.querySelector('svg')
        if (!svg) return

        svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%'
        svgContainer.style.opacity = '1'

        const layer4 = svg.querySelector('#Layer_4')
        if (!layer4) return

        const paths = Array.from(layer4.querySelectorAll<SVGPathElement>('path'))

        pathDataRef.current = paths
          .map(path => {
            const length = path.getTotalLength()
            const bbox = path.getBBox()
            path.style.strokeDasharray = String(length)
            path.style.strokeDashoffset = String(length)
            return { el: path, length, bottomY: bbox.y + bbox.height }
          })
          .sort((a, b) => b.bottomY - a.bottomY)

        handleScroll()
      })

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const maxScroll = container.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / maxScroll))

      // Phase 1 (0 → 0.33) : tracé des tuyaux
      const phase1 = Math.min(1, progress / 0.33)
      const paths = pathDataRef.current
      const n = paths.length
      paths.forEach(({ el, length }, i) => {
        const stagger = n > 1 ? (i / (n - 1)) * 0.6 : 0
        const p = Math.max(0, Math.min(1, (phase1 - stagger) / 0.4))
        el.style.strokeDashoffset = String(length * (1 - p))
      })

      // Phase 2 (0.33 → 0.70) : building_end masque
      const phase2 = Math.max(0, Math.min(1, (progress - 0.33) / 0.37))
      const p2 = phase2 * 110
      const mask = `linear-gradient(to bottom, black ${p2 - feather}%, transparent ${p2}%)`
      buildingEnd.style.maskImage = mask
      buildingEnd.style.webkitMaskImage = mask

      // Phase 3 (0.65 → 0.75) : pin apparaît
      pin.style.opacity = String(Math.max(0, Math.min(1, (progress - 0.65) / 0.10)))

      // Transition hero → clients (0.45 → 0.55)
      const t = Math.max(0, Math.min(1, (progress - 0.45) / 0.1))
      heroText.style.transform = `translateY(${-t * 100}%)`
      heroText.style.opacity = String(1 - t)
      heroText.style.pointerEvents = t < 1 ? 'auto' : 'none'
      clientsPanel.style.transform = `translateY(${(1 - t) * 100}%)`
      clientsPanel.style.opacity = String(t)
      clientsPanel.style.pointerEvents = t > 0 ? 'auto' : 'none'

      // Cartes apparaissent une à une (0.76 → 1.0, ~0.08 chacune)
      cardItems.forEach((card, i) => {
        if (!card) return
        const start = 0.76 + i * 0.08
        const p = Math.max(0, Math.min(1, (progress - start) / 0.06))
        card.style.opacity = String(p)
        card.style.transform = `translateY(${(1 - p) * 20}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ══════════ MOBILE (< lg) : sections empilées statiques ══════════ */}
      <div className="lg:hidden">
        {/* Hero */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="inline-block bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary-100">
              Régulation thermique intelligente
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              {"Jusqu'à 20%"}<br />
              <span className="text-primary-600">{"d'économies"}</span><br />
              sur votre chauffage
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl">
              Thermigo accompagne copropriétés et gestionnaires tertiaires dans l&apos;optimisation
              de leur consommation énergétique — sans travaux lourds.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#estimateur"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
              >
                Estimer mes économies
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Demander un audit gratuit
              </Link>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Vous êtes…</h2>
            <div className="flex flex-col gap-3">
              {CARDS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="flex items-center gap-4 px-5 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                  </div>
                  <div className="px-5 pb-4">
                    <h3 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center text-xs font-semibold text-primary-600 hover:text-primary-700 transition"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Building (animé au scroll sur mobile) */}
        <section
          ref={mobileContainerRef}
          className="relative bg-white"
          style={{ height: '80vh' }}
        >
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/building_start.webp"
              alt="Bâtiment — structure intérieure"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div
            ref={mobileSvgContainerRef}
            className="absolute inset-0"
          />

          <div
            ref={mobileBuildingEndRef}
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black -12%, transparent 0%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black -12%, transparent 0%)',
              willChange: 'mask-image',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/building_end.webp"
              alt="Bâtiment — façade extérieure"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={mobilePinRef}
            src="/pin_icon_thermigo.webp"
            alt="Pin Thermigo"
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: '20px', width: '70px', opacity: 0, willChange: 'opacity' }}
          />
        </section>
      </div>

      {/* ══════════ DESKTOP (lg+) : scroll-driven animation ══════════ */}
      <div ref={containerRef} className="relative hidden lg:block" style={{ height: '500vh' }}>
        <div className="sticky top-0 h-screen bg-white" style={{ overflow: 'visible' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

              {/* ── Gauche ── */}
              <div className="relative overflow-hidden" style={{ height: '520px' }}>

                {/* Hero text — glisse vers le haut */}
                <div
                  ref={heroTextRef}
                  className="absolute inset-x-0 top-0"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <span className="inline-block bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary-100">
                    Régulation thermique intelligente
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                    {"Jusqu'à 20%"}<br />
                    <span className="text-primary-600">{"d'économies"}</span><br />
                    sur votre chauffage
                  </h1>
                  <p className="mt-6 text-lg text-gray-500 max-w-xl">
                    Thermigo accompagne copropriétés et gestionnaires tertiaires dans l&apos;optimisation
                    de leur consommation énergétique — sans travaux lourds.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="#estimateur"
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                    >
                      Estimer mes économies
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                    >
                      Demander un audit gratuit
                    </Link>
                  </div>
                </div>

                {/* Panel clients — arrive depuis le bas */}
                <div
                  ref={clientsPanelRef}
                  className="absolute inset-x-0 top-0"
                  style={{
                    transform: 'translateY(100%)',
                    opacity: 0,
                    pointerEvents: 'none',
                    willChange: 'transform, opacity',
                  }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">Vous êtes…</h2>

                  <div className="flex flex-col gap-2">
                    {CARDS.map((item, i) => (
                      <div
                        key={item.label}
                        ref={el => { cardItemsRef.current[i] = el }}
                        className="group rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden cursor-pointer"
                        style={{
                          maxHeight: '64px',
                          opacity: 0,
                          transform: 'translateY(20px)',
                          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s',
                          willChange: 'opacity, transform',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.maxHeight = '220px';
                          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.maxHeight = '64px';
                          (e.currentTarget as HTMLDivElement).style.boxShadow = ''
                        }}
                      >
                        <div className="flex items-center gap-4 px-5 py-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain flex-shrink-0" />
                          <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                          <span className="ml-auto text-gray-400 text-xs group-hover:rotate-180 transition-transform duration-300">▼</span>
                        </div>

                        <div className="px-5 pb-4">
                          <h3 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h3>
                          <p className="mt-2 text-xs text-gray-500 leading-relaxed">{item.description}</p>
                          <Link
                            href="/contact"
                            className="mt-3 inline-flex items-center text-xs font-semibold text-primary-600 hover:text-primary-700 transition"
                          >
                            {item.cta} →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* ── Droite — building ── */}
              <div
                className="relative"
                style={{ height: 'calc(80vh + 120px)', paddingTop: '120px', overflow: 'visible' }}
              >
                <div className="absolute inset-x-0 bottom-0" style={{ top: '120px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/building_start.webp"
                    alt="Bâtiment — structure intérieure"
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div
                  ref={svgContainerRef}
                  className="absolute inset-x-0 bottom-0"
                  style={{ top: '120px' }}
                />

                <div
                  ref={buildingEndRef}
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    top: '120px',
                    maskImage: 'linear-gradient(to bottom, black -12%, transparent 0%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black -12%, transparent 0%)',
                    willChange: 'mask-image',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/building_end.webp"
                    alt="Bâtiment — façade extérieure"
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={pinRef}
                  src="/pin_icon_thermigo.webp"
                  alt="Pin Thermigo"
                  className="absolute"
                  style={{
                    top: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90px',
                    opacity: 0,
                    willChange: 'opacity',
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
