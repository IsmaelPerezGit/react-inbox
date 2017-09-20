import React from 'react'
import Message from './Message'

class Messages extends React.Component {


  render () {
    const messages = this.props.messages.map((message,idx) => {
      return <Message key={idx} message={message} handleStar={this.props.handleStar} />
    })
    return (
      <div className='messages'>
        {messages}
      </div>
    )
  }
}
export default Messages
