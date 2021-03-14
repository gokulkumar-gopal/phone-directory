import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
import './common/common.css';

class App extends Component {
  
  deleteHandler() {
    alert("Hi");
  }

  render() {
    let subscribers = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "888888888"
      },
      {
        id: 2,
        name: "Srishti",
        phone: "999999999"
      }
    ]
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(sub=> {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <button className="custom-btn add-btn" onClick={this.deleteHandler}>Delete</button>
                </div>
            })
          }
        </div>
      </div>
);
}
}

export default App;