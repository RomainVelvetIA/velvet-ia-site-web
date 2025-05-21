"use client"

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Link href="/" className="text-white font-semibold text-xl mb-4 md:mb-0">
              Velvet IA
            </Link>
            
            <nav aria-label="Menu principal">
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-white">
                <li>
                  <Link href="/" className="hover:text-gray-300 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-gray-300 transition-colors">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="/processus" className="hover:text-gray-300 transition-colors">
                    Processus
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-gray-300 transition-colors">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link href="https://cal.com/romain-auroux-6dlf0l/appel-decouverte-velvet-ia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                    Prendre rendez-vous
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="w-full h-px bg-gray-800"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-400">
            <div>
              Copyright © {new Date().getFullYear()} — Tous droits réservés
            </div>
            
            <div className="flex mt-4 md:mt-0">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions Légales
              </Link>
              <span className="mx-2">|</span>
              <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://www.youtube.com/@Velvet-IA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/romain-auroux-41425323a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 