export default function Datenschutz() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="datenschutz"
      className="relative py-16 sm:py-24 overflow-hidden bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-800 mb-8">Datenschutzerklärung</h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">1. Verantwortliche Stelle</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              Lesya Afanaseva, Braunfels, Deutschland<br />
              E-Mail: info@beautystudio-lesya.de
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h3>
            <p>
              Beim Besuch der Website werden durch den Browser automatisch Informationen (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten) an den Server übermittelt. Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs ausgewertet und nicht an Dritte weitergegeben.
            </p>
            <p className="mt-2">
              Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden die von Ihnen angegebenen Daten (Name, E-Mail, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">3. Zweck der Verarbeitung</h3>
            <p>
              Die Verarbeitung erfolgt zur Terminvereinbarung, zur Beantwortung von Anfragen und zur Erfüllung vorvertraglicher bzw. vertraglicher Leistungen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">4. Rechtsgrundlage</h3>
            <p>
              Die Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) sowie ggf. auf Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">5. Speicherdauer</h3>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den genannten Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">6. Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO). Sie können sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO).
            </p>
            <p className="mt-2">
              Für Fragen zum Datenschutz wenden Sie sich an: info@beautystudio-lesya.de
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">7. Cookies und externe Dienste</h3>
            <p>
              Diese Website setzt nur technisch notwendige Cookies ein. Externe Dienste (z. B. Instagram-Links) unterliegen den Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">8. Hosting</h3>
            <p>
              Das Hosting dieser Website kann durch Drittanbieter erfolgen. Mit dem Anbieter wurden ggf. Auftragsverarbeitungsverträge geschlossen.
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
