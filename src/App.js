import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AI_Agents from './pages/AI_Agents'; // Assuming these pages exist
import MyAI_Agents from './pages/MyAI_Agents'; // Assuming these pages exist
import CreateAI_Agent from './pages/CreateAI_Agent'; // Assuming these pages exist
import Account from './pages/Account';
import Agency from './pages/Agency';
import SubAccounts from './pages/SubAccounts';
import WhiteLabelAPI from './pages/WhiteLabelAPI';
import Marketplace from './pages/Marketplace';
import Help from './pages/Help';
import Sidebar from './pages/Sidebar'; // Sidebar component

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Sidebar included in the layout */}
        <div className="content flex-1 ml-64">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ai-agents" element={<AI_Agents />} />
              <Route path="/ai-agents/my" element={<MyAI_Agents />} />
              <Route path="/ai-agents/create" element={<CreateAI_Agent />} />
              <Route path="/account" element={<Account />} />
              {/* <Route path="/agency" element={<Agency />} />
              <Route path="/sub-accounts" element={<SubAccounts />} /> */}
              <Route path="/white-label-api" element={<WhiteLabelAPI />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/help" element={<Help />} />
              {/* <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
