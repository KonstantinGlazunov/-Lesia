import { Link } from 'react-router-dom';

export default function Datenschutz() {
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
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der DSGVO und des TMG ist:<br />
              Lesya Afanaseva<br />
              [Straße und Hausnummer], [PLZ] Braunfels, Deutschland<br />
              E-Mail: info@beautystudio-lesya.de
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h3>
            <p>
              Beim Besuch der Website werden durch den Browser automatisch Informationen (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp) an den Server übermittelt. Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs und zur Sicherheit (z. B. Erkennung von Angriffen) ausgewertet und nicht an Dritte weitergegeben.
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
              Die Verarbeitung stützt sich auf Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen am Betrieb der Website und an der Kommunikation) sowie ggf. auf Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Soweit Sie in die Verarbeitung eingewilligt haben, können Sie die Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">5. Speicherdauer</h3>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den genannten Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen (z. B. steuer- oder handelsrechtlich) bestehen. Server-Logdaten werden in der Regel nach spätestens 7 Tagen gelöscht oder anonymisiert, sofern keine zwingende Aufbewahrung aus Sicherheitsgründen erforderlich ist.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">6. Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch (Art. 21 DSGVO). Sie haben ferner das Recht, sich bei einer datenschutzrechtlichen Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist u. a. der Hessische Beauftragte für Datenschutz und Informationsfreiheit, falls Ihr Wohnsitz in Hessen liegt.
            </p>
            <p className="mt-2">
              Für alle Fragen zum Datenschutz und zur Ausübung Ihrer Rechte wenden Sie sich an: info@beautystudio-lesya.de
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">7. Cookies und Speicherzugriffe (TTDSG / DSGVO)</h3>
            <p>
              Diese Website setzt nur technisch notwendige Cookies bzw. Speicherzugriffe ein (§ 25 Abs. 2 Nr. 2 TTDSG, Art. 6 Abs. 1 lit. f DSGVO). Darunter fallen z. B. Session- oder Lastverteilungsinformationen, die für den Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies ohne Ihre Einwilligung gesetzt. Externe Dienste (z. B. Instagram-Links) unterliegen den Datenschutzbestimmungen der jeweiligen Anbieter; der Aufruf erfolgt erst durch Ihren Klick.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">8. Hosting und Auftragsverarbeitung</h3>
            <p>
              Das Hosting dieser Website kann durch Drittanbieter erfolgen. Soweit personenbezogene Daten im Rahmen des Hostings verarbeitet werden, erfolgt dies auf Grundlage eines Vertrags über Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">9. Datensicherheit</h3>
            <p>
              Die Übertragung der Website erfolgt über SSL/TLS (HTTPS). Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust oder Zugriff Unbefugter zu schützen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">10. Keine automatische Entscheidungsfindung</h3>
            <p>
              Es findet keine automatisierte Entscheidungsfindung oder ein Profiling im Sinne des Art. 22 DSGVO statt.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block text-rose-500 hover:text-rose-600 text-sm font-medium"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
