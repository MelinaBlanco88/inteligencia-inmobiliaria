import { Shuffle } from "./Components/Shuffle";
import { AboutUs } from "./Components/AboutUs";
import { Cards } from "./Components/Cards";
import { Servicios } from "./Components/Servicios";
import { Testimonios } from "./Components/Testimonios";
import { Team } from "./Components/Team";

export const LandingPage = () => {
	return (
		<>
			<Shuffle />
			<AboutUs />
			<Cards />
			<Servicios />
			<Testimonios />
			<Team />
		</>
	);
};