import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div class="container">
				<Jumbotron />
			</div>
			<br/>
			<div class="container text-center">
				<div class="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<br/>
			<div>
			<Footer />
			</div>
		</>
	)
}

export default Home;
