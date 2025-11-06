
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3 col-lg-2 mb-4">
          <nav className="navbar navbar-dark bg-primary rounded h-100 p-3 d-flex flex-column align-items-start">
            <Link className="navbar-brand fw-bold d-flex align-items-center mb-4" to="/">
              <img src="/octofitapp-small.png" alt="Octofit Logo" className="octofit-logo" />
              Octofit Tracker
            </Link>
            <ul className="navbar-nav flex-column w-100">
              <li className="nav-item mb-2"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item mb-2"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item mb-2"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item mb-2"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item mb-2"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-md-9 col-lg-10">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<div className="mt-5"><h1 className="display-4 fw-bold">Welcome to Octofit Tracker!</h1></div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
