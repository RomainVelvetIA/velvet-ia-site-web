# Velvet IA IU - Landing Page

Une landing page moderne pour Velvet IA IU, une solution d'intelligence artificielle innovante.

## Stack Technique

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utility-first
- **Shadcn/UI** - Composants UI réutilisables
- **Framer Motion** - Animations fluides

## Fonctionnalités

- Design responsive mobile-first
- Animations fluides au scroll
- SEO optimisé
- Sections modulaires et extensibles
- Performance optimisée

## Sections

- Hero - Section d'introduction avec CTA
- Vidéo - Section de démonstration vidéo
- Témoignages - Retours clients
- Calendly - Intégration pour réservation
- FAQ - Questions fréquentes avec accordéon
- CTA - Appel à l'action
- Footer - Pied de page avec liens et informations

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/velvet-ia-iu.git
cd velvet-ia-iu

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Structure du Projet

```
src/
├── app/               # App Router Next.js
├── components/        # Composants React
│   ├── ui/            # Composants UI réutilisables (shadcn)
│   └── ...            # Composants spécifiques à la page
├── lib/               # Utilitaires et fonctions
├── styles/            # Styles globaux
└── utils/             # Fonctions utilitaires
```

## Personnalisation

Vous pouvez personnaliser tous les aspects du site :

- Modifier les couleurs et les thèmes dans `tailwind.config.js`
- Ajouter de nouvelles sections dans `src/app/page.tsx`
- Personnaliser les composants existants dans `src/components/`

## Développement

```bash
# Lancer le serveur de développement
npm run dev

# Créer une build de production
npm run build

# Démarrer la version de production
npm start
```

## Licence

MIT 