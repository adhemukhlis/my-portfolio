import React from 'react';
import SocialNetwork from "./social";
import { Container_aboutme, Content_aboutme, TitleLight } from "../style";
import { StringBuilder } from "../../func";
import PropTypes from 'prop-types';
function AboutPage( props ) {
	const { about_me, birthday, contact } = props;
	return (
		<div style={Container_aboutme}>
			<h1 style={TitleLight}>
				Tentang saya
			</h1>
			<div style={Content_aboutme}>
				{StringBuilder({ str: about_me, birthday })}
			</div>
			<SocialNetwork social_data={contact}/>
		</div>
	);
}
AboutPage.propTypes = {
	about_me: PropTypes.string.isRequired,
	birthday: PropTypes.string,
	contact: PropTypes.array
};
export default AboutPage;