import React, { Component } from 'react';

class Message extends React.Component {
  render () {
    let subject, read, starred, selected, labels;
    ({subject, read, starred, selected, labels}=  this.props.message)

    let labelSpans = labels.map((label, idx) => {
      return <span className="label label-warning" key={idx}>{label}</span>
    })
    return(
      <div className={selected ? "row message selected" : read ? "row message read" : "row message unread"}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              {selected ? <input type="checkbox" checked/> : <input type="checkbox"/>}
            </div>
            <div className="col-xs-2">
              <i className={starred ? "star fa fa-star" : "star fa fa-star-o"}
                onClick={this.props.handleStar}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {labelSpans}
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    )
  }
}

export default Message
