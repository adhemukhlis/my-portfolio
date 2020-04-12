import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import './portfolio/card/style.css'
import App from './portfolio/profile';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register({
    onUpdate: registration => {
        alert('New version available!  Ready to update?');
        window
            .location
            .reload();
        if (registration && registration.waiting) {
            registration
                .waiting
                .postMessage({type: 'SKIP_WAITING'});
            registration
                .waiting
                .addEventListener('statechange', e => {
                    if (e.target.state === 'activated') {
                        window
                            .location
                            .reload()
                    }
                })
        }
    }
});
