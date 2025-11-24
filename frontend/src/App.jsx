import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from './Components/context/LanguageProvider';

// Always visible components
import Nav from './Components/Nav';
import Profile from './Components/fisrt_half/Profile';
import PortfolioTabs from './Components/Tabs/PortflioTabs';
import GoodBye from './Pages/GoodBye';

// Pages
import BlogDetails from "./Components/Tabs/BlogDetails";

function App() {
  return (
    <LanguageProvider>
      <Router>

        {/* Always visible UI */}
        <Nav />
        <Profile />
        <PortfolioTabs />
        <GoodBye />

      </Router>
    </LanguageProvider>
  );
}

export default App;
