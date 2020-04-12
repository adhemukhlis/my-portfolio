import React from "react";
import {
	Ic_l_user_astronaut,
	Ic_l_rocket,
	Ic_l_stars
} from "../component/react-icon-svg";
export const MiddleOption = props => (
	<div>
		<div className="btnmenu menuhover" onClick={( ) => props._onClick(1)}>
			<Ic_l_user_astronaut className="icon" height="4vh"/>
		</div>
		<div className="btnmenu menuhover" onClick={( ) => props._onClick(2)}>
			<Ic_l_stars className="icon" height="4vh"/>
		</div>
		<div className="btnmenu menuhover" onClick={( ) => props._onClick(3)}>
			<Ic_l_rocket className="icon" height="4vh"/>
		</div >
	</div>
);