export default function Contact({ language }: { language: "en" | "es" }) {
  const t = {
    en: {
      title: "Contact",
      phone: "Phone",
      location: "Location",
    },
    es: {
      title: "Contacto",
      phone: "Teléfono",
      location: "Ubicación",
    },
  }[language];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">{t.title}</h2>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
          {/* Email Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.99l-8 6.01-8-6.01V18h16V8.99z" />
          </svg>
          <a href="mailto:isaac@kuri.contact" className="underline">isaac@kuri.contact</a>
        </li>
        <li className="flex items-center gap-2">
          {/* GitHub Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.777 8.205 11.387.6.113.82-.258.82-.577v-2.03c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.808 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.664-.3-5.466-1.336-5.466-5.93 0-1.31.47-2.38 1.234-3.22-.135-.303-.54-1.522.105-3.175 0 0 1.005-.322 3.3 1.23a11.47 11.47 0 0 1 3.003-.404 11.5 11.5 0 0 1 3.004.404c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.872.12 3.175.765.84 1.23 1.91 1.23 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.81 1.096.81 2.21v3.285c0 .32.22.694.825.576C20.565 22.276 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
          </svg>
          <a href="https://github.com/IsaacKuri" target="_blank" className="underline">github.com/IsaacKuri</a>
        </li>
        <li className="flex items-center gap-2">
          {/* LinkedIn Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.47 24h4.06V7.91H.47V24zM7.89 7.91v16.09h4.05V15.2c0-2.34.96-3.7 3.01-3.7 1.9 0 2.79 1.37 2.79 3.45v9.15h4.04v-9.77c0-4.37-2.34-6.4-5.47-6.4-2.43 0-3.5 1.29-4.12 2.2V7.91H7.89z"/>
          </svg>
          <a href="https://www.linkedin.com/in/isaackuri/" target="_blank" className="underline">linkedin.com/in/isaackuri</a>
        </li>
        <li className="flex items-center gap-2">
          {/* Phone Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.14.48 2.38.73 3.65.73a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.25 2.51.73 3.65a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
          </svg>
          +52 (999) 618 3971
        </li>
        <li className="flex items-center gap-2">
          {/* Location Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          Mérida, Yucatán, México
        </li>
      </ul>
    </section>
  );
}
