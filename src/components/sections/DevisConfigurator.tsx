"use client";

import { FormEvent, useMemo, useState, type ComponentType, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  Phone,
  Send,
  User,
  Thermometer,
  Shield,
  Sun,
  Sparkles,
  TreePine,
  Zap,
  Bug,
} from "lucide-react";
import Button from "@/components/ui/Button";
import BlueprintDiagram, { BlueprintDiagramType } from "@/components/ui/BlueprintDiagram";
import { cn } from "@/lib/utils";

type StepId = "material" | "products" | "vitrage" | "finitions" | "accessoires" | "project" | "contact";

type MaterialId = "pvc" | "aluminium" | "mixte";
type ProductId = "fenetres" | "portes" | "coulissants" | "volets";
type VitrageId = "isolation" | "securite" | "solaire";
type FinitionId = "graine" | "lisse" | "bois";
type AccessoireId = "moustiquaire" | "volets-motorises";
type ProjectId = "renovation" | "neuf";

type FormState = {
  material?: MaterialId;
  products: ProductId[];
  vitrage?: VitrageId[];
  finitions?: FinitionId;
  accessoires: AccessoireId[];
  project?: ProjectId;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const steps: { id: StepId; title: string; subtitle: string }[] = [
  {
    id: "material",
    title: "L'Écrin",
    subtitle: "Quel matériau imaginez-vous pour votre projet ?",
  },
  {
    id: "products",
    title: "La Configuration",
    subtitle: "Sélectionnez vos besoins (plusieurs choix possibles).",
  },
  {
    id: "vitrage",
    title: "Le Vitrage",
    subtitle: "Choisissez les caractéristiques de votre vitrage.",
  },
  {
    id: "finitions",
    title: "Les Finitions",
    subtitle: "Quelle texture souhaitez-vous pour vos châssis ?",
  },
  {
    id: "accessoires",
    title: "Les Accessoires",
    subtitle: "Complétez votre configuration avec des options premium.",
  },
  {
    id: "project",
    title: "Le Projet",
    subtitle: "Rénovation ou nouvelle construction ?",
  },
  {
    id: "contact",
    title: "La Signature",
    subtitle: "Vos coordonnées — une finition aussi soignée que nos poses.",
  },
];

const materialCards: {
  id: MaterialId;
  label: string;
  description: string;
  texture: string;
}[] = [
  {
    id: "pvc",
    label: "PVC",
    description: "Isolation premium, entretien minimal, équilibre parfait.",
    texture:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1200&h=900&fit=crop&auto=format&q=80",
  },
  {
    id: "aluminium",
    label: "Aluminium",
    description: "Lignes architecturales, finesse et résistance.",
    texture:
      "https://images.unsplash.com/photo-1533639326831-9c8c62fce5a5?w=1200&h=900&fit=crop&auto=format&q=80",
  },
  {
    id: "mixte",
    label: "Mixte",
    description: "Le meilleur des deux mondes — performance et design.",
    texture:
      "https://images.unsplash.com/photo-1523699199341-2d30cfe39a88?w=1200&h=900&fit=crop&auto=format&q=80",
  },
];

const productCards: {
  id: ProductId;
  label: string;
  description: string;
  blueprint: BlueprintDiagramType;
}[] = [
  { id: "fenetres", label: "Fenêtres", description: "Ouvrant, oscillo-battant, fixe.", blueprint: "fenetres" },
  { id: "portes", label: "Portes", description: "Entrée, porte-fenêtre, sécurité.", blueprint: "portes" },
  { id: "coulissants", label: "Coulissants", description: "Grands apports de lumière.", blueprint: "coulissants" },
  { id: "volets", label: "Volets", description: "Confort, protection, domotique.", blueprint: "volets" },
];

const vitrageCards: {
  id: VitrageId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "isolation",
    label: "Isolation Thermique",
    description: "Double ou triple vitrage pour une performance énergétique optimale.",
    icon: Thermometer,
  },
  {
    id: "securite",
    label: "Sécurité Renforcée",
    description: "Vitrage feuilleté et résistant aux effractions pour votre tranquillité.",
    icon: Shield,
  },
  {
    id: "solaire",
    label: "Contrôle Solaire",
    description: "Réduction des apports solaires pour un confort été comme hiver.",
    icon: Sun,
  },
];

