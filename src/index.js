import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import * as serviceWorker from './serviceWorker';
import { DisableReactDevTools } from "./lib/devtool-killer";
DisableReactDevTools( true );
ReactDOM.render(<Portfolio/>, document.getElementById( 'root' ));

serviceWorker.register({
	onUpdate: registration => {
		alert( 'this page need to reload, reload now?' );
		window
			.location
			.reload( );
		if ( registration && registration.waiting ) {
			registration
				.waiting
				.postMessage({ type: 'SKIP_WAITING' });
			registration
				.waiting
				.addEventListener('statechange', e => {
					if ( e.target.state === 'activated' ) {
						window
							.location
							.reload( );
					}
				});
		}
	}
});
