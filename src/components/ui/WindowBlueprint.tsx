"use client";

interface WindowBlueprintProps {
  type: "fenetre-simple" | "fenetre-double" | "porte-fenetre" | "porte-entree";
  className?: string;
}

export default function WindowBlueprint({ type, className = "" }: WindowBlueprintProps) {
  const blueprints = {
    "fenetre-simple": (
      <svg viewBox="0 0 200 200" className={className}>
        {/* Frame */}
        <rect x="15" y="15" width="170" height="170" fill="none" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
        {/* Cross mullion */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="100" x2="185" y2="100" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        {/* Glass panes */}
        <rect x="20" y="20" width="75" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="105" y="20" width="75" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="20" y="105" width="75" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="105" y="105" width="75" height="75" fill="#1e40af" fillOpacity="0.1" />
        {/* Dimensions */}
        <text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">120cm</text>
        <text x="5" y="105" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace" transform="rotate(-90 5 105)">120cm</text>
      </svg>
    ),
    "fenetre-double": (
      <svg viewBox="0 0 200 200" className={className}>
        {/* Frame */}
        <rect x="15" y="15" width="170" height="170" fill="none" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
        {/* Vertical mullions */}
        <line x1="60" y1="15" x2="60" y2="185" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        <line x1="140" y1="15" x2="140" y2="185" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        {/* Horizontal mullion */}
        <line x1="15" y1="100" x2="185" y2="100" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        {/* Glass panes */}
        <rect x="20" y="20" width="35" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="65" y="20" width="70" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="145" y="20" width="35" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="20" y="105" width="35" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="65" y="105" width="70" height="75" fill="#1e40af" fillOpacity="0.1" />
        <rect x="145" y="105" width="35" height="75" fill="#1e40af" fillOpacity="0.1" />
        {/* Dimensions */}
        <text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">180cm</text>
        <text x="5" y="105" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace" transform="rotate(-90 5 105)">120cm</text>
      </svg>
    ),
    "porte-fenetre": (
      <svg viewBox="0 0 200 200" className={className}>
        {/* Frame */}
        <rect x="15" y="15" width="170" height="170" fill="none" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
        {/* Vertical mullion */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        {/* Door handle */}
        <circle cx="170" cy="100" r="8" fill="#1e40af" />
        <line x1="170" y1="100" x2="185" y2="100" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" />
        {/* Glass panes */}
        <rect x="20" y="20" width="75" height="160" fill="#1e40af" fillOpacity="0.1" />
        <rect x="105" y="20" width="75" height="160" fill="#1e40af" fillOpacity="0.1" />
        {/* Opening direction */}
        <path d="M 100 50 L 100 150 M 100 50 L 85 65 M 100 50 L 115 65" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Dimensions */}
        <text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">180cm</text>
        <text x="5" y="100" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace" transform="rotate(-90 5 100)">200cm</text>
      </svg>
    ),
    "porte-entree": (
      <svg viewBox="0 0 200 200" className={className}>
        {/* Frame */}
        <rect x="15" y="15" width="170" height="170" fill="none" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
        {/* Vertical mullion */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        {/* Door handle */}
        <circle cx="170" cy="100" r="10" fill="#1e40af" />
        <line x1="170" y1="100" x2="185" y2="100" stroke="#1e40af" strokeWidth="2.5" strokeLinecap="round" />
        {/* Security panel */}
        <rect x="25" y="25" width="70" height="30" fill="#1e40af" fillOpacity="0.2" stroke="#1e40af" strokeWidth="1" />
        <rect x="30" y="30" width="60" height="20" fill="#1e40af" fillOpacity="0.1" />
        {/* Glass panel (optional) */}
        <rect x="25" y="70" width="70" height="50" fill="#1e40af" fillOpacity="0.1" stroke="#1e40af" strokeWidth="1" strokeDasharray="2,2" />
        {/* Opening direction */}
        <path d="M 100 50 L 100 150 M 100 50 L 85 65 M 100 50 L 115 65" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Dimensions */}
        <text x="100" y="12" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">100cm</text>
        <text x="5" y="100" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace" transform="rotate(-90 5 100)">210cm</text>
      </svg>
    ),
  };

  return blueprints[type];
}
