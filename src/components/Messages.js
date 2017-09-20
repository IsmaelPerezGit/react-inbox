import React from 'react'
import App from '../App'

const Messages = ({messages}) =>{

let messageList = messages.map(message => {
  <p>{message}</p>
})

return (
  <div>
    <p>Messages</p>

  </div>
)
}
export default Messages
