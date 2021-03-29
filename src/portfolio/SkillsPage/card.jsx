import React, { useState } from 'react';
import { Button } from "./btn";
import {
	GridItem,
	GridItemImage,
	GridItemTitle,
	GridItemDateTime,
	GridItemContent,
	GridItemButton
} from '../style';
import { IcLightAngleDown, IcLightAngleUp } from "../react-icon-svg";

function Card(props) {
    const [show,setShow] = useState(false)
    return(
		<div style={GridItem}>
			<div>
				<img style={GridItemImage} src={props.data.img_url} alt="#"/>
				<div>
					<h3 style={GridItemTitle}>{props.data.title}</h3>
					<h5 style={GridItemDateTime}>{props.data.date}</h5>{show ? (
						<p style={GridItemContent}>{props.data.caption}</p>
					) : null}</div>
				<div style={GridItemButton}>
					<Button
						btnClick={( ) => setShow( !show )}
						title={show ? <IcLightAngleUp width='2vh' fill='#777'/> : <IcLightAngleDown width='2vh' fill='#777'/>}/>
				</div>
			</div>
		</div>
	);
}
export default Card;