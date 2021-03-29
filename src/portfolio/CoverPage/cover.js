import React from 'react';
import {
	Container_coverpage,
	Container_card,
	Image_card,
	Image_card_img,
	Header_card,
	Profile_card,
	Profile_card_img,
	Body_card,
	Name_card,
	Job_card,
	Bio_card
} from '../style';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
function CoverPage( props ) {
	const {
		Container_card,
		Image_card_img,
		Profile_card_img,
		Name_card,
		Job_card,
		Bio_card
	} = props.classes;
	const { full_name, job, bio, cover_image, profile_image } = props;
	return (
		<section style={Container_coverpage}>
			<div className={Container_card}>
				<figure style={Image_card}>
					<img className={Image_card_img} src={cover_image} alt="#"/>
				</figure>
				<div style={Header_card}>
					<figure style={Profile_card}>
						<img className={Profile_card_img} src={profile_image} alt="#"/>
					</figure>
				</div>
				<div style={Body_card}>
					<h3 className={Name_card}>{full_name}</h3>
					<p className={Job_card}>{job}</p>
					<p className={Bio_card}>{bio}</p>
				</div>
			</div>
		</section>
	);
}
CoverPage.propTypes = {
	full_name: PropTypes.string.isRequired,
	job: PropTypes.string,
	bio: PropTypes.string,
	cover_image: PropTypes.string,
	profile_image: PropTypes.string
};
export default injectSheet({
	Container_card,
	Image_card_img,
	Profile_card_img,
	Name_card,
	Job_card,
	Bio_card
})( CoverPage );