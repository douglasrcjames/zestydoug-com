import React from 'react';
import { Router } from 'react-router-dom';

import history from './history';
import Routes from "./routes";

// CSS
import "./assets/css/Text.css";
import "./assets/css/Align.css";
import "./assets/css/Images.css";
import "./assets/css/Misc.css";

// This component fixes bug where new page load would sometimes be in the middle or bottom
import ScrollToTop from "./components/misc/ScrollToTop";
import { FirebaseAnalytics } from './components/misc/Misc';

function App() {
  return (
    <Router history={history}>
        <FirebaseAnalytics />
        <ScrollToTop>
            {/* <Header /> */}
            <Routes />
            {/* <Footer /> */}
        </ScrollToTop>
    </Router>
  );
}

export default App;
