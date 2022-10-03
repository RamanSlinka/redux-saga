import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserHistory} from  'history';
import {Provider} from "react-redux";
import store from "./redux/store";
import {Route, Router, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import LatestNews from "./pages/latestNews/LatestNews";
import PopularNews from "./pages/popularNews/PopularNews";



const history = createBrowserHistory()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path='/' exact>
                            <Home/>
                        </Route>
                        <Route path='/LatestNews' exact>
                            <LatestNews/>
                        </Route>
                        <Route path='/PopularNews' exact>
                            <PopularNews/>
                        </Route>
                    </Switch>
                </App>
            </Router>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
