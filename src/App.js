import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import Messages from './components/Messages'

class App extends Component {
  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      }, {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      }, {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      }, {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      }, {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      }, {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      }, {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      }, {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  handleStar = (id) => {
    let messages = this.state.messages;
    messages = messages.map(message => {
      if (message.id === id) {
        message.starred = !message.starred
      }
      return message
    })
    this.setState({messages: messages})
  }

  handleCheckbox = (id) => {
    let messages = this.state.messages;
    messages = messages.map(message => {
      if (message.id === id) {
        message.selected = message.selected
          ? false
          : true
      }
      return message
    })
    this.setState({messages: messages})
  }

  handleBulk = () => {
    let messages = this.state.messages;
    if (messages.every(isSelected)) {
      messages = messages.map(message => {
        message.selected = false;
        return message;
      })
    } else {
      messages = messages.map(message => {
        message.selected = true;
        return message;
      })
    }
    this.setState({messages: messages})
  }

  render() {
    return (
      <div className="App">
        <Toolbar handleBulk={this.handleBulk}/>
        <Messages messages={this.state.messages} handleStar={this.handleStar} handleCheckbox={this.handleCheckbox}/>
      </div>
    );
  }
}

function isSelected(message) {
  return message.selected
}

export default App
