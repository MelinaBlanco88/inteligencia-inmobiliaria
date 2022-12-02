import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/_variables.scss";
import "./scss/_styles.scss";

import { Whatsapp } from "./Components/Whatsapp";
import { NavBar } from "./Components/NavBar";
import { Shuffle } from "./Components/Shuffle";
import { AboutUs } from "./Components/AboutUs";
import { Cards } from "./Components/Cards";
import { Servicios } from "./Components/Servicios";
import { Testimonios } from "./Components/Testimonios";
import { Team } from "./Components/Team";
import { Footer } from "./Components/Footer";

function App() {
  return (
		<>
        <Whatsapp />
        <NavBar />
        <Shuffle />
        <AboutUs />
        <Cards />
        <Servicios />
        <Testimonios />
        <Team />
        <Footer />
		</>
	);
}

export default App;
