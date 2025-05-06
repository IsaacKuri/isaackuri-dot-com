export default function Footer({ language }: { language: 'en' | 'es' }) {
  const labels = {
    en: {
      source: 'Source available on',
      download: 'Download as PDF',
    },
    es: {
      source: 'Código fuente disponible en',
      download: 'Descargar como PDF',
    },
  };

  const t = labels[language];

  return (
    <footer className="py-6 border-t border-gray-200 text-sm text-gray-600 print:hidden">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between text-center sm:text-left">
        <p>
          {t.source}{' '}
          <a
            href="https://github.com/IsaacKuri/isaackuri-dot-com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </p>
        <button
          onClick={() => window.print()}
          className="px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {t.download}
        </button>
      </div>
    </footer>
  );
}
