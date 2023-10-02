import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Home, Dashboard, Share, Signup, Ready } from './components';

export default function Tabs() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video/:videoId" element={<Share />} />
      </Routes>
    </div>
  );
}