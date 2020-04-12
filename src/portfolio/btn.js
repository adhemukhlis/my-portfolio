import React from 'react';
import { $Button } from "./style";
export const Button = props => (
	<button style={$Button} onClick={props.btnClick}>{props.title}</button>
);