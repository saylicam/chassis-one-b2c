"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Card from "@/components/ui/Card";
import WindowBlueprint from "@/components/ui/WindowBlueprint";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  material: string;
  projectType: string;
  windowType: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

const materials = [
  { id: "pvc", label: "PVC", description: "Isolation optimale, entretien minimal" },
  { id: "aluminium", label: "Aluminium", description: "Design moderne, résistance maximale" },
];

const projectTypes = [
  { id: "chassis", label: "Châssis / Fenêtres" },
  { id: "portes", label: "Portes d'Entrée" },
  { id: "volets", label: "Volets Roulants" },
  { id: "moustiquaires", label: "Moustiquaires" },
];

const windowTypes = [
  {
    id: "fenetre-simple",
    label: "Fenêtre Simple",
    description: "4 vantaux, ouverture classique",
  },
  {
    id: "fenetre-double",
    label: "Fenêtre Double",
    description: "6 vantaux, grande luminosité",
  },
  {
    id: "porte-fenetre",
    label: "Porte-Fenêtre",
    description: "2 vantaux, accès terrasse/jardin",
  },
  {
    id: "porte-entree",
    label: "Porte d'Entrée",
    description: "Sécurité renforcée, isolation optimale",
  },
];

export default function ConversionForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    material: "",
    projectType: "",
    windowType: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate total steps dynamically (skip step 3 if not chassis)
  const totalSteps = formData.projectType === "chassis" ? 5 : 4;
  // Adjust current step for progress calculation (if we're past step 3 and projectType is not chassis, we're actually at step 4)
  const adjustedStep = currentStep === 4 && formData.projectType !== "chassis" ? 3 : currentStep;
  const progress = (adjustedStep / totalSteps) * 100;

  const validateStep = (step: Step): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !formData.material) {
      newErrors.material = "Veuillez sélectionner un matériau";
    }

    if (step === 2 && !formData.projectType) {
      newErrors.projectType = "Veuillez sélectionner un type de projet";
    }

    if (step === 3 && formData.projectType === "chassis" && !formData.windowType) {
      newErrors.windowType = "Veuillez sélectionner un type de fenêtre";
    }

    if (step === 4) {
      if (!formData.name.trim()) newErrors.name = "Le nom est requis";
      if (!formData.phone.trim()) {
        newErrors.phone = "Le téléphone est requis";
      } else if (!/^[\d\s\+\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Numéro invalide";
      }
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email invalide";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        let next = currentStep + 1;
        // Skip step 3 (window type) if project type is not chassis
        if (next === 3 && formData.projectType !== "chassis") {
          next = 4;
        }
        setCurrentStep(next as Step);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateStep(5)) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setCurrentStep(1);
        setFormData({
          material: "",
          projectType: "",
          windowType: "",
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }, 5000);
    }
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return (
      <section className="py-32 lg:py-48 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card variant="elevated" className="text-center py-16 px-8 rounded-[3rem]">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="mb-8"
              >
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
              </motion.div>
              <h3 className="text-3xl font-bold text-[#0a0a0a] mb-6">
                Demande envoyée avec succès !
              </h3>
              <p className="text-xl text-[#475569] mb-8 font-light">
                Nous vous contacterons dans les plus brefs délais pour discuter
                de votre projet.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 lg:py-48 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] min-h-screen">
      <div className="mx-auto max-w-4xl px-8 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Diagnostic & Devis Gratuit
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Un parcours simple et visuel pour obtenir votre devis personnalisé
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white/80 font-medium">Étape {adjustedStep} sur {totalSteps}</span>
            <span className="text-white/80 font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>

        <Card variant="elevated" className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-ultra-soft-hover">
          <AnimatePresence mode="wait" custom={1}>
            {/* Step 1: Material */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
                  Quel matériau vous intéresse ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {materials.map((material) => (
                    <motion.button
                      key={material.id}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, material: material.id }));
                        setErrors((prev) => ({ ...prev, material: "" }));
                      }}
                      className={`p-8 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group ${
                        formData.material === material.id
                          ? "border-[#1e40af] bg-[#1e40af]/5 shadow-ultra-soft-hover"
                          : "border-[#e2e8f0] hover:border-[#1e40af]/30 hover:shadow-ultra-soft"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/0 to-[#1e40af]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <h4 className="text-2xl font-bold text-[#0a0a0a] mb-2 relative z-10">
                        {material.label}
                      </h4>
                      <p className="text-[#475569] font-light relative z-10">
                        {material.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
                {errors.material && (
                  <p className="text-red-500 text-center">{errors.material}</p>
                )}
                <div className="flex justify-end">
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Type */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
                  Quel type de projet ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, projectType: type.id }));
                        setErrors((prev) => ({ ...prev, projectType: "" }));
                      }}
                      className={`p-8 rounded-3xl border-2 transition-all duration-300 text-left ${
                        formData.projectType === type.id
                          ? "border-[#1e40af] bg-[#1e40af]/5 shadow-ultra-soft-hover"
                          : "border-[#e2e8f0] hover:border-[#1e40af]/30 hover:shadow-ultra-soft"
                      }`}
                    >
                      <span className="text-xl font-semibold text-[#0a0a0a]">
                        {type.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-center">{errors.projectType}</p>
                )}
                <div className="flex justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Window Type (if chassis selected) */}
            {currentStep === 3 && formData.projectType === "chassis" && (
              <motion.div
                key="step3"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
                  Sélectionnez votre type de fenêtre
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {windowTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, windowType: type.id }));
                        setErrors((prev) => ({ ...prev, windowType: "" }));
                      }}
                      className={`p-8 rounded-3xl border-2 transition-all duration-300 text-left ${
                        formData.windowType === type.id
                          ? "border-[#1e40af] bg-[#1e40af]/5 shadow-ultra-soft-hover"
                          : "border-[#e2e8f0] hover:border-[#1e40af]/30 hover:shadow-ultra-soft"
                      }`}
                    >
                      <div className="h-40 mb-4 text-[#1e40af] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-4 flex items-center justify-center">
                        <WindowBlueprint type={type.id as any} className="w-full h-full" />
                      </div>
                      <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2">
                        {type.label}
                      </h4>
                      <p className="text-sm text-[#64748b] font-light">
                        {type.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
                {errors.windowType && (
                  <p className="text-red-500 text-center">{errors.windowType}</p>
                )}
                <div className="flex justify-between">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
                  Vos coordonnées
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nom complet *"
                    name="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, name: e.target.value }));
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    error={errors.name}
                    placeholder="Jean Dupont"
                  />
                  <Input
                    label="Téléphone *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, phone: e.target.value }));
                      setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    error={errors.phone}
                    placeholder="+32 123 45 67 89"
                  />
                </div>
                <Input
                  label="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }));
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  error={errors.email}
                  placeholder="jean.dupont@example.com"
                />
                <div className="flex justify-between pt-4">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour
                  </Button>
                  <Button
                    onClick={nextStep}
                    variant="primary"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    Continuer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Message & Submit */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                custom={1}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
                  Décrivez votre projet
                </h3>
                <Textarea
                  label="Message (optionnel)"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Parlez-nous de votre projet, vos besoins, vos questions..."
                  rows={6}
                />
                <div className="flex justify-between pt-4">
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    size="lg"
                    className="px-10 py-6 rounded-2xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer la demande
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}
