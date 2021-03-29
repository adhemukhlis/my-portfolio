import React, { useEffect, useState, Fragment } from 'react';
import Cover from "./CoverPage/cover";
import About from "./AboutMePage/about_me";
import Works from "./MyWorksPage/works";
import Skills from "./SkillsPage/skills";
import { Footer } from "./Footer/footer";
import { fetchVariables } from '../provider/controller';
import { loading_container } from './style';

function Portfolio( ) {
	const [personalInfo,
		setPersonalInfo] = useState({ full_name: "", birthday: "", job: "", bio: "", about_me: "" });
	const [sourceImage,
		setSourceImage] = useState({ cover_image: "", profile_image: "" });
	const [contact,
		setContact] = useState([ ]);
		const [myWorks,
			setMyWorks] = useState([ ]);
	const [loaded,
		setLoaded] = useState( false );
	useEffect(( ) => {
		fetchVariables( ).then(async res => {
			const { personal_info, source_image, contact, my_works } = res;
			setPersonalInfo(( prevState ) => ({
				...prevState,
				...personal_info
			}));
			setSourceImage(( prevState ) => ({
				...prevState,
				...source_image
			}));
			setContact( contact );
			setMyWorks( my_works );
			setLoaded( true );
		});
	}, [ ]);
	return ( loaded ? <Fragment>
		<Cover
			full_name={personalInfo['full_name']}
			job={personalInfo['job']}
			bio={personalInfo['bio']}
			cover_image={sourceImage['cover_image']}
			profile_image={sourceImage['profile_image']}/>
		<About
			about_me={personalInfo['about_me']}
			birthday={personalInfo['birthday']}
			contact={contact}/>
		<Works my_works={myWorks}/>
		<Skills/>
		<Footer/>
	</Fragment> : <div style={loading_container}>
		<h2 style={{
			letterSpacing: '0.4vw'
		}}>Loading..</h2>
	</div>);
}
export default Portfolio;