import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './styles.scss';

import Box from './components/box/box';

import HeroImage from './images/hero.jpg';

class App extends React.Component {
  render() {
    return (
		<div>
			<p className={Styles.text}>this is app</p>
			<Box/>
			<img src={HeroImage} width='200' height='200'/>
		</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));