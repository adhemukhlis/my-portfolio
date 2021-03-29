import React from 'react';
import { SocialNetwork, BLACK4 } from "../style";
import posed from 'react-pose';
import { ConfigBoxPosed } from "./config";
import { IcBrandGithub, IcBrandInstagram, IcBrandFacebook, IcLightEnvelope } from "../react-icon-svg";
function Social( props ) {
	const SocialIcons = {
		"instagram": <IcBrandInstagram fill={BLACK4} height="8vh"/>,
		"facebook": <IcBrandFacebook fill={BLACK4} height="8vh"/>,
		"github": <IcBrandGithub fill={BLACK4} height="8vh"/>,
		"email": <IcLightEnvelope fill={BLACK4} height="8vh"/>
	};
	const Box = posed.div( ConfigBoxPosed );
	const { social_data } = props;
	return (
		<div style={SocialNetwork}>
			{social_data.map(res => {
				return ( res.name === 'email' ? <a
					key={res.name}
					style={{
					margin: '2vw'
				}}
					href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + res.link + "&su=from%20Website"}
					target="_blank"
					rel="noopener noreferrer">
					<Box>{SocialIcons[res.name]}</Box>
				</a> : <a
					key={res.name}
					style={{
					margin: '2vw'
				}}
					href={res.link}
					target="_blank"
					rel="noopener noreferrer">
					<Box>{SocialIcons[res.name]}</Box>
				</a>);
			})}
		</div>
	);
}
export default Social;