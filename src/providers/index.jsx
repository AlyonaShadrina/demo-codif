import MomentUtils from '@date-io/moment';
import { CssBaseline, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import httpService from '../api/interceptors';
import store from '../appbase';
import ErrorBoundary from '../appbase/_common/ErrorBoundary';
import MuiTheme from '../styles/MuiTheme';
import NotificationProvider from './NotificationProvider';


const Providers = ({ children, storeInitialState = {} }) => {
    const storeState = store(storeInitialState);

    const history = createBrowserHistory();
    httpService.setupInterceptors(storeState, history);

    return (
        <Provider store={storeState}>
            <div className="App">
                <Router history={history}>
                    <ThemeProvider theme={MuiTheme}>
                        <CssBaseline>
                            <ErrorBoundary>
                                <Typography component="div">
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <NotificationProvider>
                                            {children}
                                        </NotificationProvider>
                                    </MuiPickersUtilsProvider>
                                </Typography>
                            </ErrorBoundary>
                        </CssBaseline>
                    </ThemeProvider>
                </Router>
            </div>
        </Provider>
    );
};

export default Providers;
