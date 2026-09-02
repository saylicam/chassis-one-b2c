import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Châssis One",
  description:
    "Politique de confidentialité et protection des données personnelles de Châssis One SRL, conforme au RGPD (Règlement UE 2016/679).",
  robots: { index: true, follow: true },
};

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-[#e2e8f0] pb-8 last:border-b-0">
      <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">{title}</h2>
      <div className="space-y-3 text-[#64748b] font-light leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <header className="mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8] font-light mb-3">
              Protection des données
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-[#64748b] font-light leading-relaxed">
              La présente politique décrit la manière dont Châssis One SRL collecte, utilise et
              protège vos données personnelles, conformément au Règlement (UE) 2016/679 du
              Parlement européen et du Conseil du 27 avril 2016 (RGPD) et à la loi belge du 30
              juillet 2018 relative à la protection des personnes physiques à l&apos;égard des
              traitements de données à caractère personnel.
            </p>
          </header>

          <div className="space-y-8">
            <LegalSection title="Responsable du traitement">
              <p>
                <strong className="font-medium text-[#0a0a0a]">Châssis One SRL</strong>
              </p>
              <p>Avenue Vésale 26, 1300 Wavre, Belgique</p>
              <p>
                E-mail :{" "}
                <a href="mailto:info@chassisone.com" className="text-[#1e40af] hover:underline">
                  info@chassisone.com
                </a>
              </p>
              <p>Téléphone : 010 81 67 81</p>
              <p>Numéro d&apos;entreprise / TVA : BE 0476.326.634</p>
            </LegalSection>

            <LegalSection title="Données collectées">
              <p>
                Dans le cadre de l&apos;utilisation de notre site et de nos services, nous sommes
                amenés à collecter les données personnelles suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="font-medium text-[#0a0a0a]">Configurateur de devis</strong>{" "}
                  : nom, adresse e-mail, numéro de téléphone, code postal / commune, type de projet,
                  priorités de confort, éléments concernés (châssis, portes, volets…), choix de
                  matériau, volume estimé et message optionnel.
                </li>
                <li>
                  <strong className="font-medium text-[#0a0a0a]">Formulaire de contact</strong> :
                  nom, adresse e-mail, numéro de téléphone, sujet et contenu du message.
                </li>
              </ul>
              <p>
                Ces données sont fournies volontairement par l&apos;utilisateur lors de la
                soumission d&apos;un formulaire. Aucune donnée sensible au sens du RGPD n&apos;est
                collectée de manière intentionnelle.
              </p>
            </LegalSection>

            <LegalSection title="Finalités du traitement">
              <p>Les données collectées sont traitées exclusivement aux fins suivantes :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Traitement et suivi de votre demande de devis ou de contact ;</li>
                <li>Organisation d&apos;un métré gratuit à domicile ;</li>
                <li>Relation commerciale et suivi de votre projet de châssis, portes ou volets.</li>
              </ul>
              <p>
                <strong className="font-medium text-[#0a0a0a]">
                  Vos données ne font l&apos;objet d&apos;aucune cession, location ni revente à des
                  tiers à des fins commerciales ou publicitaires.
                </strong>
              </p>
              <p>
                Base légale du traitement : exécution de mesures précontractuelles à votre demande
                (article 6.1.b du RGPD) et, le cas échéant, intérêt légitime de Châssis One à
                répondre à vos sollicitations (article 6.1.f du RGPD).
              </p>
            </LegalSection>

            <LegalSection title="Durée de conservation">
              <p>
                Vos données personnelles sont conservées pendant la durée strictement nécessaire au
                suivi commercial de votre dossier, et au maximum pendant une période de trois (3)
                ans à compter du dernier contact, sauf obligation légale de conservation plus
                longue (notamment en matière comptable ou fiscale).
              </p>
              <p>
                À l&apos;issue de cette période, vos données sont supprimées ou anonymisées de
                manière irréversible.
              </p>
            </LegalSection>

            <LegalSection title="Destinataires des données">
              <p>
                Les données sont accessibles uniquement aux collaborateurs habilités de Châssis One
                SRL dans le cadre de leurs fonctions. Elles peuvent être transmises à nos
                sous-traitants techniques strictement nécessaires au fonctionnement du site
                (hébergement, envoi d&apos;e-mails), dans le respect du RGPD et sous contrat de
                sous-traitance approprié.
              </p>
            </LegalSection>

            <LegalSection title="Vos droits">
              <p>
                Conformément au RGPD, vous disposez des droits suivants concernant vos données
                personnelles :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Droit d&apos;accès et de consultation ;</li>
                <li>Droit de rectification des données inexactes ou incomplètes ;</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli ») ;</li>
                <li>Droit à la limitation du traitement ;</li>
                <li>Droit d&apos;opposition au traitement ;</li>
                <li>Droit à la portabilité de vos données, le cas échéant.</li>
              </ul>
              <p>
                Pour exercer ces droits, adressez votre demande par e-mail à{" "}
                <a href="mailto:info@chassisone.com" className="text-[#1e40af] hover:underline">
                  info@chassisone.com
                </a>
                , en joignant une copie de votre pièce d&apos;identité si nécessaire. Nous nous
                engageons à répondre dans un délai d&apos;un mois conformément à l&apos;article 12
                du RGPD.
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
                réclamation auprès de l&apos;Autorité de protection des données (APD/GBA) :
              </p>
              <p>
                <strong className="font-medium text-[#0a0a0a]">
                  Autorité de protection des données (APD/GBA)
                </strong>
                <br />
                Rue de la Presse 35, 1000 Bruxelles, Belgique
                <br />
                <a
                  href="https://www.autoriteprotectiondonnees.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e40af] hover:underline"
                >
                  www.autoriteprotectiondonnees.be
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Cookies et traceurs">
              <p>
                Le site{" "}
                <Link href="/" className="text-[#1e40af] hover:underline">
                  www.chassisone.com
                </Link>{" "}
                n&apos;utilise <strong className="font-medium text-[#0a0a0a]">aucun cookie
                publicitaire intrusif</strong> ni traceur de profilage nécessitant un consentement
                préalable au sens de la législation belge et européenne (ePrivacy / RGPD).
              </p>
              <p>
                Seuls des cookies strictement nécessaires au bon fonctionnement technique du site
                peuvent être déposés (par exemple, cookies de session ou de préférences
                d&apos;affichage). Ces cookies ne requièrent pas de bannière de consentement
                préalable.
              </p>
              <p>
                Vous pouvez à tout moment configurer votre navigateur pour refuser ou supprimer les
                cookies via les paramètres de celui-ci.
              </p>
            </LegalSection>

            <LegalSection title="Sécurité">
              <p>
                Châssis One SRL met en œuvre les mesures techniques et organisationnelles
                appropriées pour protéger vos données personnelles contre la destruction accidentelle
                ou illicite, la perte, l&apos;altération, la divulgation ou l&apos;accès non
                autorisé.
              </p>
            </LegalSection>

            <LegalSection title="Modifications">
              <p>
                La présente politique de confidentialité peut être mise à jour à tout moment pour
                refléter les évolutions légales ou techniques. La version en vigueur est celle
                publiée sur cette page. Nous vous invitons à la consulter régulièrement.
              </p>
            </LegalSection>
          </div>

          <p className="mt-12 text-xs text-[#94a3b8] font-light">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-BE", { year: "numeric", month: "long" })}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
