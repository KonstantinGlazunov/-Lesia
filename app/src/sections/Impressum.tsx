export default function Impressum() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="impressum"
      className="relative py-16 sm:py-24 overflow-hidden bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-800 mb-8">Impressum</h2>
        <p className="text-sm text-gray-500 mb-6">
          Angaben gemäß § 5 TMG (Telemediengesetz)
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-medium text-gray-800 mb-1">Verantwortlich für den Inhalt</h3>
            <p>Lesya Afanaseva</p>
            <p>Braunfels</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Kontakt</h3>
            <p>E-Mail: info@beautystudio-lesya.de</p>
            <p>Telefon: +49 151 12345678</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p>
              Berufsbezeichnung: Kosmetikerin / Permanent-Make-up-Künstlerin<br />
              Zuständige Kammer / Aufsichtsbehörde: [ggf. eintragen, z. B. Handwerkskammer oder IHK]
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [Falls vorhanden eintragen, sonst: „Kleinunternehmer gemäß § 19 UStG“]
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => scrollToSection('contact')}
            className="text-rose-500 hover:text-rose-600 text-sm font-medium"
          >
            ← Zurück zur Startseite
          </button>
        </div>
      </div>
    </section>
  );
}
