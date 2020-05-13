import React from 'react';
import 'typeface-montserrat';
import 'typeface-fira-mono';

import Notifier from './appbase/_layout/components/Notifier';
import Routes from './pages/_index';
import ScrollToTop from './pages/_routes/ScrollToTop';
import Providers from './providers';
import AuthProvider from './providers/AuthProvider';
import DictionaryProvider from './providers/DictionaryProvider';

// TODO: accessibility check
function App() {
    return (
        <Providers>
            <AuthProvider>
                <DictionaryProvider>
                    <Notifier />
                    <ScrollToTop />
                    <Routes />
                </DictionaryProvider>
            </AuthProvider>
        </Providers>
    );
}

export default App;
