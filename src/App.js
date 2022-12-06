import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/_variables.scss";
import "./scss/_styles.scss";

import { Whatsapp } from "./Components/Whatsapp";
import { NavBar } from "./Components/NavBar";
import { LandingPage } from "./LandingPage";
import { Cursos } from "./Pages/Cursos";
import { Propiedades } from "./Pages/Propiedades";
import { Contacto } from "./Pages/Contacto";
import { Footer } from "./Components/Footer";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
		<>
        <BrowserRouter>
          <Whatsapp />
          <NavBar />

          <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/cursos' element={<Cursos />} />
              <Route path='/propiedades' element={<Propiedades />} />
              <Route path='/contacto' element={<Contacto />} />
          </Routes>

          <Footer />
        </BrowserRouter>
		</>
	);
}

export default App;
