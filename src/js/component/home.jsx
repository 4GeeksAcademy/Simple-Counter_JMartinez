import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = ({seg, min, hora, dia, meses, años}) => {
	return (
		<div className="text-center">
			<Card seg = {seg} min = {min} hora = {hora} dia = {dia} meses = {meses} años = {años} />
		</div>
	);
};

export default Home;

