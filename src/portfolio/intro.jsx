import React, { Component } from 'react';
import posed from 'react-pose';
import { Button } from "./btn";
import { ConfigBoxPosed } from "./config";
import SocialNetwork from "./social";
import {
	$ProfilePage,
	$Desc,
	$Myname,
	$As,
	$Focus,
	$Aboutme,
	$ButonContainer
} from "./style";
import { ProfileImg } from "./intro_prop";
class Intro extends Component {
	state = {
		showAboutMe: false,
		fullName: 'Mukhlis Adhe Purwanto',
		imgUrl: require( './img/me-no-bg-potrait.png' ),
		focus: 'Front-end Developer | Designer',
		quote: '"saya membuat antarmuka indah yang sederhana, ramah, serta memiliki performa yang optimal!"',
		instagram: 'https://www.instagram.com/mukhlisadhe/',
		facebook: 'https://www.facebook.com/mukhlisadhepurwanto',
		github: 'https://github.com/adhemukhlis/',
		email: 'adhemukhlis@gmail.com',
	};
	getOld = ( ) => {
		return 1900 + new Date( ).getYear( ) - 1998
	}
	render( ) {
		const Box = posed.div( ConfigBoxPosed );
		const {
			fullName,
			imgUrl,
			focus,
			quote,
		
			instagram,
			github,
			facebook,
			email
		} = this.state;
		return (
			<div style={$ProfilePage}>
				<div style={$Desc}>
					<p style={$Myname}>{fullName}</p>
					<p style={$As}>
						<i>{focus}</i>
					</p>
					<p style={$Focus}>
						<i >{quote}</i>
					</p>{this.state.showAboutMe
						? <p style={$Aboutme}>{"Hai, nama saya Mukhlis Adhe Purwanto, saya berumur "}{this.getOld( )}{" tahun. saya mahasiswa Institut Teknologi Telkom Purwokerto. saya tertarik dengan dunia Software Engineering yang memiliki motivasi dan semangat di bidang teknologi kreatif dan inovasi. saya sangat suka membangun software indah yang sederhana, ramah serta memiliki performa yang optimal, senang jika dapat bertemu dengan kamu dilain waktu."}</p>
						: null}
					<Box>
						<div style={$ButonContainer}>
							<Button btnClick={( ) => this.setState({
								showAboutMe: !this.state.showAboutMe
							})} title='tentang saya'/>
						</div>
					</Box>
					<SocialNetwork data={{
						facebook: facebook,
						instagram: instagram,
						github: github,
						email: email
					}}/>
				</div>
				<ProfileImg url={imgUrl}/>
			</div>
		)
	}
}
export default Intro;