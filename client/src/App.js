import React from 'react';
import NavBar from './components/navBar';
import AllContacts from './components/showAllContacts';
import AddContact from './components/addNewContact';
import EditContact from './components/editContact';
import NotFound from './components/notFound'; 
// import CodeForInterview from './components/CodeForInterview';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<AllContacts /> } />
        <Route path="all" element={<AllContacts /> } />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;