const finitionCards: {
  id: FinitionId;
  label: string;
  description: string;
  texture: string;
}[] = [
  {
    id: "graine",
    label: "Grainé",
    description: "Texture fine et discrète, élégance sobre.",
    texture: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "lisse",
    label: "Lisse",
    description: "Surface parfaitement lisse, esthétique moderne.",
    texture: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "bois",
    label: "Aspect Bois",
    description: "Rendu authentique du bois, chaleur naturelle.",
    texture: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format&q=80",
  },
];

const accessoireCards: {
  id: AccessoireId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "moustiquaire",
    label: "Moustiquaires Intégrées",
    description: "Protection discrète contre les insectes, ventilation préservée.",
    icon: Bug,
  },
  {
    id: "volets-motorises",
    label: "Volets Motorisés",
    description: "Domotique intégrée, contrôle à distance, confort absolu.",
    icon: Zap,
  },
];

const projectCards: {
  id: ProjectId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  { id: "renovation", label: "Rénovation", description: "Remplacement, performance énergétique, finitions.", icon: ArrowRight },
  { id: "neuf", label: "Nouvelle construction", description: "Projet complet, optimisation dès la conception.", icon: Check },
];

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, value));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string) {
  const normalized = phone.replace(/\s/g, "");
  return /^[\d\+\-\(\)]{10,}$/.test(normalized);
}

