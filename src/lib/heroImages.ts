/**
 * Configuration centralisée des images Hero pour chaque service
 * 
 * Structure du dossier : /public/images/services/
 * 
 * Pour ajouter une nouvelle image :
 * 1. Placez votre image HD dans /public/images/services/
 * 2. Utilisez le nom de fichier correspondant (voir mapping ci-dessous)
 * 3. L'image s'affichera automatiquement
 */

export type ServiceCategory = 'pvc' | 'alu' | 'portes' | 'volets';

/**
 * Mapping des catégories de services vers leurs images Hero
 */
export const heroImageMap: Record<ServiceCategory, string> = {
  pvc: '/images/services/hero-pvc.jpg',
  alu: '/images/services/hero-alu.jpg',
  portes: '/images/services/hero-portes.jpg',
  volets: '/images/services/hero-volets.jpg',
};

/**
 * Image par défaut en cas de fichier manquant
 */
export const defaultHeroImage = '/images/services/hero-default.jpg';

/**
 * Obtient le chemin de l'image Hero pour une catégorie donnée
 * 
 * @param category - Catégorie du service
 * @returns Chemin de l'image Hero ou image par défaut
 */
export function getHeroImage(category: ServiceCategory | string): string {
  // Normaliser la catégorie (tolowercase, supprimer les espaces)
  const normalizedCategory = category.toLowerCase().trim();
  
  // Vérifier si la catégorie existe dans le mapping
  if (normalizedCategory in heroImageMap) {
    return heroImageMap[normalizedCategory as ServiceCategory];
  }
  
  // Retourner l'image par défaut si la catégorie n'est pas trouvée
  return defaultHeroImage;
}

/**
 * Liste des noms de fichiers requis dans /public/images/services/
 * 
 * FICHIERS OBLIGATOIRES :
 * - hero-pvc.jpg (pour la page /pvc)
 * - hero-alu.jpg (pour la page /alu)
 * - hero-portes.jpg (pour la page /portes)
 * - hero-volets.jpg (pour la page /volets)
 * 
 * FICHIER OPTIONNEL (fallback) :
 * - hero-default.jpg (image par défaut si un fichier est manquant)
 * 
 * RECOMMANDATIONS :
 * - Format : JPG ou WebP
 * - Résolution minimale : 1920x1080px (Full HD)
 * - Résolution recommandée : 2560x1440px (2K) ou 3840x2160px (4K)
 * - Ratio : 16:9 (panoramique) pour un rendu optimal
 * - Poids : < 500KB (optimisé pour le web)
 */
export const requiredHeroFiles = [
  'hero-pvc.jpg',
  'hero-alu.jpg',
  'hero-portes.jpg',
  'hero-volets.jpg',
] as const;

export const optionalHeroFiles = [
  'hero-default.jpg',
] as const;
