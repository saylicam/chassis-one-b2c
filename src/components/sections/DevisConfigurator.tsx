"use client";

import { FormEvent, useMemo, useState, type ComponentType, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  Thermometer,
  Shield,
  Sun,
  Volume2,
  Home,
  Building2,
  DoorOpen,
  PanelTop,
  Layers,
  Loader2,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type StepId = "project" | "priorities" | "elements" | "material" | "volume" | "contact";

type ProjectId = "renovation" | "neuf";
type PriorityId = "chaleur" | "silence" | "securite" | "luminosite";
type ElementId = "fenetres" | "porte-entree" | "baies" | "volets";
type MaterialId = "pvc" | "aluminium" | "conseil";
type VolumeId = "1-3" | "4-8" | "maison-complete";

type FormState = {
  project?: ProjectId;
  priorities: PriorityId[];
  elements: ElementId[];
  material?: MaterialId;
  volume?: VolumeId;
  name: string;
  phone: string;
  email: string;
  postalCode: string;
  message: string;
};

const steps: { id: StepId; title: string; subtitle: string }[] = [
  {
    id: "project",
    title: "Votre Projet",
    subtitle: "Quel type de projet envisagez-vous ?",
  },
  {
    id: "priorities",
    title: "Vos Priorités de Confort",
    subtitle: "Sélectionnez ce qui compte le plus pour vous (plusieurs choix possibles).",
  },
  {
    id: "elements",
    title: "Éléments Concernés",
    subtitle: "Quels éléments souhaitez-vous remplacer ou installer ?",
  },
  {
    id: "material",
    title: "Choix du Matériau",
    subtitle: "Quel matériau vous correspond le mieux ?",
  },
  {
    id: "volume",
    title: "Estimation du Volume",
    subtitle: "Combien de châssis sont concernés par votre projet ?",
  },
  {
    id: "contact",
    title: "Vos Coordonnées & Prise de Rendez-vous",
    subtitle: "Laissez-nous vos coordonnées pour organiser votre métré gratuit.",
  },
];

const projectCards: {
  id: ProjectId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "renovation",
    label: "Rénovation / Remplacement",
    description: "Amélioration thermique et remplacement d'anciens châssis.",
    icon: Home,
  },
  {
    id: "neuf",
    label: "Nouvelle Construction / Extension",
    description: "Projet neuf ou extension avec optimisation dès la conception.",
    icon: Building2,
  },
];

const priorityCards: {
  id: PriorityId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "chaleur",
    label: "Chaleur & Économies d'énergie",
    description: "Isolation thermique maximale, primes régionales.",
    icon: Thermometer,
  },
  {
    id: "silence",
    label: "Silence & Calme",
    description: "Isolation acoustique anti-bruit de rue.",
    icon: Volume2,
  },
  {
    id: "securite",
    label: "Sécurité Anti-effraction",
    description: "Fermetures multipoints et vitrage renforcé.",
    icon: Shield,
  },
  {
    id: "luminosite",
    label: "Luminosité & Confort solaire",
    description: "Apport de lumière sans surchauffe en été.",
    icon: Sun,
  },
];

const elementCards: {
  id: ElementId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "fenetres",
    label: "Fenêtres & Portes-fenêtres",
    description: "Ouvrants, oscillo-battants, fixes.",
    icon: PanelTop,
  },
  {
    id: "porte-entree",
    label: "Porte d'Entrée",
    description: "Sécurité, isolation et design d'accueil.",
    icon: DoorOpen,
  },
  {
    id: "baies",
    label: "Baies Coulissantes",
    description: "Grands apports de lumière, ouvertures généreuses.",
    icon: Layers,
  },
  {
    id: "volets",
    label: "Volets & Protections",
    description: "Confort, protection solaire et sécurité.",
    icon: Shield,
  },
];

const materialCards: {
  id: MaterialId;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    id: "pvc",
    label: "PVC Haute Isolation",
    description: "Idéal rénovation, entretien zéro, rapport qualité/prix optimal.",
    icon: Thermometer,
  },
  {
    id: "aluminium",
    label: "Aluminium Architectural",
    description: "Profilés fins et rigidité pour grandes ouvertures.",
    icon: Layers,
  },
  {
    id: "conseil",
    label: "Conseillez-moi lors du métré gratuit",
    description: "Laissez le choix à l'expert à domicile.",
    icon: Sparkles,
  },
];