function LineField({
  label,
  icon,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}: {
  label: string;
  icon: ReactNode;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#64748b] mb-2">{label}</label>
      <div className="relative flex items-center gap-3 pb-3 border-b border-[#e2e8f0] focus-within:border-[#1e40af] transition-colors">
        <div className="text-[#94a3b8]">{icon}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className="flex-1 outline-none text-[#0a0a0a] placeholder:text-[#94a3b8] bg-transparent"
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function DevisConfigurator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [selectedBlueprint, setSelectedBlueprint] = useState<string | null>(null);

  const [state, setState] = useState<FormState>({
    products: [],
    vitrage: [],
    accessoires: [],
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const step = steps[stepIndex];
  const progress = clampProgress(((stepIndex + 1) / steps.length) * 100);

  const summary = useMemo(() => {
    const materialLabel = state.material
      ? materialCards.find((m) => m.id === state.material)?.label
      : undefined;

    const productLabels = state.products
      .map((p) => productCards.find((x) => x.id === p)?.label)
      .filter(Boolean) as string[];

    const vitrageLabels = state.vitrage
      ?.map((v) => vitrageCards.find((x) => x.id === v)?.label)
      .filter(Boolean) as string[];

    const finitionLabel = state.finitions
      ? finitionCards.find((f) => f.id === state.finitions)?.label
      : undefined;

    const accessoireLabels = state.accessoires
      .map((a) => accessoireCards.find((x) => x.id === a)?.label)
      .filter(Boolean) as string[];

    const projectLabel = state.project
      ? projectCards.find((p) => p.id === state.project)?.label
      : undefined;

    return {
      materialLabel,
      productLabels,
      vitrageLabels,
      finitionLabel,
      accessoireLabels,
      projectLabel,
    };
  }, [state]);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (touched.name && !state.name.trim()) e.name = "Nom requis";
    if (touched.phone && !isValidPhone(state.phone)) e.phone = "Téléphone invalide";
    if (touched.email && !isValidEmail(state.email)) e.email = "Email invalide";
    return e;
  }, [state, touched]);

  const canProceed = useMemo(() => {
    if (step.id === "material") return !!state.material;
    if (step.id === "products") return state.products.length > 0;
    if (step.id === "vitrage") return (state.vitrage?.length ?? 0) > 0;
    if (step.id === "finitions") return !!state.finitions;
    if (step.id === "accessoires") return true; // Optionnel
    if (step.id === "project") return !!state.project;
    if (step.id === "contact") {
      return !!(state.name.trim() && isValidPhone(state.phone) && isValidEmail(state.email));
    }
    return false;
  }, [step.id, state]);

  const nextStep = () => {
    if (canProceed && stepIndex < steps.length - 1) {
      setDirection(1);
      setStepIndex((i) => i + 1);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setDirection(-1);
      setStepIndex((i) => i - 1);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canProceed) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStepIndex(0);
      setState({
        products: [],
        vitrage: [],
        accessoires: [],
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setTouched({});
    }, 5000);
  };

  const variants = {
    enter: (dir: 1 | -1) => ({ x: dir > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({ x: dir > 0 ? -20 : 20, opacity: 0 }),
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-white">
      {/* Ultra-thin progress line */}
      <div className="sticky top-0 z-40 bg-white">
        <div className="h-[1px] bg-[#e2e8f0]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-[#1e40af]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main configurator */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0a0a0a] mb-4">
                Configurez votre art de vivre
              </h1>
              <p className="text-lg text-[#64748b] font-light max-w-2xl leading-relaxed">
                Un parcours simple et visuel pour obtenir votre devis personnalisé en quelques étapes.
              </p>
            </motion.div>

            <div className="rounded-2xl bg-white border border-[#e2e8f0] shadow-ultra-soft overflow-hidden">
              <div className="px-8 sm:px-10 py-8 border-b border-[#e2e8f0]">
                <div className="flex items-baseline justify-between gap-6">
                  <div>
                    <p className="text-sm text-[#94a3b8] font-light">
                      Étape {stepIndex + 1} / {steps.length}
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0a0a0a]">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-[#64748b] font-light">{step.subtitle}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="relative p-8 sm:p-10">
                <AnimatePresence mode="wait" custom={direction}>
                  {step.id === "material" && (
                    <motion.div
                      key="material"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {materialCards.map((m) => {
                        const selected = state.material === m.id;
                        return (
                          <motion.button
                            key={m.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({ ...s, material: m.id }));
                            }}
                            className={cn(
                              "relative text-left rounded-2xl overflow-hidden border transition-all duration-300",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="absolute inset-0">
                              <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${m.texture})` }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
                            </div>

                            <div className="relative p-8 min-h-[200px] flex flex-col justify-between">
                              <div>
                                <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a]">
                                  {m.label}
                                </h3>
                                <p className="mt-3 text-[#64748b] font-light leading-relaxed">
                                  {m.description}
                                </p>
                              </div>

                              <div className="mt-6 flex items-center justify-between">
                                <div className={cn("h-[1px] flex-1", selected ? "bg-[#1e40af]" : "bg-[#e2e8f0]")} />
                                {selected && (
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="ml-4 inline-flex items-center gap-2 text-sm font-medium text-[#1e40af]"
                                  >
                                    <Check className="h-4 w-4" />
                                    Sélectionné
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "products" && (
                    <motion.div
                      key="products"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {productCards.map((p) => {
                        const selected = state.products.includes(p.id);
                        return (
                          <motion.button
                            key={p.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({
                                ...s,
                                products: selected
                                  ? s.products.filter((x) => x !== p.id)
                                  : [...s.products, p.id],
                              }));
                              setSelectedBlueprint(p.id);
                            }}
                            className={cn(
                              "group relative rounded-2xl border p-7 sm:p-8 text-left transition-all duration-300 bg-white",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="flex items-start gap-6">
                              <div
                                className={cn(
                                  "relative shrink-0 w-24 h-24 rounded-2xl border overflow-hidden bg-white",
                                  selected ? "border-[#1e40af]" : "border-[#e2e8f0]"
                                )}
                              >
                                <div className="absolute inset-0 p-4">
                                  <BlueprintDiagram
                                    type={p.blueprint}
                                    className="w-full h-full"
                                    accent="architect"
                                    animate={selected && selectedBlueprint === p.id}
                                  />
                                </div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-4">
                                  <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a]">
                                    {p.label}
                                  </h3>
                                  {selected && (
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1e40af]"
                                    >
                                      <Check className="h-4 w-4" />
                                    </motion.div>
                                  )}
                                </div>
                                <p className="mt-2 text-[#64748b] font-light">{p.description}</p>
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "vitrage" && (
                    <motion.div
                      key="vitrage"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {vitrageCards.map((v) => {
                        const selected = state.vitrage?.includes(v.id);
                        const Icon = v.icon;
                        return (
                          <motion.button
                            key={v.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({
                                ...s,
                                vitrage: selected
                                  ? (s.vitrage || []).filter((x) => x !== v.id)
                                  : [...(s.vitrage || []), v.id],
                              }));
                            }}
                            className={cn(
                              "relative rounded-2xl border p-8 text-left transition-all duration-300 bg-white",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="flex items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl border border-[#e2e8f0] bg-[#f9fafb] flex items-center justify-center mb-4">
                                  <Icon className="h-6 w-6 text-[#1e40af]" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] mb-2">
                                  {v.label}
                                </h3>
                                <p className="text-[#64748b] font-light text-sm">{v.description}</p>
                              </div>
                              {selected && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1e40af]"
                                >
                                  <Check className="h-4 w-4" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "finitions" && (
                    <motion.div
                      key="finitions"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {finitionCards.map((f) => {
                        const selected = state.finitions === f.id;
                        return (
                          <motion.button
                            key={f.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({ ...s, finitions: f.id }));
                            }}
                            className={cn(
                              "relative rounded-2xl overflow-hidden border transition-all duration-300",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="relative h-48">
                              <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${f.texture})` }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/95" />
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] mb-2">
                                {f.label}
                              </h3>
                              <p className="text-[#64748b] font-light text-sm">{f.description}</p>
                              {selected && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1e40af]"
                                >
                                  <Check className="h-4 w-4" />
                                  Sélectionné
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "accessoires" && (
                    <motion.div
                      key="accessoires"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {accessoireCards.map((a) => {
                        const selected = state.accessoires.includes(a.id);
                        const Icon = a.icon;
                        return (
                          <motion.button
                            key={a.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({
                                ...s,
                                accessoires: selected
                                  ? s.accessoires.filter((x) => x !== a.id)
                                  : [...s.accessoires, a.id],
                              }));
                            }}
                            className={cn(
                              "relative rounded-2xl border p-8 text-left transition-all duration-300 bg-white",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="flex items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="w-12 h-12 rounded-xl border border-[#e2e8f0] bg-[#f9fafb] flex items-center justify-center mb-4">
                                  <Icon className="h-6 w-6 text-[#1e40af]" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] mb-2">
                                  {a.label}
                                </h3>
                                <p className="text-[#64748b] font-light text-sm">{a.description}</p>
                              </div>
                              {selected && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1e40af]"
                                >
                                  <Check className="h-4 w-4" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "project" && (
                    <motion.div
                      key="project"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {projectCards.map((p) => {
                        const selected = state.project === p.id;
                        const Icon = p.icon;
                        return (
                          <motion.button
                            key={p.id}
                            type="button"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setState((s) => ({ ...s, project: p.id }));
                            }}
                            className={cn(
                              "relative rounded-2xl border p-8 text-left transition-all duration-300 bg-white",
                              selected
                                ? "border-[#1e40af] shadow-ultra-soft"
                                : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft"
                            )}
                          >
                            <div className="flex items-start justify-between gap-6">
                              <div>
                                <h3 className="text-2xl font-bold tracking-tight text-[#0a0a0a]">
                                  {p.label}
                                </h3>
                                <p className="mt-3 text-[#64748b] font-light">{p.description}</p>
                              </div>
                              <div className="w-12 h-12 rounded-2xl border border-[#e2e8f0] bg-white flex items-center justify-center">
                                <Icon
                                  className={cn("h-5 w-5", selected ? "text-[#1e40af]" : "text-[#94a3b8]")}
                                />
                              </div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}

                  {step.id === "contact" && (
                    <motion.div
                      key="contact"
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-10"
                    >
                      {submitted ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="rounded-2xl bg-white border border-[#e2e8f0] text-[#0a0a0a] p-10"
                        >
                          <p className="text-sm text-[#64748b] font-light mb-2">Merci</p>
                          <h3 className="text-3xl font-bold tracking-tight">Demande envoyée.</h3>
                          <p className="mt-3 text-[#64748b] font-light">
                            Nous revenons vers vous très vite pour affiner votre configuration.
                          </p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <LineField
                              label="Nom complet"
                              icon={<User className="h-4 w-4" />}
                              value={state.name}
                              placeholder="Jean Dupont"
                              error={touched.name ? errors.name : undefined}
                              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                              onChange={(v) => setState((s) => ({ ...s, name: v }))}
                            />
                            <LineField
                              label="Téléphone"
                              icon={<Phone className="h-4 w-4" />}
                              value={state.phone}
                              placeholder="+32 4xx xx xx xx"
                              error={touched.phone ? errors.phone : undefined}
                              onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                              onChange={(v) => setState((s) => ({ ...s, phone: v }))}
                            />
                          </div>
                          <LineField
                            label="Email"
                            icon={<Mail className="h-4 w-4" />}
                            value={state.email}
                            placeholder="jean.dupont@example.com"
                            error={touched.email ? errors.email : undefined}
                            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                            onChange={(v) => setState((s) => ({ ...s, email: v }))}
                          />

                          <div>
                            <label className="block text-sm font-medium text-[#64748b] mb-2">
                              Message (optionnel)
                            </label>
                            <textarea
                              value={state.message}
                              onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                              rows={5}
                              className={cn(
                                "w-full bg-transparent outline-none resize-none text-[#0a0a0a] placeholder:text-[#94a3b8]",
                                "border-b border-[#e2e8f0] focus:border-[#1e40af] transition-colors pb-4"
                              )}
                              placeholder="Quelques détails (mesures approximatives, contraintes, timing...)"
                            />
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 flex items-center justify-between gap-4 pt-8 border-t border-[#e2e8f0]">
                  {stepIndex > 0 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 rounded-xl"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Retour
                    </Button>
                  )}
                  <div className="flex-1" />
                  {stepIndex < steps.length - 1 ? (
                    <motion.div
                      initial={false}
                      animate={{ opacity: canProceed ? 1 : 0.5, pointerEvents: canProceed ? "auto" : "none" }}
                    >
                      <Button
                        type="button"
                        onClick={nextStep}
                        variant="primary"
                        size="lg"
                        className="px-8 py-4 rounded-xl"
                        disabled={!canProceed}
                      >
                        Continuer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={false}
                      animate={{ opacity: canProceed ? 1 : 0.5, pointerEvents: canProceed ? "auto" : "none" }}
                    >
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="px-8 py-4 rounded-xl"
                        disabled={!canProceed || submitting}
                      >
                        {submitting ? (
                          "Envoi en cours..."
                        ) : (
                          <>
                            Envoyer la demande
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>

            {/* Section réassurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-[#94a3b8] font-light">
                Votre configuration sera analysée sous 24h par notre bureau technique de Wavre.
              </p>
            </motion.div>
          </div>

          {/* Summary sidebar - Sticky */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sticky top-24 rounded-2xl bg-[#f9fafb] border border-[#e2e8f0] p-8"
            >
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a0a] mb-6">Résumé</h3>
              <div className="space-y-4">
                {summary.materialLabel && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Matériau</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.materialLabel}</p>
                    </div>
                  </div>
                )}
                {summary.productLabels.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Produits</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.productLabels.join(", ")}</p>
                    </div>
                  </div>
                )}
                {summary.vitrageLabels && summary.vitrageLabels.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Sun className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Vitrage</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.vitrageLabels.join(", ")}</p>
                    </div>
                  </div>
                )}
                {summary.finitionLabel && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <TreePine className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Finition</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.finitionLabel}</p>
                    </div>
                  </div>
                )}
                {summary.accessoireLabels.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Accessoires</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.accessoireLabels.join(", ")}</p>
                    </div>
                  </div>
                )}
                {summary.projectLabel && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-[#1e40af]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#94a3b8] font-light mb-1">Projet</p>
                      <p className="text-sm font-medium text-[#0a0a0a]">{summary.projectLabel}</p>
                    </div>
                  </div>
                )}
                {!summary.materialLabel &&
                  summary.productLabels.length === 0 &&
                  !summary.finitionLabel &&
                  summary.accessoireLabels.length === 0 &&
                  !summary.projectLabel && (
                    <p className="text-sm text-[#94a3b8] font-light">Votre configuration apparaîtra ici</p>
                  )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
