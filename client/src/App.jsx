import React from 'react';
import './App.css';
import Header from './components/Header';
import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
import EventsPage from './pages/EventsPage';

const App = () => {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/events',
      element: <EventsPage />
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