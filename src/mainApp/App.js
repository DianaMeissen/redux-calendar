import React from 'react';

import CalendarBody from '../body/CalendarBody';
import CalendarHead from '../head/CalendarHead';
import Header from '../header/Header'
import dateFns from "date-fns";

import '../main.css'

class App extends React.Component {
  state = {
    selectedDate: new Date(),
    currentMonth: new Date(),
  }

  onDateClick = day => {}

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  previousMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Redux calendar app</h1>
        <div className="main-container">
          <Header 
            currentMonth={this.state.currentMonth}
            nextMonth={this.nextMonth} 
            prevMonth={this.previousMonth} 
          />
          <CalendarHead currentMonth={this.state.currentMonth} />
          <CalendarBody />
        </div>
      </div>
    );
  }
}

export default App;
