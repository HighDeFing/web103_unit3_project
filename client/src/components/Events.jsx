// client/src/components/Button.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowAllEvents = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/events');
  };

  return (
      <div className="header-buttons">

    <button onClick={handleClick}>Events</button>
      </div>
  );
}

export default ShowAllEvents;