import React from "react";
import { $Footer, $FooterContent, $FooterIcon } from "../style";
import { IcSolidHeart } from "../react-icon-svg";
export const Footer = props => (
	<div style={$Footer}>
		<div style={$FooterContent}>
			{"built with "}
			<IcSolidHeart style={$FooterIcon} height="2vh" fill="rgba(255, 99, 71,1)"/> {" by Mukhlis Adhe Purwanto"}
		</div>
	</div>
);