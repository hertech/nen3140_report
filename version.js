/* Enige plek voor het versienummer (Semantic Versioning: MAJOR.MINOR.PATCH).
   - PATCH: foutherstel, tekstwijziging, geen gedrag of datastructuur anders (1.0.0 -> 1.0.1)
   - MINOR: nieuwe functie, opgeslagen gegevens blijven werken (1.0.1 -> 1.1.0)
   - MAJOR: wijziging die oude opgeslagen gegevens of bestanden breekt (1.1.0 -> 2.0.0)
   Wordt gelezen door index.html én sw.js. Wijzig je dit bestand, dan ziet de browser
   een nieuwe service worker en krijgt de gebruiker de melding "Nieuwe versie beschikbaar". */
const APP_VERSION = '1.0.0';
