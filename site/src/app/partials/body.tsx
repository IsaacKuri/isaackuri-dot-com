import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import Languages from "../components/languages";
import Interests from "../components/interests";
import Contact from "../components/contact";

export default function Body({ language }: { language: "en" | "es" }) {
  return (
    <section className="space-y-8">
      <About language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Languages language={language} />
      <Interests language={language} />
      <Contact language={language} />
    </section>
  );
}
