"use client";

import { useState } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";
import Body from "./partials/body";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <Header
          language={language}
          toggleLanguage={() => setLanguage(language === "en" ? "es" : "en")}
        />
        <Body language={language} />
        <Footer language={language} />
      </div>
    </main>
  );
}
