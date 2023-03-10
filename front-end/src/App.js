import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Contacts from './scenes/contacts';
import Dashboard from './scenes/dashboard';
import DataTypes from './scenes/data-types';
import FAQ from './scenes/faq';
import Form from './scenes/form';
import NewTemplates from './scenes/templates/new-template';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Templates from './scenes/templates';
import Topbar from './scenes/global/Topbar';
import { useState } from 'react';

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Sidebar isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route element={<Templates />} path="/templates" />
                            <Route element={<NewTemplates />} path="/new-template" />
                            <Route element={<DataTypes />} path="/data-types" />
                            {/* <Route element={<Settings />} path="/settings" />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<Logout />} path="/logout" /> */}
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/form" element={<Form />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
