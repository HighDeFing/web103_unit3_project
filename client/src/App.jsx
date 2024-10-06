import React from 'react';
import './App.css';
import Header from './components/Header';
import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
import EventsPage from './pages/EventsPage';
import LocationEvents from './pages/LocationEvents';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/events',
      element: <EventsPage />
    },
      {
      path: '/locations/:index/events',
      element: <LocationEvents />
    }
  ];

  const element = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {element}
    </div>
  );
}

export default App;