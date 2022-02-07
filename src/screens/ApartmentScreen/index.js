import React, { useRef } from "react";
import styled from "styled-components";
import Booking from "../../components/Booking";
import CoverPhoto from "../../components/CoverPhoto";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Section from "../../components/Section";
import copertinaappartamenti from "../../assets/images/copertinaappartamenti.jpg";
import { apartmentDetails } from "../../data";
import Footer from "../../components/Footer";
import ContactButtons from "../../components/ContactButtons";
import TransitionDiv from "../../components/TransitionDiv";
import copertinaappartamenti576 from "../../assets/images/copertinaappartamenti576.jpg";
import { Helmet } from "react-helmet";

const ApartmentScreen = ({ history }) => {
  const imageObject = {
    src:
      window.innerWidth > 576
        ? copertinaappartamenti
        : copertinaappartamenti576,
    alt: "Foto di un appartamento utilizzata come copertina per la sezione appartamenti",
  };
  const description =
    "Sono disponibili 4 camere con cucina di cui 3 composte da ingresso/zona living con angolo cottura, camera da letto separata e servizio privato. In due di queste camere è posizionato, nell'area living, un letto a castello mentre nell'altra un letto singolo. La quarta camera con cucina è composta da un ambiente unico all'interno del quale vi è un letto matrimoniale, un letto a castello, angolo cottura e servizio privato. Tutte le camere sono coperte da wi-fi libero e corredate da aria climatizzata con controllo indipendente, TV LCD, tavolo e sedie con stoviglie e tovagliato inclusi. I servizi sono corredati di doccia e asciugacapelli. Le camere sono situate in un piano seminterrato, con finestre a livello strada e fuori terra. Al piano rialzato sono situati sia un bar che un ristorante vista mare e l'accesso diretto alla spiaggia.";
  const targetRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <ApartmentScreenWrapper>
      <Helmet>
        <title>
          Aquarium Residence | Appartamenti e camere con cucina per vacanze in
          Puglia
        </title>
        <meta
          name="description"
          content="Camere con cucina in Puglia completamente arredate e corredate di tutto l'occorrente per il tuo soggiorno."
        />
        <link
          rel="canonical"
          href="https://www.aquariumresidence.com/camere-con-cucina"
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Appartamenti e camere con cucina per vacanze in Puglia"
        />
        <meta
          property="og:description"
          content="Camere con cucina in Puglia completamente arredate e corredate di tutto l'occorrente per il tuo soggiorno."
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/camere-con-cucina"
        />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <TransitionDiv />
      <Header scrolled={+true} />
      <CoverPhoto image={imageObject}>
        <Booking variant={+true} />
      </CoverPhoto>
      <Main>
        <Section
          title={"Gli Appartamenti"}
          targetRef={targetRef}
          details={apartmentDetails}
          description={description}
          scrollRef={scrollRef}
        />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </ApartmentScreenWrapper>
  );
};

export default ApartmentScreen;

const ApartmentScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
