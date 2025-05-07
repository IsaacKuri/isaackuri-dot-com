export default function About({ language }: { language: "en" | "es" }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "About Me" : "Sobre Mí"}
      </h2>
      <p>
        {language === "en" ? (
          <>
            I&apos;m a Full Stack Developer with a strong focus on DevOps, infrastructure, and security.
            Over the past 4 years, I&apos;ve specialized in bringing systems together from the ground up —
            from OS selection and image customization to deployment automation and validation,
            primarily on AWS. My experience includes resolving critical CVEs for SOC 2 compliance,
            which strengthened my cybersecurity expertise. I&apos;m passionate about designing reliable,
            maintainable systems that are secure by default and easy to operate.
          </>
        ) : (
          <>
            Soy un Desarrollador Full Stack con un enfoque sólido en DevOps, infraestructura y seguridad.
            Durante los últimos 4 años, me he especializado en construir sistemas desde cero — desde la elección
            del sistema operativo y la personalización de imágenes, hasta la automatización del despliegue
            y su validación, principalmente en AWS. Tengo experiencia resolviendo CVEs críticos para cumplir con SOC 2,
            lo cual fortaleció mi conocimiento en ciberseguridad. Me apasiona diseñar sistemas confiables,
            mantenibles y seguros.
          </>
        )}
      </p>
    </section>
  );
}
