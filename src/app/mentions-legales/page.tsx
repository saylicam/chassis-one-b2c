import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Mentions légales | Châssis One",
  description:
    "Mentions légales du site chassisone.com — Châssis One SRL, Avenue Vésale 26, 1300 Wavre, Belgique.",
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

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <header className="mb-12 sm:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8] font-light mb-3">
              Informations légales
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-4">
              Mentions légales
            </h1>
            <p className="text-[#64748b] font-light leading-relaxed">
              Conformément à la législation belge en vigueur, notamment la loi du 11 mars 2003
              relative à certains aspects juridiques des services de la société de l&apos;information.
            </p>
          </header>

          <div className="space-y-8">
            <LegalSection title="Éditeur du site">
              <p>
                <strong className="font-medium text-[#0a0a0a]">Châssis One SRL</strong>
              </p>
              <p>Siège d&apos;exploitation : Avenue Vésale 26, 1300 Wavre, Belgique</p>
              <p>
                Téléphone :{" "}
                <a href="tel:+3210816781" className="text-[#1e40af] hover:underline">
                  010 81 67 81
                </a>
              </p>
              <p>
                E-mail :{" "}
                <a href="mailto:info@chassisone.com" className="text-[#1e40af] hover:underline">
                  info@chassisone.com
                </a>
              </p>
              <p>Numéro d&apos;entreprise / TVA : BE 0476.326.634 (RPM Brabant Wallon)</p>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                <strong className="font-medium text-[#0a0a0a]">Vercel Inc.</strong>
              </p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e40af] hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur le site{" "}
                <Link href="/" className="text-[#1e40af] hover:underline">
                  www.chassisone.com
                </Link>{" "}
                (textes, photographies, illustrations, logos, graphismes, icônes, vidéos et
                architecture du site) est la propriété exclusive de Châssis One SRL ou de ses
                partenaires, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation ou
                exploitation, totale ou partielle, de ces éléments, par quelque procédé que ce
                soit, sans l&apos;autorisation écrite préalable de Châssis One SRL, est strictement
                interdite et constituerait une contrefaçon sanctionnée par le Code de droit
                économique belge et les conventions internationales applicables.
              </p>
            </LegalSection>

            <LegalSection title="Responsabilité">
              <p>
                Châssis One SRL s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, elle ne saurait garantir
                l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à
                disposition.
              </p>
              <p>
                Châssis One SRL décline toute responsabilité pour tout dommage résultant d&apos;une
                intrusion d&apos;un tiers ayant entraîné une modification des informations mises à
                disposition sur le site, ou pour tout dommage, direct ou indirect, quelle qu&apos;en
                soit la cause, l&apos;origine, la nature ou les conséquences, provoqué à raison de
                l&apos;accès de quiconque au site ou de l&apos;impossibilité d&apos;y accéder.
              </p>
            </LegalSection>

            <LegalSection title="Liens hypertextes">
              <p>
                Le site peut contenir des liens vers d&apos;autres sites internet. Châssis One SRL
                n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à
                leur contenu ou aux pratiques de confidentialité qui y sont appliquées.
              </p>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <p>
                Les présentes mentions légales sont régies par le droit belge. En cas de litige, et
                à défaut de résolution amiable, les tribunaux de l&apos;arrondissement judiciaire de
                Nivelles seront seuls compétents.
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
