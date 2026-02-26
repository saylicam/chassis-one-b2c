# 📁 Images Hero des Services

Ce dossier contient les images Hero haute définition pour chaque page de service.

## 📋 Liste des fichiers requis

### ✅ Fichiers obligatoires

Placez ces fichiers dans `/public/images/services/` :

1. **`hero-pvc.jpg`** 
   - Pour la page : `/pvc`
   - Service : Châssis PVC
   - Affichage automatique sur la page "L'Équilibre Parfait du PVC"

2. **`hero-alu.jpg`**
   - Pour la page : `/alu`
   - Service : Châssis Aluminium
   - Affichage automatique sur la page "L'Excellence de l'Aluminium"

3. **`hero-portes.jpg`**
   - Pour la page : `/portes`
   - Service : Portes d'Entrée Signature
   - Affichage automatique sur la page "Portes d'Entrée Signature"

4. **`hero-volets.jpg`**
   - Pour la page : `/volets`
   - Service : Solutions d'Occultation
   - Affichage automatique sur la page "Solutions d'Occultation Premium"

### 🔄 Fichier optionnel (fallback)

5. **`hero-default.jpg`**
   - Image par défaut si un fichier spécifique est manquant
   - Sera utilisée automatiquement en cas d'erreur

## 🎨 Spécifications techniques recommandées

### Format
- **Extension** : `.jpg` ou `.webp` (JPG recommandé pour compatibilité)
- **Format** : RGB (pas CMYK)

### Dimensions
- **Résolution minimale** : 1920 x 1080px (Full HD)
- **Résolution recommandée** : 2560 x 1440px (2K) ou 3840 x 2160px (4K)
- **Ratio** : 16:9 (panoramique) pour un rendu optimal

### Poids
- **Taille maximale recommandée** : < 500KB par image
- **Optimisation** : Compressez les images avant upload pour de meilleures performances

### Contenu visuel
- **Style** : Architectural, professionnel, haute qualité
- **Focus** : Le produit (châssis, porte, volet) doit être visible et centré
- **Éclairage** : Naturel, lumineux, mettant en valeur le produit
- **Cadrage** : Le produit doit être au centre ou légèrement à droite (le texte sera à gauche)

## 🔧 Fonctionnement automatique

Une fois les images placées dans ce dossier avec les bons noms :

1. ✅ Le système détecte automatiquement la catégorie de service
2. ✅ L'image correspondante s'affiche automatiquement
3. ✅ Le cadrage est optimisé (object-fit: cover, object-position: center)
4. ✅ Aucune modification de code nécessaire !

## 📍 Structure du dossier

```
public/
└── images/
    └── services/
        ├── hero-pvc.jpg      ← Image pour /pvc
        ├── hero-alu.jpg       ← Image pour /alu
        ├── hero-portes.jpg    ← Image pour /portes
        ├── hero-volets.jpg    ← Image pour /volets
        └── hero-default.jpg   ← Image de secours (optionnel)
```

## ⚠️ Notes importantes

- Les noms de fichiers sont **sensibles à la casse** : utilisez exactement les noms indiqués
- Les images doivent être en **haute définition** pour éviter la pixelisation
- Le système applique automatiquement `object-fit: cover` et `object-position: center`
- La hauteur du Hero est fixée à `60vh` pour un rendu optimal

## 🚀 Après l'upload

Une fois vos images uploadées :
1. Videz le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)
2. Les nouvelles images s'afficheront automatiquement
3. Vérifiez que le cadrage est correct sur mobile et desktop
