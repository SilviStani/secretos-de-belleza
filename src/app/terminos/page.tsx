import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Términos y Condiciones — ${SITE_CONFIG.name}`,
  description: "Términos y condiciones de uso del sitio web de Secretos de Belleza.",
};

export default function TerminosPage() {
  return (
    <main className="container-page py-20 md:py-28 max-w-2xl">
      <Link
        href="/"
        className="text-label text-primary hover:underline mb-10 inline-block"
      >
        ← Volver al inicio
      </Link>

      <h1 className="font-serif text-display-mob text-on-surface mb-4">
        Términos y Condiciones
      </h1>
      <p className="text-body-sm text-on-surface-variant mb-12">
        Última actualización: julio de 2026
      </p>

      <div className="prose-content">
        <Section title="1. Uso del sitio">
          <p>
            Este sitio es de carácter informativo. Al visitarlo aceptás que el
            contenido (precios, servicios, horarios) puede cambiar sin previo
            aviso. Para información actualizada, consultá directamente al salón
            por WhatsApp.
          </p>
        </Section>

        <Section title="2. Precios">
          <p>
            Los precios publicados en este sitio son orientativos y están
            expresados en pesos argentinos (ARS). El precio final puede variar
            según las características del servicio. Confirmá el valor antes de
            tu turno.
          </p>
        </Section>

        <Section title="3. Turnos y reservas">
          <p>
            Los links de *Consultar* redirigen a WhatsApp para coordinar un
            turno. La reserva se confirma únicamente cuando el salón lo
            notifica explícitamente por ese medio.
          </p>
        </Section>

        <Section title="4. Links externos">
          <p>
            Este sitio puede contener links a plataformas de terceros (WhatsApp,
            Instagram). No somos responsables por el contenido ni las políticas
            de dichas plataformas.
          </p>
        </Section>

        <Section title="5. Propiedad intelectual">
          <p>
            El contenido de este sitio — textos, imágenes y diseño — es propiedad
            de {SITE_CONFIG.name}. Queda prohibida su reproducción parcial o
            total sin autorización expresa.
          </p>
        </Section>

        <Section title="6. Contacto">
          <p>
            Ante cualquier consulta sobre estos términos podés escribirnos por
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
