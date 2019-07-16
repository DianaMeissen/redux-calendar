import React from 'react';

import '../body/Body.css';
import '../main.css';
import dateFns from "date-fns";

const CalendarBody = ({ currentMonth, selectedDate, openModal }) => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);

    const rows = [];
    let days = [];
    let day = dateFns.startOfWeek(monthStart);
    let formattedDate = "";
    while (day <= dateFns.endOfWeek(monthEnd)) {
        for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, "D");
            const cloneDay = day;
            days.push(
                <div
                    className={`col cell ${
                    !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={() => openModal(dateFns.parse(cloneDay))}
                >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
                </div>
            );
            day = dateFns.addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>{days}</div>
        );
        days = [];
    }
    
    return <div className="body">{rows}</div>;
}

export default CalendarBody;