export default function Skills({ language }: { language: "en" | "es" }) {
  const sections =
    language === "en"
      ? {
          Languages: ["JavaScript", "Python", "Ruby", "Embedded C/C++"],
          Frameworks: ["Ruby on Rails", "React", "Node.js", "Unity"],
          DevOps: [
            "AWS (EC2, ASG, CodePipeline)",
            "Docker",
            "Git",
            "CI/CD",
            "Bash / Shell scripting",
            "Security Auditing",
            "Linux",
          ],
          Infrastructure: ["Networking (OPNSense)", "VMs (Proxmox)"],
          Databases: ["MySQL", "Redis", "Sidekiq"],
        }
      : {
          Lenguajes: ["JavaScript", "Python", "Ruby", "Embedded C/C++"],
          Frameworks: ["Ruby on Rails", "React", "Node.js", "Unity"],
          DevOps: [
            "AWS (EC2, ASG, CodePipeline)",
            "Docker",
            "Git",
            "CI/CD",
            "Bash / Shell scripting",
            "Auditoría de Seguridad",
            "Linux",
          ],
          Infraestructura: ["Redes (OPNSense)", "VMs (Proxmox)"],
          'Bases De Datos': ["MySQL", "Redis", "Sidekiq"],
        };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "Skills" : "Habilidades"}
      </h2>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {Object.entries(sections).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-medium mb-1">{category}</h3>
            <ul className="list-disc list-inside space-y-0.5">
              {(items as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
