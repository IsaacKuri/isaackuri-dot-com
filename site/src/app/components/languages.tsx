export default function Languages({ language }: { language: "en" | "es" }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "Languages" : "Idiomas"}
      </h2>
      <ul className="list-disc list-inside">
        <li>
          {language === "en"
            ? "Spanish — Native"
            : "Español — Nativo"}
        </li>
        <li>
          {language === "en"
            ? "English — Fluent (CEFR C1, ITEP ACADEMIC-PLUS)"
            : "Inglés — Fluido (CEFR C1, ITEP ACADEMIC-PLUS)"}
        </li>
      </ul>
    </section>
  );
}
