import React, { Component } from 'react'

class EventBind extends Component {
    changeMsg()
    {
        this.setState({
            message : 'Good Bye'
        })
    }
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.changeMsg = this.changeMsg.bind(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMsg}>Click</button>
            </div>
        )
    }
}

export default EventBind
