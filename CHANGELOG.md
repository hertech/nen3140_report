# Changelog

Alle belangrijke wijzigingen in Meethulp NEN 3140 staan hier. Het formaat volgt [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/) en de versienummers volgen [Semantic Versioning](https://semver.org/lang/nl/).

## [1.2.0] - 2026-11-22

### Toegevoegd
- Tabblad **Back-up**: bewaar je gegevens als bestand (volledig, of alleen je profiel) en importeer die op een ander toestel of in een andere installatie van de app. Met de knop **Delen…** (waar je toestel dat ondersteunt) stuur je het bestand direct door.
- Bij het importeren controleert de app eerst het versienummer en de opbouw van het bestand en toont wat erin zit. Een bestand van een nieuwere hoofdversie wordt geweigerd, een nieuwere of oudere versie geeft een waarschuwing.
- Bij het importeren kies je: alles vervangen, alleen de inspectie, of alleen het profiel.
- **Ongedaan maken**: voor elke import en elke nieuwe inspectie bewaart de app de vorige staat, zodat je die kunt terugzetten.
- Tabblad **Profiel**: functie, telefoon, e-mail, website, KvK, certificering en meetinstrumenten, standaardwaarden voor een nieuwe inspectie (documentatie, omvang, frequentie, invloeden) en opgeslagen opdrachtgevers.
- **Eigen logo, accentkleur en voettekst** in het klantrapport en de PDF, met een voorbeeld in het profiel.
- Opslagstatus onder Back-up, met een waarschuwing als de browser je gegevens zelf mag opruimen.

### Gewijzigd
- De vaste gegevens (inspecteur, bedrijf, instrument, norm) staan nu onder Profiel in plaats van onder Gegevens.
- **Nieuwe inspectie beginnen** vult je standaardwaarden en de datum van vandaag in.
- Het openen van bestanden is verplaatst van Klantrapport naar Back-up. Back-upbestanden bevatten nu soort, versie en datum.

## [1.1.0] - 2026-11-21

### Toegevoegd
- Licht en donker thema, met de keuze **Automatisch** (volgt je telefoon). Schakel via de knop rechtsboven of op de Startpagina.
- De changelog is nu in de app te lezen onder **Wat is nieuw** op de Startpagina, ook zonder internet.
- Na een update toont de app eenmalig een melding met een link naar de wijzigingen.
- De app waarschuwt als de changelog niet bij het versienummer van de app past.

## [1.0.0] - 2026-11-21

### Toegevoegd
- Eerste versie als installeerbare app (PWA): werkt na het eerste bezoek ook zonder bereik.
- PDF-export van het klantrapport via **Exporteer als PDF**.
- Opslag van inspectiegegevens en foto's in IndexedDB, met automatische overzetting vanuit de oude opslag.
- Versienummer met melding **Nieuwe versie beschikbaar** en de knop **Zoek naar update**.
- Het versienummer staat in het klantrapport, het tekstrapport en het back-upbestand.
