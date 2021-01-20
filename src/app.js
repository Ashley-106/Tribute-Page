import React from 'react';
import reactDOM from 'react-dom';
import './styles/base/base.scss';

import AppRouter from './routers/AppRouter';

const Template = () => {
    return <div>
                    <h1>React Boiler Plate</h1>
            </div>;
}; 

reactDOM.render(<AppRouter />, document.getElementById('app'));