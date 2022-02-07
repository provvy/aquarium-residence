import React from "react";
import styled from "styled-components";
import salento from "../../assets/images/salento.jpg";
import salento503 from "../../assets/images/salento503.jpg";
import DintorniSlider from "../DintorniSlider";

const DintorniSection = () => {
  return (
    <Wrapper>
      <Container>
        <img
          src={window.innerWidth > 576 ? salento : salento503}
          alt="Foto di luminarie al tramonto a Gallipoli"
        />
      </Container>
      <Text>
        <p>
          Immerso nel cuore pulsante del Salento, gioiello del Sud Italia e meta
          tra le più ambite e rinomate d'Italia e d'Europa, il{" "}
          <strong>Residence Aquarium</strong> consente, data la vicinanza, di
          non dover rinunciare a gite e scampagnate alla scoperta delle
          innumerevoli meraviglie che custodisce il nostro territorio. Terra
          baciata dal sole, il Salento vi accoglierà con panorami mozza fiato,
          una tradizione enogastronomica secolare e attenta alla qualità e
          affascinanti itinerari artistici e naturali. Il nostro viaggio ha
          inizio dalla <strong>costa ionica</strong>, dove, dopo pochi minuti
          d'auto, incontriamo dapprima le fantastiche spiagge dorate di{" "}
          <strong>Punta Prosciutto, Porto Cesareo e Torre Lapillo</strong>.
          Proseguendo più a sud e dopo appena una manciata di chilometri, eccoci
          nella fantastica riserva naturale di <strong>Porto Selvaggio</strong>,
          un luogo paradisiaco, immerso nella tranquillità e nella pace. Terra
          dai forti e veraci contrasti, il Salento viene incontro alle necessità
          e ai gusti di tutti: è per questo che nel giro di pochi minuti si può
          raggiungere la movida e la giovanile vivacità di{" "}
          <strong>Gallipoli</strong>, una città che sa come risvegliare le
          passioni di chi vuole godersi a pieno l'estate. Col mare sempre al
          proprio fianco e il sole alto in cielo, prosegue il nostro cammino
          lungo la penisola verde, terra magica e misteriosa, nella quale si
          celano ancestrali <strong>dolmen</strong> e <strong>menhir</strong>,
          nascosti tra <strong>muretti a secco</strong> e uliveti, che potrete
          esplorare seguendo itinerari di <strong>trekking</strong>, durante i
          quali imbattervi in antichissime <strong>Chiese</strong> rurali,{" "}
          <strong>masserie</strong> perfettamente custodite e{" "}
          <strong>frantoi ipogei</strong>. Si giunge così al capo di{" "}
          <strong>Santa Maria di Leuca</strong>, di cui sono particolarmente
          rinomate le <strong>grotte naturali</strong>. Risalendo in direzione
          opposta, stavolta lungo le coste tracciate dal mare{" "}
          <strong>Adriatico</strong>, oltrepassando <strong>Castro</strong>,
          eccoci arrivati ad <strong>Otranto</strong>, il punto più ad Ovest
          della nostra penisola: celebre è il capodanno otrantino, la così detta{" "}
          <strong>prima alba d'Italia</strong>. Tappa obbligatoria è
          l'affascinante e colorata <strong>cava di bauxite</strong>, che regala
          un romantico panorama dominato dal rosso sgargiante. Continuando a
          risalire, ci imbattiamo dapprima nei caratteristici e monumentali{" "}
          <strong>faraglioni di Sant'Andrea</strong> e poi nell'affascinante{" "}
          <strong>Grotta della Poesia</strong>, un luogo la cui atmosfera magica
          è perfettamente contenuta e definita nel nome. Si arriva quindi al
          capoluogo salentino, <strong>Lecce</strong>, capitale del barocco, che
          vi accoglierà tra le sue vie guidandovi alla scoperta di chiese e
          palazzi ricamati nella pietra. Un'ulteriore menzione d'obbligo è
          dovuta a <strong>Melpignano</strong>, minuscola frazione di{" "}
          <strong>Maglie</strong>, dove si tiene ogni anno il celebre concertone
          della <strong>Notte della Taranta</strong>, che regala ai turisti un
          corposo assaggio dei ritmi ancestrali e dei riti magici che da secoli
          si celebrano nel territorio della <strong>Grecìa Salentina</strong>.
          Il viaggio può quindi dirsi concluso, non dimenticando certamente di
          far tappa ad <strong>Alberobello</strong>, per godere della visione
          dei suoi bellissimi e caratteristici <strong>trulli</strong>, a{" "}
          <strong>Brindisi</strong> e ad <strong>Ostuni</strong>, la celebre{" "}
          <strong>città bianca</strong>.
        </p>
      </Text>
      <DintorniSlider />
    </Wrapper>
  );
};

export default DintorniSection;

const Wrapper = styled.div`
  width: 90rem;
  max-width: 90%;
  color: #5b7083;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
  img {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const Text = styled.div`
  width: 100%;
  padding-bottom: 3rem;
  p {
    font-size: calc(1.4rem + 0.3vw);
    font-weight: 300;
    line-height: 1.8;
    text-align: justify;
    strong {
      color: #5da9ad;
    }
  }
`;
