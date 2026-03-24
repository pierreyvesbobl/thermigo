'use client'

import { useState } from 'react'
import Link from 'next/link'

const COEFFICIENTS: Record<string, number> = {
  'radiateurs-hydrauliques': 0.15,
  'plancher-chauffant-hydraulique': 0.20,
}

const PRODUCTIONS = [
  { value: 'chaudiere-gaz', label: 'Chaudière gaz' },
  { value: 'chauffage-urbain', label: 'Chauffage urbain' },
  { value: 'chaudiere-fioul', label: 'Chaudière fioul' },
  { value: 'pompe-a-chaleur', label: 'Pompe à chaleur' },
  { value: 'autre', label: 'Autre' },
]

const DISTRIBUTIONS = [
  { value: 'radiateurs-hydrauliques', label: 'Radiateurs hydrauliques' },
  { value: 'plancher-chauffant-hydraulique', label: 'Plancher chauffant hydraulique' },
  { value: 'radiateurs-electriques', label: 'Radiateurs électriques' },
  { value: 'plancher-chauffant-electrique', label: 'Plancher chauffant électrique' },
]

export function EconomiesEstimateur() {
  const [lots, setLots] = useState('')
  const [budgetManuel, setBudgetManuel] = useState('')
  const [production, setProduction] = useState('')
  const [distribution, setDistribution] = useState('')
  const [result, setResult] = useState<{ total: number; parLot: number } | null>(null)
  const [noSavings, setNoSavings] = useState(false)

  const lotsNum = Number(lots)
  const budgetAuto = lotsNum > 0 ? lotsNum * 1000 : 0
  const budget = budgetManuel ? Number(budgetManuel) : budgetAuto

  const handleCalculate = () => {
    const coeff = COEFFICIENTS[distribution] ?? 0
    if (!distribution || !lots) return
    if (coeff === 0) {
      setResult(null)
      setNoSavings(true)
      return
    }
    const total = Math.round(budget * coeff)
    const parLot = lotsNum > 0 ? Math.round(total / lotsNum) : 0
    setResult({ total, parLot })
    setNoSavings(false)
  }

  const hasResult = result !== null || noSavings

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Form */}
        <div className="p-8 lg:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Vos informations</h3>
          <div className="space-y-5">
            {/* Lots */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de lots d'habitation
              </label>
              <input
                type="number"
                min="1"
                value={lots}
                onChange={(e) => { setLots(e.target.value); setResult(null); setNoSavings(false) }}
                placeholder="ex. 48"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget énergie annuel (€)
                {budgetAuto > 0 && !budgetManuel && (
                  <span className="ml-2 text-xs text-gray-400 font-normal">
                    — estimation auto : {budgetAuto.toLocaleString('fr-FR')} €
                  </span>
                )}
              </label>
              <input
                type="number"
                min="0"
                value={budgetManuel}
                onChange={(e) => { setBudgetManuel(e.target.value); setResult(null); setNoSavings(false) }}
                placeholder={budgetAuto > 0 ? `${budgetAuto.toLocaleString('fr-FR')} (auto)` : 'ex. 48 000'}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              />
            </div>

            {/* Production */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de production
              </label>
              <select
                value={production}
                onChange={(e) => { setProduction(e.target.value); setResult(null); setNoSavings(false) }}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white"
              >
                <option value="">Sélectionner…</option>
                {PRODUCTIONS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Distribution */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type de distribution
              </label>
              <select
                value={distribution}
                onChange={(e) => { setDistribution(e.target.value); setResult(null); setNoSavings(false) }}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none bg-white"
              >
                <option value="">Sélectionner…</option>
                {DISTRIBUTIONS.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCalculate}
              disabled={!lots || !distribution}
              className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Estimer mes économies
            </button>
          </div>
        </div>

        {/* Result */}
        <div className="bg-gray-50 p-8 lg:p-10 flex flex-col justify-center">
          {!hasResult && (
            <div className="text-center text-gray-400">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/picto_calculette.webp" alt="Calculette" className="w-64 h-64 object-contain mx-auto mb-4" />
              <p className="text-sm">Renseignez vos informations pour découvrir votre potentiel d'économies.</p>
            </div>
          )}

          {noSavings && (
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-700 font-medium mb-2">Votre configuration nécessite une analyse personnalisée.</p>
              <p className="text-sm text-gray-500 mb-6">Contactez-nous pour un audit gratuit de votre installation.</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition text-sm"
              >
                Demander un audit gratuit
              </Link>
            </div>
          )}

          {result && (
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Économie potentielle</p>
              <div className="text-5xl lg:text-6xl font-bold text-primary-600 mb-1">
                {result.total.toLocaleString('fr-FR')} €
              </div>
              <p className="text-gray-500 text-sm mb-4">par an</p>

              {result.parLot > 0 && (
                <div className="inline-block bg-primary-50 rounded-xl px-6 py-3 mb-6">
                  <span className="text-2xl font-bold text-primary-700">{result.parLot.toLocaleString('fr-FR')} €</span>
                  <span className="text-sm text-primary-600 ml-1">/ lot / an</span>
                </div>
              )}

              <p className="text-xs text-gray-400 mb-6">
                Estimation basée sur votre budget et votre type d'installation. Résultats réels variables selon l'état du réseau.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition text-sm"
              >
                Recevoir une analyse détaillée →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
