import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Política de Privacidad — ${SITE_CONFIG.name}`,
  description: "Información sobre el tratamiento de datos en el sitio web de Secretos de Belleza.",
};

export default function PrivacidadPage() {
  return (
    <main className="container-page py-20 md:py-28 max-w-2xl">
      <Link
        href="/"
        className="text-label text-primary hover:underline mb-10 inline-block"
      >
        ← Volver al inicio
      </Link>

      <h1 className="font-serif text-display-mob text-on-surface mb-4">
        Política de Privacidad
      </h1>
      <p className="text-body-sm text-on-surface-variant mb-12">
        Última actualización: julio de 2026
      </p>

      <div className="prose-content">
        <Section title="1. ¿Recopilamos tus datos?">
          <p>
            No. Este sitio web no cuenta con formularios de registro, suscripción
            ni ningún mecanismo de recolección de datos personales. No almacenamos
            nombres, correos electrónicos, teléfonos ni ninguna otra información
            de quienes visitan el sitio.
          </p>
        </Section>

        <Section title="2. Links a servicios externos">
          <p>
            El sitio incluye links a WhatsApp e Instagram. Al hacer clic en ellos
            salís de este sitio y quedás sujeto a las políticas de privacidad de
            cada plataforma:
          </p>
          <ul>
            <li>
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Política de privacidad de WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Política de privacidad de Instagram
              </a>
            </li>
          </ul>
        </Section>

        <Section title="3. Cookies">
          <p>
            Este sitio no utiliza cookies propias ni de seguimiento. Si en el
            futuro se integra alguna herramienta de analítica, esta política
            se actualizará con anticipación.
          </p>
        </Section>

        <Section title="4. Contacto">
          <p>
            Ante cualquier consulta sobre privacidad podés escribirnos por
            WhatsApp al{" "}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {SITE_CONFIG.whatsappDisplay}
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-headline-sm text-on-surface mb-3">
        {title}
      </h2>
      <div className="text-body-md text-on-surface-variant space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
