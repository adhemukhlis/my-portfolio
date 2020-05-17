import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './portfolio/base'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Base/>, document.getElementById('root'));

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
