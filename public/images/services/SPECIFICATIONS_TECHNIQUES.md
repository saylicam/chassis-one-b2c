# 📐 Spécifications Techniques - Images Hero Services

## 🎯 Dimensions Idéales

### Résolution Recommandée
**3840 x 2160 pixels (4K UHD)**

**Pourquoi cette résolution ?**
- Le Hero utilise `min-h-screen` (100vh) et `bg-cover`
- Sur un écran 4K (3840x2160), l'image doit couvrir tout l'espace sans pixelisation
- Sur les écrans plus petits, l'image sera automatiquement redimensionnée (downscaled) par le navigateur
- Une image 4K garantit une netteté parfaite sur tous les écrans modernes

### Résolutions Alternatives (si 4K trop lourd)
- **Minimum acceptable** : 2560 x 1440 pixels (2K QHD)
- **Optimal** : 3840 x 2160 pixels (4K UHD) ⭐ **RECOMMANDÉ**

## 📏 Ratio d'Aspect

### Ratio Standard
**16:9 (Panoramique)**

**Explications :**
- Le Hero utilise `bg-cover bg-center` qui adapte l'image au ratio de l'écran
- Le ratio 16:9 correspond au standard des écrans modernes (Full HD, 2K, 4K)
- Ce ratio évite les recadrages excessifs sur la plupart des écrans
- L'image sera centrée verticalement et horizontalement

**Calcul du ratio :**
- Largeur ÷ Hauteur = 1.777... (16/9)
- Exemple : 3840 ÷ 2160 = 1.777... ✅

## 🖼️ Format de Fichier

### Format Principal
**WebP** (avec fallback JPG)

**Recommandation :**
1. **WebP** : Format moderne, compression supérieure de 25-35% par rapport au JPG
   - Poids réduit = chargement plus rapide
   - Qualité visuelle identique ou supérieure
   - Support natif dans tous les navigateurs modernes

2. **JPG haute qualité** : Format de fallback si WebP non supporté
   - Qualité : 90-95% (pas 100% pour éviter les fichiers trop lourds)
   - Espace colorimétrique : sRGB (pas Adobe RGB ou ProPhoto)

**Nommage :**
- WebP : `hero-pvc.webp`, `hero-alu.webp`, etc.
- JPG (fallback) : `hero-pvc.jpg`, `hero-alu.jpg`, etc.

## 📦 Poids Maximum

### Poids Idéal par Image
**< 500 KB** (optimisé et compressé)

**Répartition recommandée :**
- **WebP** : 200-400 KB (compression optimale)
- **JPG** : 400-600 KB (qualité 90-95%)

**Techniques d'optimisation :**
1. Compression intelligente : Utilisez des outils comme TinyPNG, Squoosh, ou ImageOptim
2. Compression WebP : Qualité 80-85% (invisible à l'œil, poids réduit)
3. Compression JPG : Qualité 90-95% (équilibre qualité/poids)

**⚠️ Important :**
- Ne dépassez pas 1 MB par image (impact sur le chargement)
- Testez le chargement sur une connexion 3G pour valider la performance

## 🎨 Zone de Sécurité (Safe Area)

### Position du Texte
**Gauche de l'image (0% - 50% de la largeur)**

**Détails :**
- Le contenu texte est aligné à **gauche** dans un conteneur `max-w-4xl`
- Le texte commence à environ **8-12% de la largeur** (padding `px-8 lg:px-16`)
- Le texte s'étend jusqu'à environ **40-45% de la largeur** de l'écran

### Zone à Éviter (Zone de Texte)
```
┌─────────────────────────────────────────┐
│  [ZONE TEXTE]  │  [ZONE PRODUIT]       │
│  0% - 50%      │  50% - 100%           │
│                │                        │
│  • Titre       │  • Châssis visible    │
│  • Description │  • Détails clairs     │
│  • Bouton      │  • Lumière naturelle  │
└─────────────────────────────────────────┘
```

**Recommandations de cadrage :**
1. **Gauche (0-50%)** : Laissez de l'espace vide ou des éléments secondaires
   - Évitez de placer le produit principal dans cette zone
   - Les détails importants peuvent être flous à cause de l'overlay sombre

2. **Droite (50-100%)** : Zone principale pour le produit
   - Placez le châssis/fenêtre/porte dans cette zone
   - Cette partie reste claire et visible (overlay transparent à droite)
   - Privilégiez la netteté et la lumière naturelle ici

3. **Centre (40-60%)** : Zone de transition
   - Peut contenir des éléments de transition
   - Évitez les détails critiques ici (peut être recadré sur mobile)

### Overlay et Visibilité
- **Gauche** : Overlay sombre (`from-[#0f172a]/60`) - texte lisible
- **Droite** : Overlay transparent (`to-transparent`) - produit visible
- **Centre** : Transition progressive (`via-[#1e293b]/50`)

## 📱 Responsive Considerations

### Comportement sur Différents Écrans

**Desktop (1920x1080 et plus) :**
- Image complète visible
- Texte à gauche, produit à droite
- Zone de sécurité respectée

**Tablet (768x1024) :**
- Image recadrée verticalement (bg-cover)
- Texte toujours à gauche
- Produit peut être légèrement recadré

**Mobile (< 768px) :**
- Image recadrée plus agressivement
- Texte centré ou à gauche selon l'espace
- Produit peut être zoomé/recadré

**Recommandation :**
- Assurez-vous que le produit principal reste visible même après recadrage
- Évitez les compositions trop serrées
- Privilégiez un cadrage large avec le produit bien centré dans la zone droite

## ✅ Checklist de Validation

Avant d'uploader vos images, vérifiez :

- [ ] Dimensions : 3840 x 2160 pixels (ou minimum 2560 x 1440)
- [ ] Ratio : 16:9 exact (vérifiez avec calculateur)
- [ ] Format : WebP optimisé (< 500 KB) + JPG fallback
- [ ] Zone de sécurité : Produit principal dans la moitié droite (50-100%)
- [ ] Zone texte : Espace vide ou éléments secondaires à gauche (0-50%)
- [ ] Qualité : Image nette, pas de flou, bonne exposition
- [ ] Poids : < 500 KB (testez le chargement)
- [ ] Nommage : `hero-pvc.webp`, `hero-alu.webp`, etc.

## 🛠️ Outils Recommandés

**Compression :**
- [Squoosh](https://squoosh.app/) - Compression WebP/JPG en ligne
- [TinyPNG](https://tinypng.com/) - Compression intelligente
- [ImageOptim](https://imageoptim.com/) - Optimisation locale (Mac)

**Vérification Ratio :**
- Calculatrice : Largeur ÷ Hauteur = 1.777... (16/9)
- Exemple : 3840 ÷ 2160 = 1.777... ✅

**Vérification Zone de Sécurité :**
- Ouvrez votre image dans un éditeur
- Tracez une ligne verticale à 50% de la largeur
- Vérifiez que le produit principal est à droite de cette ligne
