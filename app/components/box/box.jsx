import React from 'react';
import Styles from './styles.scss';

export default class Box extends React.Component{
	render(){
		return(
			<p className={Styles.text}>this is box</p>
		);
	}
}