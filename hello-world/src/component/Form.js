import React, { Component } from 'react'


 class Form extends Component {
    handleUserNameChange = (event) =>
    {
        this.setState({
            username : event.target.value
        })
    }
     constructor(props) {
         super(props)
     
         this.state = {
              username : ''
         }
     }
     
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>USERNAME</label>
                        <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
