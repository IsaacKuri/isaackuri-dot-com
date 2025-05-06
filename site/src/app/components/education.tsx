export default function Education({ language }: { language: "en" | "es" }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">
        {language === "en" ? "Education" : "Educación"}
      </h2>
      <div>
        <h3 className="font-medium">
          {language === "en"
            ? "Embedded Systems Engineering"
            : "Ingeniería en Sistemas Embebidos"}
        </h3>
        <p className="text-sm text-gray-500">
          Universidad Politécnica de Yucatán · 2017 – 2021
        </p>
        <p className="mt-1">
          {language === "en"
            ? "Specialized in hardware design, firmware, and embedded C/C++ development."
            : "Especialización en diseño de hardware, firmware y desarrollo embebido en C/C++."}
        </p>
      </div>
    </section>
  );
}
