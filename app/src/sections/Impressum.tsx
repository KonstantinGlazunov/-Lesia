import { Link } from 'react-router-dom';

export default function Impressum() {
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
            <h3 className="font-medium text-gray-800 mb-1">Verantwortlich für den Inhalt (§ 5 TMG)</h3>
            <p>Lesya Afanaseva</p>
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ] Braunfels</p>
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
              Berufsbezeichnung verliehen in Deutschland. Eine Kammerzugehörigkeit ist für Kosmetikerinnen nicht in allen Bundesländern verpflichtend.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Umsatzsteuer-ID</h3>
            <p>
              Kleinunternehmer gemäß § 19 UStG, keine Umsatzsteuer-Identifikationsnummer.
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
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-1">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Sofern die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
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
