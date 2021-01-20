import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Tribute from '../components/tribute';
import styles from '../styles/styles.scss';

const AppRouter = () => {
    return <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Tribute} exact={true}/>
                    </Switch>
                </div>
            </BrowserRouter>;
};

export default AppRouter;