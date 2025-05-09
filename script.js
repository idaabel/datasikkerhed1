'use strict';

    // Mine variabler (hjælp af AI til at definere/navngive variabler, for at kunne starte projektet op)
document.addEventListener("DOMContentLoaded", () => {
    const textDiv = document.getElementById("text");
    const buttonsDiv = document.getElementById("buttons");
  
    // Trin 1 - Introduktionen og funktioner på kom igang knappen 
    function showIntro() {
      textDiv.innerHTML = `
        Du er netop blevet ansat i en stor virksomhed, som arbejder med følsomme brugerdata.
        Din chef har bedt dig om at oprette en konto for at få adgang til virksomhedens interne systemer.
        Kom i gang og se hvor rustet du er til at udføre denne opgave.
      `;
  
      buttonsDiv.innerHTML = `<button id="startBtn">Kom i gang</button>`;
      
      document.getElementById("startBtn").addEventListener("click", showPasswordChoices); // når der klikkes på "kom igang" føres man videre til trin 2 - valg af adgangskode.
    }
  
    // Trin 2 - Valg af adgangskode
    function showPasswordChoices() {
      textDiv.innerHTML = `Vælg din adgangskode:`;
  
    
      buttonsDiv.innerHTML = `
        <button class="choiceBtn" data-result="A">1234</button>
        <button class="choiceBtn" data-result="B">navn1998</button>
        <button class="choiceBtn" data-result="C">Gj12eX@348M</button>
      `;
  
      document.querySelectorAll(".choiceBtn").forEach(button => { // her tilføjes klikfunktionen på de 3 knapper med adgangskode muligheder 
        button.addEventListener("click", (e) => {
          const result = e.target.getAttribute("data-result"); // her aflæser siden hvilken af knapperne der trykkes på, for at kunne gå videre til den rigtige afslutning
          showResult(result); // viser resultaterne ud fra brugerens valg  
        });
      });
    }
  
    // Trin 3 - Vis resultat baseret på valg af henholdvis a, b eller c 
    function showResult(result) {
      let message = "";
      let color = "";
  
      switch(result) {
        case "A":
          message = "Du har valgt en meget usikker adganskode. Koden er blandt de mest brugte adgangskoder, og kan derfor gættes på få sekunder. Med sådan en svag adgangskode risikerer du virksomhedens sikkerhed, og uvedkommende kan få adgang til virksomhedens fortrolige data. Vælg altid en stærk, kreativ og avanceret adgangskode med mange tegn, tal, store og små bogstaver.";
          color = "red";
          break;
        case "B":
          message = "Dette valg af adgangkode er okay, men ikke optimalt og sikker nok for virksomheden. Når du bruger personlige oplysninger, gør det koden meget nemmere for hackere at gætte. Denne adgangskode kan sætte virksomhedens fortrolige data i sikkerhed. Tænk over hvad en hacker vil kunne finde af oplysninger om dig på nettet, og brug derfor ikke personlige oplysninger til en adgangskode.";
          color = "orange";
          break;
        case "C":
          message = "Rigtig god adgangskode! Du har valgt en stærk og avanceret adgangskode, som er svær at gætte for eventuelle hackere. En stærk adgangkode består af en blanding af forskellige tegn, tal, store og små bogstaver. Husk at bevare adgangskoden et sikkert sted, så er virksomhedens sikkerhed ikke i fare. Godt arbejdet.";
          color = "green";
          break;
      }
  
      textDiv.innerHTML = `<div style="background-color:${color}; padding:20px;">${message}</div>`;
      buttonsDiv.innerHTML = `<button id="restartBtn">Start forfra</button>`; // skaber muligheden for at starte siden forfra  
  
      document.getElementById("restartBtn").addEventListener("click", showIntro); 
    }
  
    // Starter programmet
    showIntro();
  });

