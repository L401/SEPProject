import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import Dashboard from '../Dashboard/Dashboard.js';
import Login from '../Login/Login.js';
import Reviews from '../Pages/Review.js';
import BookTicket from '../Pages/BookTickets.js';
import CCForm from '../Pages/CCForm.js';
import TicketCode from '../Pages/TicketCode.js';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div style={{ backgroundColor: '#404040', width: '1920px', height: '920px' }} className='wrapper'>
      <div>
        <Navbar bg="#404040">
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Ftexas-tech-logo-clip-art-7.png&f=1&nofb=1&ipt=313196dfce193458ddcd6eb445ae00644965ae5f58e5d06d96ee0658555c76cc&ipo=images' height='75' width='75'></img>
          <text style={{ color: 'white', fontSize: 40, paddingRight: '1050px' }}>Movie Booking System</text>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <form>
            <Button variant="secondary">Search</Button>
          </form>
        </Navbar>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Pages/Reviews' element={<Reviews />} />
          <Route path='/Pages/BookTickets' element={<BookTicket />} />
          <Route path='/CCForm' element={<CCForm />} />
          <Route path='/Pages/TicketCode' element={<TicketCode />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;