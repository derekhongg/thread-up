import logo from './logo.svg';
import { useState } from "react";
import { BrowswerRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Chat from '@/components/chat'

function App() {
  return (
    <div className="App">
      <BrowswerRouter>
        <Routes>
          <Route path="/chat" element={< Chat />} />
        </Routes>
      </BrowswerRouter>
    </div>
  );
}

export default App;
