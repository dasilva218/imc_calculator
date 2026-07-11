# Calculateur d'IMC

Une application web permettant de calculer l'**Indice de Masse Corporelle (IMC)** à partir du poids et de la taille, et d'obtenir instantanément la catégorie correspondante avec des recommandations personnalisées.

## Fonctionnalités

- Calcul de l'IMC selon la formule standard `IMC = Poids (kg) / Taille² (m)`
- Prise en charge de deux systèmes d'unités :
  - **Métrique** : poids en kilogrammes, taille en centimètres
  - **Impérial** : poids en livres (lb), taille en pouces (in)
- Classification automatique dans l'une des catégories (insuffisance pondérale, corpulence normale, surpoids, obésité)
- Barre de progression visuelle situant l'IMC sur l'échelle (15 à 40+)
- Recommandations adaptées au résultat
- Section « Informations » détaillant le calcul, les catégories, les limites et les recommandations liées à l'IMC
- Interface en français, responsive et avec thème clair

## Technologies utilisées

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (composants Radix UI)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (gestion et validation des formulaires)
- [Sonner](https://sonner.emilkowal.ski/) (notifications)
- [lucide-react](https://lucide.dev/) (icônes)

## Prérequis

- [Node.js](https://nodejs.org/) (version 18.18+ recommandée)
- Un gestionnaire de paquets : `pnpm`

## Installation

Clonez le dépôt puis installez les dépendances :

```bash
pnpm install
```

## Lancement en développement

```bash
npm run dev
# ou
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

| Commande         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `pnpm run dev`    | Démarre le serveur de développement (Turbopack)  |
| `pnpm run build`  | Génère le build de production                    |
| `pnpm run start`  | Lance l'application en mode production           |
| `pnpm run lint`   | Analyse le code avec ESLint                      |

## Structure du projet

```
app/
  layout.tsx              # Mise en page racine
  page.tsx                # Page principale (onglets Calculateur / Informations)
  globals.css             # Styles globaux (Tailwind)
components/
  ImcCalculator.tsx       # Formulaire de saisie (poids, taille, unités)
  IMCResult.tsx           # Affichage du résultat et recommandations
  IMCInfo.tsx             # Section informative sur l'IMC
  ui/                     # Composants d'interface réutilisables
hooks/
  useImcCalculator.tsx    # Logique de calcul et de validation de l'IMC
lib/                      # Utilitaires (ex. fonctions de classe CSS)
```

## À propos de l'IMC

L'Indice de Masse Corporelle est une mesure indicative de la corpulence. Il est calculé en divisant le poids par le carré de la taille :

```
IMC = Poids (kg) / Taille² (m)
```

> ⚠️ Ce calculateur fournit une estimation à titre informatif et ne remplace pas l'avis d'un professionnel de santé.

## Déploiement

L'application peut être déployée facilement sur [Vercel](https://vercel.com/) (plateforme recommandée pour les projets Next.js) ou tout hébergeur prenant en charge Node.js.

```bash
pnpm run build
pnpm run start
```
