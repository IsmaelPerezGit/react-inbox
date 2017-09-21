import React, {Component} from 'react';
import Message from './Message'

class Messages extends Component {
  render() {
    const messages = this.props.messages.map((message, idx) => {
      return <Message key={idx} message={message} handleStar={this.props.handleStar} handleCheckbox={this.props.handleCheckbox}/>
    })
    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
}
export default Messages;
