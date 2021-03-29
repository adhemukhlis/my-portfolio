import React from 'react';
import Card from "../SkillsPage/card";
import { Container_workpage, Title, TitleDark, BLACK4, GridContainer } from "../style";
import { IcSolidLightbulbOn } from "../react-icon-svg";
import PropTypes from 'prop-types';
function Works(props) {
	const {my_works} = props
	return (
		<div style={Container_workpage}>
			<div style={Title}>
				<IcSolidLightbulbOn
					style={{
					marginRight: '2vw'
				}}
					height="6vh"
					fill={BLACK4}/>
				<h1 style={TitleDark}>Karya</h1>
			</div>
			<div style={GridContainer}>{my_works.length !== 0 && my_works.map(( data, i ) => ( <Card key={i} data={data}/> ))}</div>
		</div>
	);
}
Works.propTypes = {
	my_works: PropTypes.array
};
export default Works;