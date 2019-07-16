import React from 'react';
import dateFns from "date-fns";

import 'font-awesome/css/font-awesome.min.css';
import '../header/Header.css'
import '../main.css'

const Header = ({ prevMonth, nextMonth, currentMonth}) => {
    return (
    <div className="header row">
        <div className="col col-start">
            <div className="left icon">
                <i className="fa fa-chevron-left" onClick={prevMonth}></i>
            </div>
        </div>
        <div className="col col-center">
           {dateFns.format(currentMonth, "MMMM YYYY")} 
        </div>
        <div className="col col-end">
            <div className="right icon">
                <i className="fa fa-chevron-right" onClick={nextMonth}></i>
            </div>
        </div>
    </div>);
}

export default Header;