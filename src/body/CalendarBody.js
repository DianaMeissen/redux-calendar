import React from 'react';


const CalendarBody = ({arr}) => {
    return (
        <div className="body">
            <div className="body-row">
                <div className="first day">Monday</div>
                <div className="first day">Tuesday</div>
                <div className="first day">Wednesday</div>
                <div className="first day">Thursday</div>
                <div className="first day">Friday</div>
                <div className="first day">Saturday</div>
                <div className="last day">Sunday</div>
            </div>
        </div>
    )
}

export default CalendarBody;