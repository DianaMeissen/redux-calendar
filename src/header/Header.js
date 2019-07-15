import React from 'react';
import dateFns from "date-fns";

import 'font-awesome/css/font-awesome.min.css';
import '../header/Header.css'
import '../main.css'

const Header = ({ prevMonth, nextMonth, currentMonth}) => {
    const dateFormat = "MMMM YYYY";

    return (
    <div className="header row">
        <div className="col col-start" onClick={prevMonth}>
            <i className="fa fa-chevron-left"></i>
        </div>
        <div className="col col-center">
            <span>
               {dateFns.format(currentMonth, dateFormat)} 
            </span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
            <i className="fa fa-chevron-right"></i>
        </div>
    </div>);
}

export default Header;