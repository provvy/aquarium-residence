import "./App.css";
import styled from "styled-components";
import HomeScreen from "./screens/HomeScreen";
import RoomScreen from "./screens/RoomScreen";
import { Switch, Route } from "react-router-dom";
import ApartmentScreen from "./screens/ApartmentScreen";
import ScrollToTop from "./components/ScrollToTop";
import RestaurantScreen from "./screens/RestaurantScreen";
import DehorsScreen from "./screens/DehorsScreen";
import DintorniScreen from "./screens/DintorniScreen";
import ContactScreen from "./screens/ContactScreen";
import CookieScreen from "./screens/CookieScreen";
import TerminiScreen from "./screens/TerminiScreen";
import VacanzeScreen from "./screens/VacanzeScreen";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AppWrapper>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/camere" exact>
              <RoomScreen />
            </Route>
            <Route path="/camere-con-cucina" exact>
              <ApartmentScreen />
            </Route>
            <Route
              path="/ristorante-sul-mare"
              exact
              component={RestaurantScreen}
            />
            <Route path="/dehors" exact component={DehorsScreen} />
            <Route path="/dintorni" exact component={DintorniScreen} />
            <Route path="/contatti" exact component={ContactScreen} />
            <Route path="/cookie-policy" exact component={CookieScreen} />
            <Route
              path="/termini-condizioni-prenotazione-cancellazione"
              exact
              component={TerminiScreen}
            />
            <Route path="/vacanze-sicure" exact component={VacanzeScreen} />
          </Switch>
        </AnimatePresence>
      </AppWrapper>
    </>
  );
};

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
`;
