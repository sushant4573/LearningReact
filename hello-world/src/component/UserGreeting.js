import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : true
         }
     }
     
    render() {

        // let msg
        // if( this.state.isLoggedIn)
        // {
        //     msg = <h1>WELCOME SUSHANT</h1>
        // }
        // else{
        //     msg = <h1>WELCOME GUEST</h1>
        // }

        // return <div>{msg}</div>
        // return(
        //     this.state.isLoggedIn?
        //     <div><h1>WELCOME SUSHANT</h1></div>:
        //     <div><h1>WELCOME GUEST</h1></div>
        // )

        return this.state.isLoggedIn && <div>WELCOME SUSHANT</div>
    }
}

export default UserGreeting
