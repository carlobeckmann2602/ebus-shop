import InfotextLayout from "./InfotextLayout";

export default function IntroText() {
  return (
    <InfotextLayout
      title="So funktioniert's"
      content={
        <div>
          <ol className="list-decimal">
            <li className="mb-4">
              <b>Kundendaten</b>
              <br />
              Geben Sie (imaginäre) Kundendaten in den dafür vorgesehenen
              Feldern ein.
              <br />
              <i>
                (Keine Sorge: Es werden keinerlei Daten gespeichert oder
                verarbeitet)
              </i>
            </li>
            <li className="mb-4">
              <b>Bezahlweise</b>
              <br />
              Wählen Sie eine der vorgeschlagenen Bezahlfunktionen.
            </li>
            <li className="mb-4">
              <b>Informationen</b>
              <br />
              Sie erhalten an dieser Stelle hier Informationen und Wissenswertes
              oder gegebenenfalls ein interaktives Beispiel.
            </li>
          </ol>
        </div>
      }
    />
  );
}
