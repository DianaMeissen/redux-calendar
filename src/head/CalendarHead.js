import React from 'react';

import dateFns from "date-fns";
import '../head/Head.css'
import '../main.css'

const CalendarHead = ({ currentMonth }) => {
    const dateFormat = "dddd";
    const daysOfWeek = [];

    for (let i = 0; i < 7; i++) {
        daysOfWeek.push(
            <div className="col col-center" key={i}>
                {dateFns.format(dateFns.addDays(dateFns.startOfWeek(currentMonth), i), dateFormat)}
            </div>
        );
    }

    return (
        <div className="days row">{daysOfWeek}</div>
    );
}

export default CalendarHead;