const volumeCards: {
  id: VolumeId;
  label: string;
  description: string;
}[] = [
  { id: "1-3", label: "1 à 3 châssis", description: "Quelques ouvertures à remplacer." },
  { id: "4-8", label: "4 à 8 châssis", description: "Projet intermédiaire, plusieurs pièces." },
  { id: "maison-complete", label: "Maison complète (+8 châssis)", description: "Rénovation ou construction globale." },
];

const initialState: FormState = {
  priorities: [],
  elements: [],
  name: "",
  phone: "",
  email: "",
  postalCode: "",
  message: "",
};

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
  type = "text",
}: {
  label: string;
  icon: ReactNode;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#64748b] mb-2">{label}</label>
      <div className="relative flex items-center gap-3 pb-3 border-b border-[#e2e8f0] focus-within:border-[#1e40af] transition-colors">
        <div className="text-[#94a3b8]">{icon}</div>
        <input
          type={type}
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

function SummaryItem({ label, value, icon: Icon }: { label: string; value: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded border border-[#e2e8f0] bg-white flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="h-3 w-3 text-[#1e40af]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-[#94a3b8] font-light mb-1">{label}</p>
        <p className="text-sm font-medium text-[#0a0a0a]">{value}</p>
      </div>
    </div>
  );
}

export default function DevisConfigurator() {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<FormState>(initialState);

  const step = steps[stepIndex];
  const progress = clampProgress(((stepIndex + 1) / steps.length) * 100);

  const summary = useMemo(() => {
    const projectLabel = state.project
      ? projectCards.find((p) => p.id === state.project)?.label
      : undefined;

    const priorityLabels = state.priorities
      .map((p) => priorityCards.find((x) => x.id === p)?.label)
      .filter(Boolean) as string[];

    const elementLabels = state.elements
      .map((e) => elementCards.find((x) => x.id === e)?.label)
      .filter(Boolean) as string[];

    const materialLabel = state.material
      ? materialCards.find((m) => m.id === state.material)?.label
      : undefined;

    const volumeLabel = state.volume
      ? volumeCards.find((v) => v.id === state.volume)?.label
      : undefined;

    return { projectLabel, priorityLabels, elementLabels, materialLabel, volumeLabel };
  }, [state]);

  const hasSummary =
    !!summary.projectLabel ||
    summary.priorityLabels.length > 0 ||
    summary.elementLabels.length > 0 ||
    !!summary.materialLabel ||
    !!summary.volumeLabel;

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (touched.name && !state.name.trim()) e.name = "Nom requis";
    if (touched.phone && !isValidPhone(state.phone)) e.phone = "Téléphone invalide";
    if (touched.email && !isValidEmail(state.email)) e.email = "Email invalide";
    if (touched.postalCode && !state.postalCode.trim()) e.postalCode = "Code postal requis";
    return e;
  }, [state, touched]);

  const canProceed = useMemo(() => {
    if (step.id === "project") return !!state.project;
    if (step.id === "priorities") return state.priorities.length > 0;
    if (step.id === "elements") return state.elements.length > 0;
    if (step.id === "material") return !!state.material;
    if (step.id === "volume") return !!state.volume;
    if (step.id === "contact") {
      return !!(
        state.name.trim() &&
        isValidPhone(state.phone) &&
        isValidEmail(state.email) &&
        state.postalCode.trim()
      );
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

  const toggleMulti = <T extends string>(field: "priorities" | "elements", id: T) => {
    setState((s) => {
      const current = s[field] as T[];
      const selected = current.includes(id);
      return {
        ...s,
        [field]: selected ? current.filter((x) => x !== id) : [...current, id],
      };
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canProceed || submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project: state.project,
          priorities: state.priorities,
          elements: state.elements,
          material: state.material,
          volume: state.volume,
          name: state.name.trim(),
          phone: state.phone.trim(),
          email: state.email.trim(),
          postalCode: state.postalCode.trim(),
          message: state.message.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  const variants = {
    enter: (dir: 1 | -1) => ({ x: dir > 0 ? 20 : -20, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({ x: dir > 0 ? -20 : 20, opacity: 0 }),
  };

  const renderSelectionCard = ({
    cardKey,
    selected,
    onClick,
    children,
    className,
  }: {
    cardKey: string;
    selected: boolean;
    onClick: () => void;
    children: ReactNode;
    className?: string;
  }) => (
    <motion.button
      key={cardKey}
      type="button"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative text-left rounded-2xl border transition-all duration-300 bg-white",
        selected
          ? "border-[#1e40af] shadow-ultra-soft"
          : "border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-ultra-soft",
        className
      )}
    >
      {children}
      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 inline-flex items-center gap-1 text-sm font-medium text-[#1e40af]"
        >
          <Check className="h-4 w-4" />
        </motion.div>
      )}
    </motion.button>
  );

  if (submitted) {
    return (
      <section className="min-h-[calc(100vh-80px)] bg-white flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-8">
            <Check className="h-8 w-8 text-[#1e40af]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-4">
            Votre demande de devis a bien été transmise !
          </h1>
          <p className="text-lg text-[#64748b] font-light leading-relaxed">
            Un conseiller Châssis One vous contactera sous 24 à 48h pour fixer votre métré gratuit.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-80px)] bg-white">
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
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0a0a0a] mb-4">
                Votre projet, étape par étape
              </h1>
              <p className="text-lg text-[#64748b] font-light max-w-2xl leading-relaxed">
                Un parcours simple orienté vers vos besoins pour obtenir un devis personnalisé et un métré gratuit à domicile.
              </p>
            </motion.div>

            <div className="rounded-2xl bg-white border border-[#e2e8f0] shadow-ultra-soft overflow-hidden">
              <form onSubmit={onSubmit} className="relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`step-container-${step.id}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="transition-all duration-200 ease-in-out"
                  >
                    <div className="px-8 sm:px-10 py-8 border-b border-[#e2e8f0]">
                      <p className="text-sm text-[#94a3b8] font-light">
                        Étape {stepIndex + 1} / {steps.length}
                      </p>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#0a0a0a]">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-[#64748b] font-light">{step.subtitle}</p>
                    </div>

                    <div className="p-8 sm:p-10">
                      {step.id === "project" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {projectCards.map((p) => {
                            const selected = state.project === p.id;
                            const Icon = p.icon;
                            return renderSelectionCard({
                              cardKey: `step-${step.id}-${p.id}`,
                              selected,
                              onClick: () => setState((s) => ({ ...s, project: p.id })),
                              className: "p-8",
                              children: (
                                <>
                                  <div className="w-12 h-12 rounded-xl border border-[#e2e8f0] bg-[#f9fafb] flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-[#1e40af]" />
                                  </div>
                                  <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] pr-8">{p.label}</h3>
                                  <p className="mt-2 text-[#64748b] font-light">{p.description}</p>
                                </>
                              ),
                            });
                          })}
                        </div>
                      )}

                      {step.id === "priorities" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {priorityCards.map((p) => {
                            const selected = state.priorities.includes(p.id);
                            const Icon = p.icon;
                            return renderSelectionCard({
                              cardKey: `step-${step.id}-${p.id}`,
                              selected,
                              onClick: () => toggleMulti("priorities", p.id),
                              className: "p-8",
                              children: (
                                <>
                                  <div className="w-12 h-12 rounded-xl border border-[#e2e8f0] bg-[#f9fafb] flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-[#1e40af]" />
                                  </div>
                                  <h3 className="text-lg font-bold tracking-tight text-[#0a0a0a] pr-8">{p.label}</h3>
                                  <p className="mt-2 text-[#64748b] font-light text-sm">{p.description}</p>
                                </>
                              ),
                            });
                          })}
                        </div>
                      )}

                      {step.id === "elements" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {elementCards.map((el) => {
                            const selected = state.elements.includes(el.id);
                            const Icon = el.icon;
                            return renderSelectionCard({
                              cardKey: `step-${step.id}-${el.id}`,
                              selected,
                              onClick: () => toggleMulti("elements", el.id),
                              className: "p-8",
                              children: (
                                <>
                                  <div className="w-12 h-12 rounded-xl border border-[#e2e8f0] bg-[#f9fafb] flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-[#1e40af]" />
                                  </div>
                                  <h3 className="text-lg font-bold tracking-tight text-[#0a0a0a] pr-8">{el.label}</h3>
                                  <p className="mt-2 text-[#64748b] font-light text-sm">{el.description}</p>
                                </>
                              ),
                            });
                          })}
                        </div>
                      )}

                      {step.id === "material" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                          {materialCards.map((m) => {
                            const selected = state.material === m.id;
                            const Icon = m.icon;
                            return (
                              <motion.button
                                key={`step-${step.id}-${m.id}`}
                                type="button"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setState((s) => ({ ...s, material: m.id }))}
                                className={cn(
                                  "relative flex flex-col justify-between p-5 rounded-2xl border-2 transition-all duration-200 min-h-[220px] text-left cursor-pointer bg-white",
                                  selected
                                    ? "border-[#1e40af] shadow-md"
                                    : "border-[#e2e8f0] hover:border-blue-600 hover:shadow-md"
                                )}
                              >
                                <div
                                  className={cn(
                                    "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                    selected
                                      ? "bg-[#1e40af] text-white"
                                      : "bg-slate-100 text-slate-400"
                                  )}
                                >
                                  {selected ? (
                                    <Check className="h-4 w-4" />
                                  ) : (
                                    <Icon className="h-4 w-4" />
                                  )}
                                </div>

                                <div className="flex flex-col h-full justify-between pr-10">
                                  <div>
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight mb-2">
                                      {m.label}
                                    </h4>
                                  </div>
                                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-auto">
                                    {m.description}
                                  </p>
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      )}

                      {step.id === "volume" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {volumeCards.map((v) => {
                            const selected = state.volume === v.id;
                            return renderSelectionCard({
                              cardKey: `step-${step.id}-${v.id}`,
                              selected,
                              onClick: () => setState((s) => ({ ...s, volume: v.id })),
                              className: "p-8",
                              children: (
                                <>
                                  <h3 className="text-xl font-bold tracking-tight text-[#0a0a0a] pr-8">{v.label}</h3>
                                  <p className="mt-2 text-[#64748b] font-light text-sm">{v.description}</p>
                                </>
                              ),
                            });
                          })}
                        </div>
                      )}

                      {step.id === "contact" && (
                        <div className="space-y-10">
                          <div className="rounded-xl bg-[#f0f7ff] border border-[#bfdbfe] px-6 py-4">
                            <p className="text-sm text-[#1e40af] font-medium">
                              Métré et devis gratuit à domicile sous 48h sans engagement.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <LineField
                              label="Nom complet"
                              icon={<User className="h-4 w-4" />}
                              value={state.name}
                              placeholder="Votre nom"
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

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <LineField
                              label="E-mail"
                              icon={<Mail className="h-4 w-4" />}
                              value={state.email}
                              placeholder="votre@email.com"
                              type="email"
                              error={touched.email ? errors.email : undefined}
                              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                              onChange={(v) => setState((s) => ({ ...s, email: v }))}
                            />
                            <LineField
                              label="Code Postal / Commune"
                              icon={<MapPin className="h-4 w-4" />}
                              value={state.postalCode}
                              placeholder="1300 Wavre"
                              error={touched.postalCode ? errors.postalCode : undefined}
                              onBlur={() => setTouched((t) => ({ ...t, postalCode: true }))}
                              onChange={(v) => setState((s) => ({ ...s, postalCode: v }))}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[#64748b] mb-2">
                              Message / Précisions (optionnel)
                            </label>
                            <textarea
                              value={state.message}
                              onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                              rows={5}
                              className={cn(
                                "w-full bg-transparent outline-none resize-none text-[#0a0a0a] placeholder:text-[#94a3b8]",
                                "border-b border-[#e2e8f0] focus:border-[#1e40af] transition-colors pb-4"
                              )}
                              placeholder="Contraintes, timing, détails sur votre projet..."
                            />
                          </div>

                          {submitError && (
                            <p className="text-sm text-red-500">{submitError}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="px-8 sm:px-10 pb-8 sm:pb-10">
                <div className="mt-12 flex items-center justify-between gap-4 pt-8 border-t border-[#e2e8f0]">
                  {stepIndex > 0 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 rounded-xl"
                      disabled={submitting}
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
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sticky top-24 rounded-2xl bg-[#f9fafb] border border-[#e2e8f0] p-8"
            >
              <h3 className="text-lg font-bold tracking-tight text-[#0a0a0a] mb-6">Résumé</h3>
              <div className="space-y-4">
                {summary.projectLabel && (
                  <SummaryItem label="Projet" value={summary.projectLabel} icon={Home} />
                )}
                {summary.priorityLabels.length > 0 && (
                  <SummaryItem
                    label="Priorités"
                    value={summary.priorityLabels.join(", ")}
                    icon={Sparkles}
                  />
                )}
                {summary.elementLabels.length > 0 && (
                  <SummaryItem
                    label="Éléments"
                    value={summary.elementLabels.join(", ")}
                    icon={Check}
                  />
                )}
                {summary.materialLabel && (
                  <SummaryItem label="Matériau" value={summary.materialLabel} icon={Layers} />
                )}
                {summary.volumeLabel && (
                  <SummaryItem label="Volume" value={summary.volumeLabel} icon={PanelTop} />
                )}
                {!hasSummary && (
                  <p className="text-sm text-[#94a3b8] font-light">
                    Vos choix apparaîtront ici au fur et à mesure.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
