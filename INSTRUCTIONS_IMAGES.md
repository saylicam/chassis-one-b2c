## Système d’images pour la page `Nos Réalisations`

Cette page utilise actuellement les images définies dans `src/lib/images.ts`, section `realisations`. Voici comment remplacer ces visuels par vos propres photos de chantiers, proprement et sans surprise de cadrage.

---

### 1. Dossier recommandé pour vos photos

- Placez vos fichiers dans :
  - `public/images/realisations/`
- Exemple de structure :
  - `public/images/realisations/projet-wavre-pvc.webp`
  - `public/images/realisations/projet-ottignies-alu.webp`
  - `public/images/realisations/projet-waterloo-villa.webp`

> Tout ce qui se trouve dans `public/` est servi depuis la racine du site.  
> Exemple : `public/images/realisations/projet-wavre-pvc.webp` sera accessible via `/images/realisations/projet-wavre-pvc.webp`.

---

### 2. Format et ratio d’image recommandés

- **Format de fichier conseillé** : `WebP`
  - Excellente qualité / poids réduit
  - Support moderne dans tous les navigateurs récents
- **Dimensions / ratio** :
  - Ratio cible : **4:3** (utilisé dans la grille via `aspect-[4/3]`)
  - Exemple de dimensions :
    - 1600 × 1200 px
    - 2000 × 1500 px
  - Si vos images ne sont pas exactement en 4:3, elles seront recadrées par `object-cover`.  
    → Gardez la zone importante (fenêtres, façade, intérieur) bien centrée.

---

### 3. Fichier à modifier pour lier vos images

1. Ouvrez le fichier :
   - `src/lib/images.ts`
2. Repérez la section :

```ts
export const images = {
  // ...
  realisations: [
    {
      id: 1,
      image: "https://images.unsplash.com/...",
    },
    // ...
  ],
};
```

3. Remplacez les URLs externes par vos chemins locaux :

```ts
realisations: [
  {
    id: 1,
    image: "/images/realisations/projet-wavre-pvc.webp",
  },
  {
    id: 2,
    image: "/images/realisations/projet-ottignies-alu.webp",
  },
  {
    id: 3,
    image: "/images/realisations/projet-lln-porte.webp",
  },
  {
    id: 4,
    image: "/images/realisations/projet-nivelles-volets.webp",
  },
  {
    id: 5,
    image: "/images/realisations/projet-bruxelles-renovation.webp",
  },
  {
    id: 6,
    image: "/images/realisations/projet-waterloo-villa.webp",
  },
],
```

4. Les titres, lieux et années sont définis dans :
   - `src/app/realisations/page.tsx` dans `baseData` :

```ts
const baseData = [
  {
    title: "Rénovation complète - Wavre",
    category: "Châssis PVC",
    description: "...",
    location: "Wavre",
    year: "2024",
  },
  // ...
];
```

- Adaptez :
  - `title` : nom du projet
  - `location` : ville / commune
  - `year` : année de la réalisation
  - `description` : phrase courte explicative (non affichée dans la carte, mais utilisée dans le modal).

> Important : l’ordre des éléments dans `images.realisations` et dans `baseData` doit rester synchronisé (1er visuel = 1er objet de `baseData`, etc.).

---

### 4. Nommage des fichiers (recommandé)

Pour garder un système propre et réutilisable :

- Utilisez uniquement :
  - minuscules
  - tirets `-`
  - aucun espace, aucun accent
- Pattern conseillé :
  - `projet-[ville]-[type].webp`
  - Exemples :
    - `projet-wavre-pvc.webp`
    - `projet-ottignies-alu.webp`
    - `projet-waterloo-villa.webp`

Cela facilite :
- la lecture humaine
- le SEO (si ces images sont un jour utilisées dans des balises `<img>` publiques)
- la maintenance à long terme

---

### 5. Résumé ultra-court (checklist)

1. Mettre vos photos dans :  
   `public/images/realisations/`
2. Utiliser des fichiers **WebP** en ratio **4:3** (ex. 1600×1200).
3. Mettre à jour les URLs dans :  
   `src/lib/images.ts` → `images.realisations`.
4. Mettre à jour les titres / lieux / années dans :  
   `src/app/realisations/page.tsx` → `baseData`.
5. Garder le même ordre entre `images.realisations` et `baseData`.

Une fois ces étapes faites, la grille de réalisations utilisera automatiquement vos propres photos, en conservant le design premium et l’alignement parfait.

