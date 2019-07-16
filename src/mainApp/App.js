import React from 'react';

import CalendarBody from '../body/CalendarBody';
import ModalWindow from '../modalWindow/modalWindow'
import CalendarHead from '../head/CalendarHead';
import Header from '../header/Header'
import dateFns from "date-fns";

import '../main.css'

class App extends React.Component {
  state = {
    selectedDate: new Date(),
    currentMonth: new Date(),
    isModalOpened: false,
  }

  openModal = () => {
    this.setState({openModal: true})
  }

  closeModal = () => {
    this.setState({openModal: false})
  }

  openModal = () => {
    this.setState({
      openModal: true
    });
  }

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
    return (
      <div className="App">
        <h1>Redux calendar app</h1>
        <div className="main-container">
          {this.state.isModalOpened && <ModalWindow />}
          <Header 
            currentMonth={this.state.currentMonth}
            nextMonth={this.nextMonth} 
            prevMonth={this.previousMonth} 
          />
          <CalendarHead currentMonth={this.state.currentMonth} />
          <CalendarBody 
            openModal={this.openModal}
            selectedDate={this.state.selectedDate}
            currentMonth={this.state.currentMonth}
          />
        </div>
      </div>
    );
  }
}

export default App;
