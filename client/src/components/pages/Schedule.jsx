import React from 'react';
import { Redirect } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Auth from '../../utils/auth';

const localizer = momentLocalizer(moment);

{Auth.loggedIn() ? (
  <>
   const Schedule = () => {
  const isLoggedIn = Auth.loggedIn();

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const events = [
    {
      title: 'book vehicle',
      start: new Date(),
      end: new Date(),
    },
    
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
    <button className="btn btn-lg btn-light m-2" onClick={logout}>
      Logout
    </button>
  </>
) : (
  <>
    <Link className="btn btn-lg btn-info m-2" to="/login">
      Login
    </Link>
    <Link className="btn btn-lg btn-light m-2" to="/signup">
      Signup
    </Link>
  </>
)}