import Link from 'next/link'
import { ThermigoLogo } from './ThermigoLogo'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" aria-label="Thermigo — Accueil">
              <ThermigoLogo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm">
              Solutions thermiques professionnelles pour particuliers et entreprises.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>contact@thermigo.fr</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Thermigo. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
