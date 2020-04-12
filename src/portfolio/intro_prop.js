import React from "react";
import { $img, $ImgContainer } from "./style";
export const ProfileImg = props => (
	<div style={$ImgContainer}><div style={{
		...$img,
		backgroundImage: "url(" + props.url + ")"
	}} alt="img_profile"/></div>
);