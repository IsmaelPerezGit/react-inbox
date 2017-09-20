import React from 'react'
import Message from './Message'

class Messages extends React.Component {


  render () {
    const messages = this.props.messages.map((message,idx) => {
      return <Message key={idx} message={message} />
    })
    return (
      <div className='messages'>
        {messages}
      </div>
    )
  }
}
export default Messages
