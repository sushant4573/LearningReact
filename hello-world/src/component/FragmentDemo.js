import React, { Component } from 'react'

 class FragmentDemo extends Component {
     heading = {
         color : 'red',
         fontSize : '7px'
     }
    render() {
        return (
            <React.Fragment>
                <h1>Fragment Demo</h1>
                <p>This is the Description of Fragment Demo</p>
            </React.Fragment>
        )
    }
}

export default FragmentDemo
