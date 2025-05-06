export default function Interests({ language }: { language: "en" | "es" }) {
  const interests = language === "en"
    ? ["Hardware Design", "Data Visualization", "3D Modeling", "Programming", "Virtual Reality", "Homelab"]
    : ["Diseño de Hardware", "Visualización de Datos", "Modelado 3D", "Programación", "Realidad Virtual", "Homelab"];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "Interests" : "Intereses"}
      </h2>
      <ul className="list-disc list-inside grid grid-cols-2 gap-x-4">
        {interests.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
