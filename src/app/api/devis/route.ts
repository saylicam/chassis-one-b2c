import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LABELS: Record<string, Record<string, string>> = {
  project: {
    renovation: "Rénovation / Remplacement",
    neuf: "Nouvelle Construction / Extension",
  },
  priority: {
    chaleur: "Chaleur & Économies d'énergie",
    silence: "Silence & Calme",
    securite: "Sécurité Anti-effraction",
    luminosite: "Luminosité & Confort solaire",
  },
  element: {
    fenetres: "Fenêtres & Portes-fenêtres",
    "porte-entree": "Porte d'Entrée",
    baies: "Baies Coulissantes",
    volets: "Volets & Protections",
  },
  material: {
    pvc: "PVC Haute Isolation",
    aluminium: "Aluminium Architectural",
    conseil: "Conseillez-moi lors du métré gratuit",
  },
  volume: {
    "1-3": "1 à 3 châssis",
    "4-8": "4 à 8 châssis",
    "maison-complete": "Maison complète (+8 châssis)",
  },
};

type DevisPayload = {
  project: string;
  priorities: string[];
  elements: string[];
  material: string;
  volume: string;
  name: string;
  phone: string;
  email: string;
  postalCode: string;
  message?: string;
};

function label(map: Record<string, string>, key: string) {
  return map[key] ?? key;
}

function buildEmailHtml(data: DevisPayload, submittedAt: string) {
  const priorities = data.priorities.map((p) => label(LABELS.priority, p)).join(", ") || "—";
  const elements = data.elements.map((e) => label(LABELS.element, e)).join(", ") || "—";

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #0a0a0a; line-height: 1.6;">
  <h2 style="color: #1e40af;">Nouvelle demande de devis — Châssis One</h2>
  <p><strong>Reçue le :</strong> ${submittedAt}</p>
  <hr>
  <h3>Projet</h3>
  <ul>
    <li><strong>Type :</strong> ${label(LABELS.project, data.project)}</li>
    <li><strong>Volume :</strong> ${label(LABELS.volume, data.volume)}</li>
  </ul>
  <h3>Priorités de confort</h3>
  <p>${priorities}</p>
  <h3>Éléments concernés</h3>
  <p>${elements}</p>
  <h3>Matériau souhaité</h3>
  <p>${label(LABELS.material, data.material)}</p>
  <hr>
  <h3>Coordonnées client</h3>
  <ul>
    <li><strong>Nom :</strong> ${data.name}</li>
    <li><strong>Téléphone :</strong> ${data.phone}</li>
    <li><strong>Email :</strong> ${data.email}</li>
    <li><strong>Code postal / Commune :</strong> ${data.postalCode}</li>
  </ul>
  ${data.message ? `<h3>Message / Précisions</h3><p>${data.message.replace(/\n/g, "<br>")}</p>` : ""}
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const data: DevisPayload = await request.json();

    const required = ["project", "material", "volume", "name", "phone", "email", "postalCode"] as const;
    for (const field of required) {
      if (!data[field]?.toString().trim()) {
        return NextResponse.json({ error: `Champ requis manquant : ${field}` }, { status: 400 });
      }
    }

    if (!Array.isArray(data.priorities) || data.priorities.length === 0) {
      return NextResponse.json({ error: "Au moins une priorité est requise" }, { status: 400 });
    }

    if (!Array.isArray(data.elements) || data.elements.length === 0) {
      return NextResponse.json({ error: "Au moins un élément est requis" }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("fr-BE", {
      timeZone: "Europe/Brussels",
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = buildEmailHtml(data, submittedAt);
    const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("[api/devis] Configuration SMTP manquante (SMTP_HOST, SMTP_USER, SMTP_PASS)");
      return NextResponse.json(
        { error: "Service d'envoi non configuré. Contactez l'administrateur." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? `"Châssis One" <${user}>`,
      to: "info@chassisone.com",
      replyTo: data.email,
      subject: `[Devis] ${data.name} — ${label(LABELS.project, data.project)}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/devis] Erreur d'envoi :", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de la demande" }, { status: 500 });
  }
}
