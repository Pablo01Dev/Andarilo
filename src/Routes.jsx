import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './routes/Home';
import IdentidadeVisual from './routes/IdentidadeVisual';
import Website from './routes/Website';
import Publicidade from './routes/Publicidade';
import Agradecimento from './routes/Agradecimento';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/identidade-visual" element={<IdentidadeVisual />} />
                <Route path="/website" element={<Website />} />
                <Route path="/publicidade" element={<Publicidade />} />
                <Route path="/agradecimento" element={<Agradecimento />} />
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
