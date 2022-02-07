import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const TerminiSection = ({ location }) => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  useEffect(() => {
    if (location.hash === "#bimbi") {
      scrollRef1.current.scrollIntoView();
    } else if (location.hash === "#cause-di-forza-maggiore") {
      scrollRef2.current.scrollIntoView();
    }
  }, [location]);
  return (
    <Container>
      <h1>
        Le seguenti condizioni sono valide solo ed esclusivamente per le
        prenotazioni dirette, effettuate cioè tramite il nostro sito, e non
        tramite portali esterni di OTA quali ad esempio Booking.com, Expedia.it
        e similari
      </h1>
      <p>
        Vi preghiamo di leggere con attenzione le norme di prenotazione sotto
        riportate. Ogni prenotazione, dopo la sua conferma, ha valore di
        contratto secondo la vigente normativa italiana. Il contratto è
        vincolante per chi effettua la prenotazione e per tutti gli altri
        soggetti menzionati nella stessa, minorenni inclusi.
      </p>
      <Text>
        <h2>Prenotazione</h2>
        <p>
          È possibile effettuare una prenotazione online seguendo le istruzioni
          disponibili alla pagina{" "}
          <a
            rel="noreferrer"
            href="https://book.krossbooking.com/aquariumresidence"
            target="_blank"
          >
            https://book.krossbooking.com/aquariumresidence
          </a>{" "}
          o in alternativa inviare una richiesta di disponibilità dal nostro
          sito tramite la pagina contatti o via mail all'indirizzo
          prenotazioni@aquariumresidence.com e attendere una nostra risposta. A
          seguito della richiesta verrà inviata un’offerta non vincolante
          riportante il prezzo totale del soggiorno. La prenotazione è da
          considerarsi confermata solo dopo il versamento della caparra da
          effettuare entro 48 ore dalla nostra conferma. Se il pagamento non
          viene effettuato nei tempi richiesti, la prenotazione è da intendersi
          come nulla. La prenotazione diviene vincolante per Aquarium Residence
          solo al termine della transazione bancaria cioè quando i fondi saranno
          trasferiti sul nostro conto corrente.
        </p>
        <p>
          A tal punto l'Aquarium Residence si impegnerà ad inviare al cliente
          una e-mail riepilogativa da esibire al momento del check-in che
          implica l’accettazione dei nostri termini di cancellazione e deposito.
          Le chiediamo gentilmente di controllare l’esattezza dei dati di
          suddetta conferma e di comunicarci al più presto ogni eventuale
          anomalia. La comunicazione deve pervenire entro e non oltre 4 giorni
          dalla ricezione della stessa. Dopo tale termine decliniamo ogni
          responsabilità per eventuali inesattezze. All’arrivo è obbligatorio
          presentare un documento di riconoscimento per ogni persona. Per
          apportare modifiche alla prenotazione è necessario contattare il
          personale della reception, che farà tutto il possibile per soddisfare
          la richiesta. Tuttavia, non ci è possibile garantire l’adempimento di
          tale richiesta. In caso di richiesta di cambio delle date di
          prenotazione per un periodo per cui è previsto un prezzo più elevato,
          il cliente è tenuto a corrispondere la differenza tra quanto
          inizialmente richiesto ed il prezzo definitivo della prenotazione.
        </p>
      </Text>
      <Text>
        <h2>Pagamento</h2>
        <h3>Condizioni generali</h3>
        <p>
          È richiesto il versamento di una caparra confirmatoria entro e non
          oltre 2 giorni dalla data di conferma della prenotazione. In caso di
          mancata ricezione della caparra entro le date indicate, la
          prenotazione è nulla. L’ammontare della caparra confirmatoria è pari
          al 30% dell’importo totale del soggiorno. Come previsto dal codice
          civile all’art. 1385, non verrà restituita in caso di disdetta oltre i
          termini specificati di seguito o non presentazione.
        </p>
        <h3>Metodi di pagamento accettati per il versamento della caparra</h3>
        <p>
          Bonifico bancario e carta di credito. Il saldo della prenotazione ed
          eventuali extra dovranno essere pagati all'arrivo in struttura.
        </p>
        <p>
          Per pagamenti tramite bonifico bancario indichiamo di seguito i dati:
          <span>Intestatario:</span> <span>Aquarium Residence srl</span>{" "}
          <span>Via degli olmi, 18 – 74024 S. Pietro in Bevagna (TA)</span>{" "}
          <span>IBAN: IT 76 D 03268 78920 052550602520</span>{" "}
          <span>
            Inviare la copia della ricevuta di avvenuto bonifico via email:{" "}
            <strong>prenotazioni@aquariumresidence.com</strong> indicando la
            data della vostra prenotazione, il recapito telefonico e l’indirizzo
            email, riceverete conferma.
          </span>
        </p>
        <p>
          Per pagamenti tramite carta di credito: l'importo della caparra sarà
          addebitato sulla carta di credito indicata in fase di prenotazione. In
          caso di esito negativo nella transazione il cliente sarà avvertito e
          la prenotazione sarà annullata. In questo caso l'Aquarium Residence
          non avrà nessun obbligo nei confronti del cliente.
        </p>
        <h3>Pagamento anticipato, tariffa “Non Rimborsabile”</h3>
        <p>
          Se viene prenotata questa tariffa speciale, qualora fosse disponibile,
          l’intero importo viene addebitato sulla carta di credito o richiesto
          tramite bonifico bancario all'atto della prenotazione e non è
          rimborsabile in alcun caso.
        </p>
      </Text>
      <Text>
        <h2>Norme generiche</h2>
        <h3>Prolungamento del soggiorno:</h3>
        <p>
          Il prolungamento del soggiorno necessita di una prenotazione
          addizionale, ed è soggetto a disponibilità e cambi tariffari.
        </p>
        <h3>Politica di Cancellazione</h3>
        <p>
          Ogni cancellazione di prenotazione deve essere comunicate per iscritto
          via e-mail a prenotazioni@aquariumresidence.com. Per le condizioni di
          cancellazione fate cortesemente riferimento alla vostra conferma di
          prenotazione. In caso di cancellazione o modifiche effettuate{" "}
          <strong>fino a 30 giorni prima</strong> della data prevista di arrivo
          non viene addebitato alcun costo e quanto versato sarà restituito
          entro 14 giorni. In caso contrario non sarà restituito quanto versato
          tramite bonifico bancario o addebitato sulla carta di credito. Questa
          polizza di cancellazione non è valida per la tariffa scontata “Non
          Rimborsabile” (in questo caso l’importo totale della prenotazione
          verrà addebitato sulla carta o richiesto tramite bonifico bancario al
          momento della riserva e non sarà restituito in caso di cancellazione).
          In caso di cancellazione o modifiche effettuate{" "}
          <strong>fino a 5 giorni prima</strong> della data prevista di arrivo
          l'Aquarium Residence si riserva il diritto di richiedere il totale
          dell’importo del soggiorno a mezzo bonifico o addebitarlo sulla carta
          di credito.
        </p>
        <p>
          La direzione si riserva il diritto di comunicare ai clienti la
          modifica o cancellazione della prenotazione fino a{" "}
          <strong>cinque</strong> giorni antecedenti la data del check-in.
        </p>
        <h3>Interruzione del soggiorno</h3>
        <p>
          Nessun rimborso spetta all’ospite che decida di interrompere il
          soggiorno già intrapreso e quindi è tenuto a pagare tutto il soggiorno
          prenotato.
        </p>
        <h3>NoShow (mancata-presentazione):</h3>
        <p>
          Le camere e gli appartamenti non occupati entro le ore 23:00 del
          giorno di arrivo, ad esclusione di accordi specifici tra le parti,
          saranno ritenuti liberi e la prenotazione considerata disdetta senza
          preavviso. In caso di mancata presentazione l'Aquarium Residence
          tratterrà il deposito cauzionale versato e si riserva il diritto di
          richiedere tramite bonifico e/o addebitare sulla carta di credito data
          a garanzia <strong>il costo dell’intero soggiorno</strong>.
        </p>
        <h3>Orario check-in</h3>
        <p>
          Il diritto di occupazione della camera e degli appartamenti inizia a
          partire dalle ore 14:30 del primo giorno del periodo contrattato.
        </p>
        <h3>Orario check-out</h3>
        <p ref={scrollRef1}>
          Il diritto di occupazione della camera e degli appartamenti termina
          alle ore 10:00 del giorno di scadenza del soggiorno.
        </p>
        <h3>Politica bimbi</h3>
        <p>
          Ai neonati di età inferiore a due anni, non compiuti alla data del
          check-in, verrà applicato un supplemento giornaliero di € 5.00.
          Possono dormire nel letto con i genitori o nella culletta, previa
          disponibilità di spazio all'interno della camera prescelta. Ai bambini
          di età compresa tra due e cinque anni, non compiuti alla data del
          check-in, verrà applicato un supplemento giornaliero di € 8.00.
          Possono dormire nel letto con i genitori o nella culletta, previa
          disponibilità di spazio all'interno della camera prescelta. Ai bambini
          di età maggiore di cinque anni sarà assegnato un letto dedicato e al
          nucleo familiare sarà proposta una camera con un posto letto destinato
          ad ogni persona presente in essa. Per maggiori dettagli non esitare a
          contattarci.
        </p>
        <h3>Animali ammessi</h3>
        <p>
          La presenza di animali quali gatti e cani di piccola o media taglia è
          permessa sia nelle camere che negli appartamenti. La responsabilità
          per danni alle cose è interamente a carico del proprietario
          dell'animale. Al termine del soggiorno è richiesto un supplemento di €
          25.00 per la sanificazione ed igienizzazione della camera o
          dell'appartamento.
        </p>
        <h3>Politica di Prenotazione e Cancellazione "Gruppi"</h3>
        <p ref={scrollRef2}>
          Effettuando una prenotazione, colui che porta a termine il processo è
          identificato come referente del gruppo e conferma di essere
          autorizzato dagli altri partecipanti ad aderire alle Condizioni di
          Prenotazione e alla Politica di Cancellazione di Aquarium Residence.
          Il referente del gruppo è responsabile del totale di fatturazione per
          tutte le prenotazioni da lui confermate. Richieste dopo la data di
          scadenza dovranno essere comunicate direttamente ed esclusivamente dal
          capogruppo. Le prenotazioni non prevedono modifiche. Sarebbe
          necessario cancellare la prenotazione ed effettuarne una nuova.
        </p>
        <h3>Cause di forza maggiore</h3>
        <p>
          La direzione declina ogni responsabilità per disservizi dovuti a
          mancate forniture, guasti fortuiti alle apparecchiature o ad altre
          cause di forza maggiore. Si declina ogni responsabilità per danni
          causati da altri ospiti, da eventi atmosferici, calamità naturali,
          pandemie, epidemie, malattie e furti. A causa dell'emergenza sanitaria{" "}
          <em>Coronavirus - Covid-19</em> nel caso in cui dovessero essere
          imposte restrizioni dal Governo Italiano dovute all'impossibilità di
          uscire dalle regioni e quindi di usufruire della vacanza prenotata, la
          cancellazione sarà da considerarsi sempre gratuita e l'importo versato
          a titolo di caparra sarà restituito. Non esitate a contattarci al
          seguente indirizzo e-mail: <strong>info@aquariumresidence.com</strong>{" "}
          o ai recapiti indicati sul sito www.aquariumresidence.com, il nostro
          staff è sempre a disposizione per ogni vostra richiesta.
        </p>
        <h3>Foro competente</h3>
        <p>
          Per qualsiasi controversia dovesse insorgere relativamente
          all'interpretazione, all'esecuzione e/o alla risoluzione dei contratti
          di prenotazione a cui si applicano le presenti condizioni in cui sia
          parte processuale l'Aquarium Residence sarà esclusivamente competente
          il Foro di Taranto.
        </p>
      </Text>
    </Container>
  );
};

export default TerminiSection;

const Container = styled.div`
  width: 110rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem 0 5rem;
  text-align: justify;
  > h1 {
    color: #5b7083;
    font-weight: 500;
    font-size: calc(1.7rem + 0.3vw);
    margin-bottom: 0.5rem;
    margin: 2rem 0 1rem;
  }
  > p {
    font-weight: 300;
    font-size: calc(1.3rem + 0.3vw);
    line-height: 1.7;
    color: #5b7083;
  }
`;
const Text = styled.div`
  width: 100%;
  color: #5b7083;
  margin: 2rem 0;
  h2 {
    font-weight: 500;
    font-size: calc(1.7rem + 0.3vw);
    margin: 1rem 0 2rem;
  }
  h3 {
    font-weight: 500;
    font-size: calc(1.3rem + 0.3vw);
  }
  p {
    font-weight: 300;
    font-size: calc(1.2rem + 0.3vw);
    line-height: 1.7;
    margin: 0.5rem 0 1.5rem;
    a {
      color: #5da9ad;
      text-decoration: none;
      font-weight: 400;
      :hover {
        text-decoration: underline;
      }
    }
    span {
      display: block;
    }
  }
`;
