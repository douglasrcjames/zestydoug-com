import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";

import { Page404 } from "./components/misc/Page404";

// Pages
import Home from './components/pages/Home'
import About from './components/pages/About';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route exact path="/about" component={() => <About />} />
                <Route component={() => <Page404 />} />
            </Switch>
        )
    }
}

export default withRouter(Routes);