export default function Experience({ language }: { language: "en" | "es" }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "Experience" : "Experiencia"}
      </h2>

      <div className="mb-4">
        <h3 className="font-medium">
          {language === "en"
            ? "Fanmaker — Full Stack Developer"
            : "Fanmaker — Desarrollador Full Stack"}
        </h3>
        <p className="text-sm text-gray-500">Remote · 2021 – 2025</p>
        <ul className="list-disc list-inside ml-4">
          {language === "en" ? (
            <>
              <li>Developed and maintained backend and frontend applications using Ruby on Rails and React.</li>
              <li>Built check-in kiosks and custom display apps using P5.js for real-time interaction.</li>
              <li>Dockerized the full production stack to replicate it for local development and onboarding.</li>
              <li>Upgraded core systems and libraries (Ubuntu 20.04 → 24.04, Rails 6.x → 7.1).</li>
              <li>Migrated legacy front-end codebases (Sprockets with CoffeeScript → Importmaps with modern JavaScript).</li>
              <li>Resolved CVEs by auditing dependencies and removing insecure packages for SOC2 compliance.</li>
              <li>Automated deployment pipelines using AWS EC2, Auto Scaling Groups, and CodePipeline.</li>
              <li>Wrote Bash and Python scripts for service health checks, rollback logic, and server setup automation.</li>
            </>
          ) : (
            <>
              <li>Desarrollé y mantuve aplicaciones backend y frontend usando Ruby on Rails y React.</li>
              <li>Construí kioscos de registro y aplicaciones de visualización personalizadas con P5.js.</li>
              <li>Dockericé todo el stack de producción para replicarlo en entornos locales de desarrollo y facilitar la incorporación.</li>
              <li>Actualicé sistemas y bibliotecas clave (Ubuntu 20.04 → 24.04, Rails 6.x → 7.1).</li>
              <li>Migré bases de código de legado (Sprockets con CoffeeScript → Importmaps con JavaScript moderno).</li>
              <li>Eliminé vulnerabilidades (CVEs) mediante auditorías de dependencias y limpieza de paquetes inseguros acorde a SOC2.</li>
              <li>Automatizé pipelines de despliegue usando AWS EC2, Auto Scaling Groups y CodePipeline.</li>
              <li>Escribí scripts en Bash y Python para validaciones de salud, lógicas de rollback y automatización de configuración.</li>
            </>
          )}
        </ul>
      </div>

      <div>
        <h3 className="font-medium">Optimotion México — {language === "en" ? "Industry 4.0 Engineer" : "Ingeniero Industria 4.0"}</h3>
        <p className="text-sm text-gray-500">Hybrid · Monterrey, Mexico · 2020 – 2021</p>
        <ul className="list-disc list-inside ml-4">
          {language === "en" ? (
            <>
              <li>Designed PCBs for IIoT and implemented MQTT-based comms.</li>
              <li>Developed firmware, Python/JS GUIs, and edge-to-cloud systems.</li>
              <li>Designed computer vision systems for product quality inspection.</li>
            </>
          ) : (
            <>
              <li>Diseñé PCBs para IIoT e implementé comunicación basada en MQTT.</li>
              <li>Desarrollé firmware, interfaces en Python/JS y sistemas edge-to-cloud.</li>
              <li>Diseñé sistemas de visión por computadora para inspección de calidad de productos.</li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}
